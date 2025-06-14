import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { useNavigate } from 'react-router-dom'
import { FaShieldAlt, FaTruck, FaCreditCard, FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLock, FaMoneyBillWave, FaMapPin, FaStore } from 'react-icons/fa'

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart()
  const { showToast } = useToast()
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Shipping Address
    address: '',
    city: '',
    region: '',
    postalCode: '',
    
    // Delivery Method
    deliveryMethod: 'door-delivery', // 'door-delivery' or 'pickup-station'
    pickupStation: '',
    
    // Payment Information
    paymentMethod: 'paystack', // 'paystack' or 'cash-on-delivery'
    
    // Order Notes
    orderNotes: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isProcessing, setIsProcessing] = useState(false)

  // Pickup stations data
  const pickupStations = [
    { id: 'accra-central', name: 'Accra Central Station', address: 'Makola Market, Accra Central' },
    { id: 'east-legon', name: 'East Legon Station', address: 'East Legon Shopping Mall' },
    { id: 'tema', name: 'Tema Station', address: 'Tema Community 1 Market' },
    { id: 'kumasi', name: 'Kumasi Station', address: 'Kejetia Market, Kumasi' },
    { id: 'takoradi', name: 'Takoradi Station', address: 'Market Circle, Takoradi' }
  ]
  // Calculate totals
  const subtotal = getCartTotal()
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + shipping

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    // Personal Information validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    
    // Delivery Method validation
    if (formData.deliveryMethod === 'pickup-station' && !formData.pickupStation.trim()) {
      newErrors.pickupStation = 'Please select a pickup station'
    }
    
    // Shipping Address validation (only for door delivery)
    if (formData.deliveryMethod === 'door-delivery') {
      if (!formData.address.trim()) newErrors.address = 'Address is required'
      if (!formData.city.trim()) newErrors.city = 'City is required'
      if (!formData.region.trim()) newErrors.region = 'Region is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      showToast('Please fill in all required fields', 'error')
      return
    }
    
    if (cartItems.length === 0) {
      showToast('Your cart is empty', 'error')
      return
    }
    
    setIsProcessing(true)
    
    try {
      if (formData.paymentMethod === 'paystack') {
        // Initialize Paystack payment
        await handlePaystackPayment()
      } else {
        // Cash on delivery - process order directly
        await processCashOnDeliveryOrder()
      }
    } catch (error) {
      console.error('Order processing error:', error)
      showToast(error.message || 'Failed to process order. Please try again.', 'error')
    } finally {
      setIsProcessing(false)
    }
  }

  // Load Paystack script dynamically
  const loadPaystackScript = () => {
    return new Promise((resolve, reject) => {
      if (window.PaystackPop) {
        resolve(window.PaystackPop)
        return
      }

      const script = document.createElement('script')
      script.src = 'https://js.paystack.co/v1/inline.js'
      script.onload = () => {
        if (window.PaystackPop) {
          resolve(window.PaystackPop)
        } else {
          reject(new Error('Paystack failed to load'))
        }
      }
      script.onerror = () => reject(new Error('Failed to load Paystack script'))
      document.head.appendChild(script)
    })
  }

  const handlePaystackPayment = async () => {
    try {
      // Load Paystack script
      await loadPaystackScript()

      // Check if public key is available
      const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY
      if (!publicKey) {
        throw new Error('Payment configuration error. Please contact support.')
      }

      console.log('Initializing Paystack with key:', publicKey.substring(0, 10) + '...')
      console.log('Payment amount:', total, 'GHS')

      return new Promise((resolve, reject) => {
        const handler = window.PaystackPop.setup({
          key: publicKey,
          email: formData.email,
          amount: Math.round(total * 100), // Convert to pesewas and ensure it's an integer
          currency: 'GHS',
          ref: 'order_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
          metadata: {
            custom_fields: [
              {
                display_name: "Customer Name",
                variable_name: "customer_name",
                value: `${formData.firstName} ${formData.lastName}`
              },
              {
                display_name: "Phone Number",
                variable_name: "phone_number",
                value: formData.phone
              },
              {
                display_name: "Delivery Method",
                variable_name: "delivery_method",
                value: formData.deliveryMethod
              },
              {
                display_name: "Order Items",
                variable_name: "order_items",
                value: cartItems.map(item => `${item.name} (${item.quantity})`).join(', ')
              }
            ]
          },
          callback: function(response) {
            console.log('Payment successful:', response)
            showToast('Payment successful! Processing your order...', 'success')
            
            // Process the order with payment reference
            processOrderWithPayment(response.reference)
              .then(() => resolve(response))
              .catch(error => reject(error))
          },
          onClose: function() {
            const errorMsg = 'Payment was cancelled'
            console.log(errorMsg)
            reject(new Error(errorMsg))
          }
        })

        handler.openIframe()
      })
    } catch (error) {
      console.error('Paystack initialization error:', error)
      throw new Error(error.message || 'Failed to initialize payment. Please try again.')
    }
  }

  const processOrderWithPayment = async (paymentReference) => {
    try {
      console.log('Processing order with payment reference:', paymentReference)
      
      const orderData = {
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone
        },
        delivery: {
          method: formData.deliveryMethod,
          address: formData.deliveryMethod === 'door-delivery' ? {
            street: formData.address,
            city: formData.city,
            region: formData.region,
            postalCode: formData.postalCode
          } : null,
          pickupStation: formData.deliveryMethod === 'pickup-station' ? formData.pickupStation : null
        },
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })),        payment: {
          method: 'paystack',
          reference: paymentReference,
          amount: total
        },
        totals: {
          subtotal,
          shipping,
          total
        },
        orderNotes: formData.orderNotes,
        orderDate: new Date().toISOString()
      }
      
      console.log('Order data:', orderData)
      
      // TODO: Replace this with actual API call to your backend
      // const response = await fetch('/api/orders', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(orderData)
      // })
      // 
      // if (!response.ok) {
      //   throw new Error('Failed to create order')
      // }
      // 
      // const result = await response.json()
      
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Clear cart and redirect
      clearCart()
      showToast('Order placed successfully! You will receive a confirmation email shortly.', 'success')      
      // You might want to redirect to an order confirmation page instead
      navigate('/order-success', { 
        state: { 
          orderData,
          paymentReference 
        } 
      })
      
    } catch (error) {
      console.error('Order processing error:', error)
      throw new Error('Order processing failed. Please contact support with your payment reference: ' + paymentReference)
    }
  }

  const processCashOnDeliveryOrder = async () => {
    try {
      console.log('Processing cash on delivery order')
      
      const orderData = {
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone
        },
        delivery: {
          method: formData.deliveryMethod,
          address: formData.deliveryMethod === 'door-delivery' ? {
            street: formData.address,
            city: formData.city,
            region: formData.region,
            postalCode: formData.postalCode
          } : null,
          pickupStation: formData.deliveryMethod === 'pickup-station' ? formData.pickupStation : null
        },
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })),
        payment: {
          method: 'cash-on-delivery',
          amount: total        },
        totals: {
          subtotal,
          shipping,
          total
        },
        orderNotes: formData.orderNotes,
        orderDate: new Date().toISOString()
      }
      
      console.log('Cash on delivery order data:', orderData)
      
      // TODO: Replace with actual API call
      // const response = await fetch('/api/orders', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(orderData)
      // })
      // 
      // if (!response.ok) {
      //   throw new Error('Failed to create order')
      // }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      clearCart()
      showToast('Order placed successfully! You will pay upon delivery.', 'success')      
      // Redirect to order confirmation page
      navigate('/order-success', { 
        state: { 
          orderData 
        } 
      })
      
    } catch (error) {
      console.error('Cash on delivery processing error:', error)
      throw new Error('Order processing failed. Please try again.')
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Add some products to proceed with checkout</p>
            <button 
              onClick={() => navigate('/oil')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Checkout</h1>
          <p className="text-gray-600">Complete your order securely and safely</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FaUser className="text-purple-600 text-xl" />
                  <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Delivery Method */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FaTruck className="text-purple-600 text-xl" />
                  <h2 className="text-2xl font-semibold text-gray-800">Delivery Method</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Delivery Method Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="door-delivery"
                        checked={formData.deliveryMethod === 'door-delivery'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div className="flex items-center">
                        <FaMapPin className="mr-3 text-purple-600" />
                        <div>
                          <div className="font-semibold">Door Delivery</div>
                          <div className="text-sm text-gray-600">Delivery to your address</div>
                        </div>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="pickup-station"
                        checked={formData.deliveryMethod === 'pickup-station'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div className="flex items-center">
                        <FaStore className="mr-3 text-purple-600" />
                        <div>
                          <div className="font-semibold">Pickup Station</div>
                          <div className="text-sm text-gray-600">Collect from station</div>
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* Pickup Station Selection */}
                  {formData.deliveryMethod === 'pickup-station' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Select Pickup Station *</label>
                      <select
                        name="pickupStation"
                        value={formData.pickupStation}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.pickupStation ? 'border-red-500' : 'border-gray-300'}`}
                      >
                        <option value="">Choose a pickup station</option>
                        {pickupStations.map((station) => (
                          <option key={station.id} value={station.id}>
                            {station.name} - {station.address}
                          </option>
                        ))}
                      </select>
                      {errors.pickupStation && <p className="text-red-500 text-sm mt-1">{errors.pickupStation}</p>}
                    </div>
                  )}

                  {/* Address Fields - Only for Door Delivery */}
                  {formData.deliveryMethod === 'door-delivery' && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Enter your street address"
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Enter your city"
                          />
                          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Region *</label>
                          <select
                            name="region"
                            value={formData.region}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.region ? 'border-red-500' : 'border-gray-300'}`}
                          >
                            <option value="">Select Region</option>
                            <option value="greater-accra">Greater Accra</option>
                            <option value="ashanti">Ashanti</option>
                            <option value="central">Central</option>
                            <option value="eastern">Eastern</option>
                            <option value="northern">Northern</option>
                            <option value="western">Western</option>
                            <option value="volta">Volta</option>
                            <option value="upper-east">Upper East</option>
                            <option value="upper-west">Upper West</option>
                            <option value="brong-ahafo">Brong Ahafo</option>
                          </select>
                          {errors.region && <p className="text-red-500 text-sm mt-1">{errors.region}</p>}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                          <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Optional"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FaCreditCard className="text-purple-600 text-xl" />
                  <h2 className="text-2xl font-semibold text-gray-800">Payment Method</h2>
                </div>
                
                {/* Payment Method Selection */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paystack"
                        checked={formData.paymentMethod === 'paystack'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div className="flex items-center">
                        <FaCreditCard className="mr-3 text-purple-600" />
                        <div>
                          <div className="font-semibold">Online Payment</div>
                          <div className="text-sm text-gray-600">Pay with card, mobile money, bank transfer</div>
                        </div>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash-on-delivery"
                        checked={formData.paymentMethod === 'cash-on-delivery'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div className="flex items-center">
                        <FaMoneyBillWave className="mr-3 text-purple-600" />
                        <div>
                          <div className="font-semibold">Cash on Delivery</div>
                          <div className="text-sm text-gray-600">Pay when you receive your order</div>
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* Payment Method Information */}
                  {formData.paymentMethod === 'paystack' && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FaShieldAlt className="text-blue-600" />
                        <span className="font-semibold text-blue-800">Secure Online Payment</span>
                      </div>
                      <p className="text-blue-700 text-sm">
                        Your payment will be processed securely through Paystack. You can pay with:
                      </p>
                      <ul className="text-blue-700 text-sm mt-2 ml-4 list-disc">
                        <li>Visa, Mastercard, Verve cards</li>
                        <li>MTN Mobile Money, Vodafone Cash, AirtelTigo Money</li>
                        <li>Bank transfer</li>
                      </ul>
                    </div>
                  )}

                  {formData.paymentMethod === 'cash-on-delivery' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FaMoneyBillWave className="text-green-600" />
                        <span className="font-semibold text-green-800">Cash on Delivery</span>
                      </div>
                      <p className="text-green-700 text-sm">
                        Pay with cash when your order is delivered to you. Please have the exact amount ready.
                      </p>
                      <div className="text-green-700 text-sm mt-2">
                        <strong>Total to pay on delivery: GHC {total.toFixed(2)}</strong>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Order Notes */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Notes (Optional)</h2>
                <textarea
                  name="orderNotes"
                  value={formData.orderNotes}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Any special instructions for your order..."
                ></textarea>
              </div>              
              
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full lg:w-auto px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : formData.paymentMethod === 'paystack' ? (
                    'Proceed to Payment'
                  ) : (
                    'Place Order'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
                  {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => {
                    // Helper function to get numeric price value - matching CartContext logic
                    const getNumericPrice = (price) => {
                      let numericPrice;
                      if (typeof price === 'string') {
                        // Match the CartContext parsing logic exactly
                        numericPrice = parseFloat(price.replace('GHC ', ''));
                      } else {
                        numericPrice = parseFloat(price);
                      }
                      return isNaN(numericPrice) ? 0 : numericPrice;
                    };

                    const itemPrice = getNumericPrice(item.price);
                    const itemTotal = itemPrice * item.quantity;

                    return (
                      <div key={item.id} className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                          <div>
                            <p className="font-medium text-gray-800">{item.name}</p>
                            <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <span className="font-semibold text-gray-800">GHC {itemTotal.toFixed(2)}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Order Totals */}
                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>GHC {subtotal.toFixed(2)}</span>
                  </div>                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>{shipping === 0 ? 'FREE' : `GHC ${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t pt-3">
                    <span>Total:</span>
                    <span className="text-purple-600">GHC {total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Security Features */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaShieldAlt className="text-green-500" />
                    <span>SSL Encrypted Checkout</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaTruck className="text-blue-500" />
                    <span>Free shipping on orders over GHC 100</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaLock className="text-purple-500" />
                    <span>Secure Payment Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
