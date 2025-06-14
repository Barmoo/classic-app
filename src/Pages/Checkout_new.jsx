import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { FaShieldAlt, FaTruck, FaCreditCard, FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLock, FaMoneyBillWave, FaMapPin, FaStore, FaSignInAlt, FaUserPlus } from 'react-icons/fa'

const Checkout = () => {  const { cartItems, getCartTotal, clearCart } = useCart()
  const { showToast } = useToast()
  const { user, register } = useAuth()
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
    orderNotes: '',
    
    // Account creation option for guest users
    createAccount: false,
    password: '',
    confirmPassword: ''
  })

  // Pre-fill form with user data if logged in
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || ''
      }))
    }
  }, [user])
  // Helper function to create account for guest users
  const createGuestAccount = async () => {
    try {
      const result = await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        newsletter: false
      })
      
      if (result.success) {
        showToast(`Account created successfully! Welcome to BGG Classics, ${result.user.firstName}!`, 'success')
      } else {
        console.error('Account creation failed:', result.error)
        // Don't fail the order if account creation fails
        showToast('Order will be processed, but account creation failed. You can create an account later.', 'warning')
      }
    } catch (error) {
      console.error('Account creation error:', error)
      // Don't fail the order if account creation fails
      showToast('Order will be processed, but account creation failed. You can create an account later.', 'warning')
    }
  }
  
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
    
    // Account creation validation (for guest users only)
    if (!user && formData.createAccount) {
      if (!formData.password.trim()) {
        newErrors.password = 'Password is required'
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long'
      }
      if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = 'Please confirm your password'
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
    }
    
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
      
      // Create account if requested by guest user
      if (!user && formData.createAccount) {
        await createGuestAccount()
      }
      
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
      
      // Create account if requested by guest user
      if (!user && formData.createAccount) {
        await createGuestAccount()
      }
      
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
    return (      <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="text-center py-12 sm:py-20">
            <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">🛒</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Your cart is empty</h1>            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">Add some products to proceed with checkout</p>
            <button 
              onClick={() => navigate('/oil')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm sm:text-base"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Checkout</h1>
          <p className="text-gray-600 text-sm sm:text-base">Complete your order securely and safely</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-2">            {/* Login Suggestion for Guest Users */}
            {!user && (
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full p-2 sm:p-3">
                      <FaUser className="text-purple-600 text-base sm:text-lg" />
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                      Have an account? Sign in for a faster checkout
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Skip filling out your details every time and track your orders easily.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3">
                      <Link
                        to="/login"
                        state={{ from: { pathname: '/checkout' } }}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all w-full sm:w-auto"
                      >
                        <FaSignInAlt />
                        Sign In
                      </Link>
                      <Link
                        to="/register"
                        state={{ from: { pathname: '/checkout' } }}
                        className="flex items-center justify-center gap-2 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-50 transition-colors w-full sm:w-auto"
                      >
                        <FaUserPlus />
                        Create Account
                      </Link>
                      <span className="text-gray-500 text-sm self-center text-center sm:text-left">
                        or continue as guest below
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Welcome Back Message for Logged In Users */}
            {user && (
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full p-2 sm:p-3">
                    <FaUser className="text-purple-600 text-base sm:text-lg" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      Welcome back, {user.firstName}!
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Your details have been pre-filled for a faster checkout experience.
                    </p>
                  </div>
                </div>
              </div>
            )}            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Personal Information */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <FaUser className="text-purple-600 text-lg sm:text-xl" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Personal Information</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                      placeholder="Enter your phone number"                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>                {/* Optional Account Creation for Guest Users */}
                {!user && (
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                    <div className="flex items-start sm:items-center gap-3 mb-4">
                      <input
                        type="checkbox"
                        id="createAccount"
                        name="createAccount"
                        checked={formData.createAccount}
                        onChange={(e) => setFormData(prev => ({ ...prev, createAccount: e.target.checked }))}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-0.5 sm:mt-0"
                      />
                      <label htmlFor="createAccount" className="text-sm font-medium text-gray-700 leading-relaxed">
                        Create an account to track your orders and save your information for future purchases
                      </label>
                    </div>

                    {formData.createAccount && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="At least 6 characters"
                          />
                          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
                          <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Re-enter password"
                          />
                          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>              {/* Delivery Method */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <FaTruck className="text-purple-600 text-lg sm:text-xl" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Delivery Method</h2>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Delivery Method Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                  )}                  {/* Address Fields - Only for Door Delivery */}
                  {formData.deliveryMethod === 'door-delivery' && (
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className={`w-full px-3 sm:px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Enter your street address"
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
              </div>              {/* Payment Information */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <FaCreditCard className="text-purple-600 text-lg sm:text-xl" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Payment Method</h2>
                </div>
                
                {/* Payment Method Selection */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                  </div>                  {/* Payment Method Information */}
                  {formData.paymentMethod === 'paystack' && (
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FaShieldAlt className="text-purple-600" />
                        <span className="font-semibold text-purple-800">Secure Online Payment</span>
                      </div>
                      <p className="text-purple-700 text-sm">
                        Your payment will be processed securely through Paystack. You can pay with:
                      </p>
                      <ul className="text-purple-700 text-sm mt-2 ml-4 list-disc">
                        <li>Visa, Mastercard, Verve cards</li>
                        <li>MTN Mobile Money, Vodafone Cash, AirtelTigo Money</li>
                        <li>Bank transfer</li>
                      </ul>
                    </div>
                  )}

                  {formData.paymentMethod === 'cash-on-delivery' && (
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FaMoneyBillWave className="text-pink-600" />
                        <span className="font-semibold text-pink-800">Cash on Delivery</span>
                      </div>
                      <p className="text-pink-700 text-sm">
                        Pay with cash when your order is delivered to you. Please have the exact amount ready.
                      </p>
                      <div className="text-pink-700 text-sm mt-2">
                        <strong>Total to pay on delivery: GHC {total.toFixed(2)}</strong>
                      </div>
                    </div>
                  )}
                </div>
              </div>              {/* Order Notes */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Order Notes (Optional)</h2>
                <textarea
                  name="orderNotes"
                  value={formData.orderNotes}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Any special instructions for your order..."
                ></textarea>
              </div>
                {/* Submit Button */}
              <div className="text-center">                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
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

          {/* Order Summary */}          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Order Summary</h2>
                  {/* Cart Items */}
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
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

                {/* Security Features */}                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaShieldAlt className="text-purple-500" />
                    <span>SSL Encrypted Checkout</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaTruck className="text-pink-500" />
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
