import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FaTimes, FaTrash, FaPlus, FaMinus } from 'react-icons/fa'

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()

  if (!isOpen) return null

  return (
    <>      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-gray-500 bg-opacity-30 z-40"
        onClick={onClose}
      ></div>
        {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md sm:max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <h2 className="text-lg sm:text-xl font-semibold">Shopping Cart</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <FaTimes className="text-sm sm:text-base" />
            </button>
          </div>          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-8 sm:py-12 text-gray-500">
                <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🛒</div>
                <p className="text-base sm:text-lg">Your cart is empty</p>
                <p className="text-xs sm:text-sm">Add some products to get started!</p>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-2 sm:gap-4 p-3 sm:p-4 border rounded-lg">
                    <img 
                      src={item.images ? item.images[0] : item.image} 
                      alt={item.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{item.name}</h3>
                      <p className="text-purple-600 font-semibold text-sm sm:text-base">
                        {typeof item.price === 'string' ? item.price : `GHC ${item.price.toFixed(2)}`}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded text-xs sm:text-sm"
                          disabled={item.quantity <= 1}
                        >
                          <FaMinus className="text-xs" />
                        </button>
                        <span className="px-2 sm:px-3 py-1 border rounded text-xs sm:text-sm min-w-[2rem] text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded text-xs sm:text-sm"
                        >
                          <FaPlus className="text-xs" />
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 sm:p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors flex-shrink-0"
                    >
                      <FaTrash className="text-xs sm:text-sm" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-6 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-purple-600">
                  GHC {getCartTotal().toFixed(2)}
                </span>
              </div>
                <div className="space-y-3">
                <Link 
                  to="/checkout"
                  onClick={onClose}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                >
                  Checkout
                </Link>
                <button 
                  onClick={clearCart}
                  className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartSidebar
