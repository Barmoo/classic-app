import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import CartSidebar from './CartSidebar'
import Logo from '../assets/images/bgg-logo.png' // Assuming you have a logo image
import { FaShoppingCart, FaUser, FaSignOutAlt, FaUserPlus, FaSignInAlt } from "react-icons/fa"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartTotal, getCartItemsCount } = useCart();
  const { user, logout } = useAuth();
  
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (    <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-pink-600 to-purple-700 text-white shadow-lg">      <div className="flex justify-between items-center py-2 px-3 md:px-16 lg:px-24">
        {/* Logo - Left */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-13 w-13 bg-white/90 rounded-lg p-1" />
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
            </Link><Link 
              to="/oil" 
              className={`cursor-pointer hover:text-yellow-400 transition pb-1 ${
                isActive('/oil') ? 'border-b-2 border-yellow-400 text-yellow-400' : ''
              }`}
            >
              Oil
            </Link>
            <Link 
              to="/snacks" 
              className={`cursor-pointer hover:text-yellow-400 transition pb-1 ${
                isActive('/snacks') ? 'border-b-2 border-yellow-400 text-yellow-400' : ''
              }`}
            >
              Coconut Snacks
            </Link>
            <Link 
              to="/beauty" 
              className={`cursor-pointer hover:text-yellow-400 transition pb-1 ${
                isActive('/beauty') ? 'border-b-2 border-yellow-400 text-yellow-400' : ''
              }`}
            >
              Beauty
            </Link><Link 
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
          </div>        </div>        
        {/* Mobile Right Navigation Group - Cart, Price, and Hamburger together */}
        <div className="md:hidden flex items-center">
          {/* Mobile Cart & Price - Always visible on mobile */}
          <div className="flex items-center mr-7">
            <span className="text-yellow-400 font-bold text-sm mr-1">GHC {getCartTotal().toFixed(2)}</span>
            
            {/* Mobile Cart Button */}
            <button 
              onClick={() => setCartOpen(true)}
              className="cursor-pointer hover:text-yellow-400 transition flex items-center relative ml-1"
            >
              <FaShoppingCart className="text-lg" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-3 w-3 flex items-center justify-center animate-bounce-in text-[10px]">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
          </div>

        {/* Desktop Price, Cart, and Auth - Right */}
        <div className="hidden md:flex flex-shrink-0 items-center gap-x-4">
          <span className="cursor-pointer text-yellow-400 font-bold">GHC {getCartTotal().toFixed(2)}</span>
          
          {/* Cart Button */}
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

          {/* Authentication Section */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 hover:text-yellow-400 transition"
              >
                <FaUser className="text-lg" />
                <span className="hidden lg:block">{user.firstName}</span>
              </button>
              
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <FaUser className="text-purple-600" />
                    My Profile
                  </Link>
                  <hr className="my-1" />
                  <button
                    onClick={() => {
                      logout()
                      setUserMenuOpen(false)
                    }}
                    className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <FaSignOutAlt className="text-red-600" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="flex items-center gap-1 px-3 py-2 text-sm hover:text-yellow-400 transition"
              >
                <FaSignInAlt />
                <span className="hidden lg:block">Sign In</span>
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-1 px-3 py-2 bg-yellow-400 text-purple-700 rounded-lg text-sm font-semibold hover:bg-yellow-300 transition"
              >
                <FaUserPlus />
                <span className="hidden lg:block">Join Us</span>
              </Link>
            </div>
          )}
        </div>          {/* Hamburger menu button */}
          <button
            className="flex flex-col justify-center items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
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
              to="/snacks" 
              className={`cursor-pointer hover:text-yellow-400 transition ${
                isActive('/snacks') ? 'text-yellow-400' : ''
              }`} 
              onClick={() => setMenuOpen(false)}
            >
              Coconut Snacks
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
            {/* Mobile Authentication */}
            <div className="border-t pt-2 mt-2">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 py-2 hover:text-yellow-400 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaUser />
                    Profile ({user.firstName})
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      setMenuOpen(false)
                    }}
                    className="flex items-center gap-2 py-2 hover:text-yellow-400 transition text-left"
                  >
                    <FaSignOutAlt />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center gap-2 py-2 hover:text-yellow-400 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaSignInAlt />
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center gap-2 py-2 hover:text-yellow-400 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaUserPlus />
                    Join Us
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  )
}

export default Navbar