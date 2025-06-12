import React, { useEffect } from 'react'
import { FaCheck, FaTimes, FaShoppingCart } from 'react-icons/fa'

const Toast = ({ message, type = 'success', isVisible, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose, duration])

  if (!isVisible) return null

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 border-green-600'
      case 'error':
        return 'bg-red-500 border-red-600'
      case 'warning':
        return 'bg-yellow-500 border-yellow-600'
      default:
        return 'bg-green-500 border-green-600'
    }
  }

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheck className="text-white" />
      case 'error':
        return <FaTimes className="text-white" />
      case 'cart':
        return <FaShoppingCart className="text-white" />
      default:
        return <FaCheck className="text-white" />
    }
  }
  return (
    <div className="fixed top-24 right-4 z-50 animate-slide-in-right">
      <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-xl border-l-4 ${getToastStyles()} text-white max-w-sm`}>
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1">
          <p className="font-medium">{message}</p>
        </div>
        <button 
          onClick={onClose}
          className="flex-shrink-0 text-white hover:text-gray-200 transition-colors"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Toast
