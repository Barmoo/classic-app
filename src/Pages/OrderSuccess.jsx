import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaCheckCircle, FaTruck, FaEnvelope, FaPhone, FaHome, FaShoppingBag, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa'

const OrderSuccess = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [orderDetails, setOrderDetails] = useState(null)
  const [showConfetti, setShowConfetti] = useState(true)
  useEffect(() => {
    // Get order details from navigation state or URL params
    const orderData = location.state?.orderData
    const paymentReference = location.state?.paymentReference
    
    const details = orderData ? {
      orderNumber: 'ORD-' + Date.now(),
      paymentReference: paymentReference || 'REF-' + Date.now(),
      total: orderData.totals?.total || 0,
      subtotal: orderData.totals?.subtotal || 0,
      shipping: orderData.totals?.shipping || 0,
      tax: orderData.totals?.tax || 0,
      items: orderData.items || [],
      customerInfo: orderData.customer || {},
      delivery: orderData.delivery || {},
      orderDate: orderData.orderDate || new Date().toISOString()
    } : {
      orderNumber: 'ORD-' + Date.now(),
      paymentReference: new URLSearchParams(location.search).get('reference') || 'REF-' + Date.now(),
      total: 0,
      items: [],
      customerInfo: {}    }
    
    setOrderDetails(details)

    // Hide confetti after animation
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [location])

  const handleContinueShopping = () => {
    navigate('/')
  }
  const handleViewOrders = () => {
    navigate('/profile') // Assuming you have a profile/orders page
  }

  // Function to format payment reference to be shorter and more readable
  const formatPaymentReference = (reference) => {
    if (!reference) return 'N/A'
    
    // If it's a long reference like "order_1749901917348_c88i07gdm"
    if (reference.includes('_')) {
      const parts = reference.split('_')
      if (parts.length >= 3) {
        // Take last 4 digits of timestamp and the suffix
        const timestamp = parts[1]
        const suffix = parts[2]
        return `${timestamp.slice(-4)}-${suffix.toUpperCase()}`
      }
    }
    
    // For other formats, take first 4 and last 4 characters
    if (reference.length > 12) {
      return `${reference.slice(0, 4)}...${reference.slice(-4).toUpperCase()}`
    }
    
    return reference.toUpperCase()
  }

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 pt-24 pb-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <FaCheckCircle className="text-white text-6xl animate-pulse" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <FaStar className="text-yellow-600 text-sm" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Thank you for your purchase! Your order has been successfully placed.
          </p>
          <p className="text-lg text-gray-500">
            We'll send you a confirmation email shortly with all the details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Order Details Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <FaShoppingBag className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Order Details</h2>
            </div>
              <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-bold text-purple-600">{orderDetails.orderNumber}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Customer Name:</span>
                <span className="font-semibold text-gray-800">
                  {orderDetails.customerInfo?.firstName} {orderDetails.customerInfo?.lastName}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Phone Number:</span>
                <span className="font-semibold text-gray-800">
                  {orderDetails.customerInfo?.phone || 'N/A'}
                </span>
              </div><div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Payment Reference:</span>
                <span 
                  className="font-mono text-sm bg-gray-100 px-3 py-1 rounded cursor-pointer hover:bg-purple-100 transition-colors"
                  title={`Full reference: ${orderDetails.paymentReference}`}
                  onClick={() => navigator.clipboard.writeText(orderDetails.paymentReference)}
                >
                  {formatPaymentReference(orderDetails.paymentReference)}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Order Date:</span>
                <span className="font-semibold">{new Date().toLocaleDateString()}</span>
              </div>
                <div className="flex justify-between items-center py-3">
                <span className="text-gray-600 text-lg">Total Amount:</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  GH₵ {orderDetails.total?.toFixed(2) || '0.00'}
                </span>
              </div>
            </div>
          </div>

          {/* Order Items Summary */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <FaShoppingBag className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>
            </div>            <div className="space-y-4">
              {orderDetails.items && orderDetails.items.length > 0 ? (
                orderDetails.items.map((item, index) => {
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
                  const itemTotal = itemPrice * (item.quantity || 1);

                  return (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">Qty: {item.quantity || 1}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-purple-600">
                          GH₵ {itemTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-600 text-center py-4">No items found</p>
              )}
            </div>
          </div>

          {/* Next Steps Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <FaTruck className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">What's Next?</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-purple-600 text-sm" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email Confirmation</h3>
                  <p className="text-gray-600 text-sm">You'll receive an order confirmation email within 5 minutes.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaTruck className="text-purple-600 text-sm" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Processing & Shipping</h3>
                  <p className="text-gray-600 text-sm">Your order will be processed within 1-2 business days.</p>
                </div>
              </div>
                <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-purple-600 text-sm" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Delivery Updates</h3>
                  <p className="text-gray-600 text-sm">We'll send tracking information once your order ships.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-purple-600 text-sm" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Customer Support</h3>
                  <p className="text-gray-600 text-sm">Need help? Contact us at support@bbgclassics.com or call +233 XX XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estimated Delivery */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <FaCalendarAlt className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Estimated Delivery</h3>
                <p className="text-purple-100">
                  {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">3-5</div>
              <div className="text-purple-100">Business Days</div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Need Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email Support</h4>
                <p className="text-gray-600 text-sm">support@bbg-classics.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <FaPhone className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Phone Support</h4>
                <p className="text-gray-600 text-sm">+233 123 456 789</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleContinueShopping}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <FaHome className="text-lg" />
            Continue Shopping
          </button>
          
          <button
            onClick={handleViewOrders}
            className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-2xl font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <FaShoppingBag className="text-lg" />
            View My Orders
          </button>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            Thank you for choosing <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">BBG Classics</span>!
          </p>
          <p className="text-gray-500">
            We appreciate your business and look forward to serving you again.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess
