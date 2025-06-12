import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartSidebar from './CartSidebar'
import Logo from '../assets/images/bgg-logo.png' // Assuming you have a logo image
import { FaShoppingCart } from "react-icons/fa"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const { getCartTotal, getCartItemsCount } = useCart();
  
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (    <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-pink-600 to-purple-700 text-white shadow-lg">
      <div className="flex justify-between items-center py-2 px-8 md:px-16 lg:px-24">
        {/* Logo - Left */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-20 w-20 bg-white/90 rounded-lg p-1" />
          </Link>
        </div>

        {/* Navigation Links - Center */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-8 items-center">
            <Link 
              to="/" 
              className={`cursor-pointer hover:text-yellow-400 transition pb-1 ${
                isActive('/') ? 'border-b-2 border-yellow-400 text-yellow-400' : ''
              }`}
            >
              Everything
            </Link>            <Link 
              to="/oil" 
              className={`cursor-pointer hover:text-yellow-400 transition pb-1 ${
                isActive('/oil') ? 'border-b-2 border-yellow-400 text-yellow-400' : ''
              }`}
            >
              Oil
            </Link>
            <Link 
              to="/beauty" 
              className={`cursor-pointer hover:text-yellow-400 transition pb-1 ${
                isActive('/beauty') ? 'border-b-2 border-yellow-400 text-yellow-400' : ''
              }`}
            >
              Beauty
            </Link>            <Link 
              to="/about" 
              className={`cursor-pointer hover:text-yellow-400 transition pb-1 ${
                isActive('/about') ? 'border-b-2 border-yellow-400 text-yellow-400' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`cursor-pointer hover:text-yellow-400 transition pb-1 ${
                isActive('/contact') ? 'border-b-2 border-yellow-400 text-yellow-400' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Price and Cart - Right */}
        <div className="hidden md:flex flex-shrink-0 items-center gap-x-1">
          <span className="cursor-pointer text-green-400 font-semibold">GHC {getCartTotal().toFixed(2)}</span>
          <button 
            onClick={() => setCartOpen(true)}
            className="cursor-pointer hover:text-yellow-400 transition flex items-center relative"
          >
            <FaShoppingCart className="text-lg" />
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce-in">
                {getCartItemsCount()}
              </span>
            )}
          </button>
        </div>
        {/* Hamburger menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>      {/* Mobile menu */}      {menuOpen && (        <div className="md:hidden bg-gray-700 shadow-lg px-4 py-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <Link 
              to="/" 
              className={`cursor-pointer hover:text-yellow-400 transition ${
                isActive('/') ? 'text-yellow-400' : ''
              }`} 
              onClick={() => setMenuOpen(false)}
            >
              Everything
            </Link>            <Link 
              to="/oil" 
              className={`cursor-pointer hover:text-yellow-400 transition ${
                isActive('/oil') ? 'text-yellow-400' : ''
              }`} 
              onClick={() => setMenuOpen(false)}
            >
              Oil
            </Link>
            <Link 
              to="/beauty" 
              className={`cursor-pointer hover:text-yellow-400 transition ${
                isActive('/beauty') ? 'text-yellow-400' : ''
              }`} 
              onClick={() => setMenuOpen(false)}
            >
              Beauty
            </Link><Link 
              to="/about" 
              className={`cursor-pointer hover:text-yellow-400 transition ${
                isActive('/about') ? 'text-yellow-400' : ''
              }`} 
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`cursor-pointer hover:text-yellow-400 transition ${
                isActive('/contact') ? 'text-yellow-400' : ''
              }`} 
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>          <div className="flex flex-col space-y-2 border-t pt-4">
            <span className="cursor-pointer text-green-400 font-semibold">GHC {getCartTotal().toFixed(2)}</span>
            <button 
              onClick={() => {
                setCartOpen(true)
                setMenuOpen(false)
              }}
              className="cursor-pointer hover:text-yellow-400 transition flex items-center gap-1 relative text-left"
            >
              <FaShoppingCart className="text-lg" />
              Cart
              {getCartItemsCount() > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-1">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      )}
      
      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  )
}

export default Navbar