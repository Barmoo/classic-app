import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTiktok, FaFacebookF, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart, FaShoppingCart, FaLeaf, FaCrown, FaShieldAlt } from 'react-icons/fa'
import Logo from '../assets/images/bgg-logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Coconut Products', path: '/oil' },
    { name: 'Beauty Items', path: '/beauty' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  const categories = [
    { name: 'Virgin Coconut Oil', path: '/oil' },
    { name: 'Coconut Flour', path: '/oil' },
    { name: 'Coconut Chips', path: '/oil' },
    { name: 'Beauty Accessories', path: '/beauty' },
    { name: 'Gift Sets', path: '/oil' }
  ]

  const customerCare = [
    { name: 'Shipping Info', path: '/contact' },
    { name: 'Returns & Exchanges', path: '/contact' },
    { name: 'Size Guide', path: '/contact' },
    { name: 'FAQ', path: '/contact' },
    { name: 'Track Your Order', path: '/contact' }
  ]

  return (    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 py-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-pink-300/20 rounded-full animate-pulse"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <FaEnvelope className="text-2xl text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Stay Connected with <span className="text-pink-200">BGG Classics</span>
            </h3>
            <p className="text-purple-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Get exclusive offers, new product updates, and natural wellness tips delivered to your inbox. 
              Join our community of 10,000+ happy customers!
            </p>
            
            {/* Enhanced Newsletter Form */}
            <div className="max-w-lg mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 rounded-xl text-gray-200 placeholder-gray-200 focus:outline-none focus:ring-3 focus:ring-pink-300/50 border-2 border-transparent focus:border-pink-300 transition-all duration-300 font-medium shadow-lg"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap">
                    <span>Subscribe</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </button>
                </div>
                
                {/* Trust indicators */}
                <div className="flex items-center justify-center gap-6 mt-4 text-sm text-purple-100">
                  <div className="flex items-center gap-1">
                    <FaShieldAlt className="text-green-300" />
                    <span>Spam-free</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaHeart className="text-pink-300" />
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social proof */}
            <div className="mt-8 flex items-center justify-center gap-4 text-purple-100">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                  +
                </div>
              </div>
              <span className="text-sm">Join 10,000+ subscribers getting exclusive deals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img src={Logo} alt="BGG Classics Logo" className="h-12 w-12 rounded-lg bg-white/10 p-1 mr-3" />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  BGG Classics
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted source for premium natural coconut products and beautiful accessories. Quality, authenticity, and customer satisfaction are our top priorities.
              </p>
              
              {/* Values Icons */}
              <div className="flex space-x-4 mb-6">
                <div className="flex flex-col items-center group">
                  <FaLeaf className="text-green-400 text-lg mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">Natural</span>
                </div>
                <div className="flex flex-col items-center group">
                  <FaCrown className="text-yellow-400 text-lg mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">Premium</span>
                </div>
                <div className="flex flex-col items-center group">
                  <FaShieldAlt className="text-blue-400 text-lg mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">Trusted</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-pink-300">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/bgg_classics?igsh=Y3JuYXM2MWV5Ynow&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-lg" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@naatsoobanks1?_t=ZM-8wrtkmO0cbg&_r=1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="TikTok"
                  >
                    <FaTiktok className="text-lg" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/19Bu8cmnsh/?mibextid=LQQJ4d" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-lg" />
                  </a>
                  <a 
                    href="https://wa.me/233249130774" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="text-lg" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-pink-300">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-pink-300">Our Products</h4>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link 
                      to={category.path} 
                      className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-pink-300">Contact & Support</h4>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-purple-400 flex-shrink-0" />
                  <a href="tel:+233249130774" className="text-gray-300 hover:text-pink-400 transition-colors">
                    +233 249 130 774
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-purple-400 flex-shrink-0" />
                  <a href="mailto:info@bbgclassics.com" className="text-gray-300 hover:text-pink-400 transition-colors">
                    info@bbgclassics.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    123 BGG Classics Street<br />
                    Accra, Ghana
                  </span>
                </div>
              </div>

              {/* Customer Care Links */}
              <div>
                <h5 className="font-medium mb-3 text-purple-300">Customer Care</h5>
                <ul className="space-y-2">
                  {customerCare.map((item, index) => (
                    <li key={index}>
                      <Link 
                        to={item.path} 
                        className="text-sm text-gray-400 hover:text-pink-400 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} BGG Classics. All rights reserved.
              </p>              <div className="flex space-x-4 text-sm">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <FaHeart className="text-pink-500 animate-pulse" />
              <span>in Ghana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer