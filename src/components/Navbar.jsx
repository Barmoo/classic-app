import React, { useState } from 'react'
import Logo from '../assets/images/logo.png' // Assuming you have a logo image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gray-800 text-white shadow-lg">
      <div className="flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo and main links */}
        <div className="flex flex-row space-x-4 md:space-x-6 items-center">
          <img src={Logo} alt="Logo" className="h-20 w-20 md:h-20 md:w-20" />
          {/* Desktop links */}
          <div className="hidden md:flex flex-row space-x-4 md:space-x-6">
            <span className="cursor-pointer hover:text-yellow-400 transition">Everything</span>
            <span className="cursor-pointer hover:text-yellow-400 transition">Oil</span>
            <span className="cursor-pointer hover:text-yellow-400 transition">Beauty</span>
          </div>
        </div>
        {/* Right side links */}
        <div className="hidden md:flex flex-row space-x-4 md:space-x-6 items-center">
          <span className="cursor-pointer hover:text-yellow-400 transition">About</span>
          <span className="cursor-pointer hover:text-yellow-400 transition">Contact</span>
          <span className="cursor-pointer">GHS 0.00</span>
          <span className="cursor-pointer hover:text-yellow-400 transition">Cart</span>
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
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 shadow-lg px-4 py-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <span className="cursor-pointer hover:text-yellow-400 transition">Everything</span>
            <span className="cursor-pointer hover:text-yellow-400 transition">Oil</span>
            <span className="cursor-pointer hover:text-yellow-400 transition">Snack</span>
          </div>
          <div className="flex flex-col space-y-2 border-t pt-4">
            <span className="cursor-pointer hover:text-yellow-400 transition">About</span>
            <span className="cursor-pointer hover:text-yellow-400 transition">Contact</span>
            <span className="cursor-pointer">GHS 0.00</span>
            <span className="cursor-pointer hover:text-yellow-400 transition">Cart</span>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar