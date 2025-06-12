import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { FaStar, FaHeart, FaShoppingCart, FaFilter, FaSearch, FaChevronDown, FaQuoteLeft, FaCheck, FaShieldAlt, FaLeaf, FaTruck } from 'react-icons/fa'

// Import beauty product images
import Earrings from '../assets/images/earring1.png'
import Earrings2 from '../assets/images/earring2.png'
import Earrings3 from '../assets/images/earring3.png'
import Earrings4 from '../assets/images/earring4.png'
import Wrist from '../assets/images/wrist1.png'
import Wrist2 from '../assets/images/wrist2.png'
import Wrist3 from '../assets/images/wrist3.png'
import Wrist4 from '../assets/images/wrist4.png'
import Scarf from '../assets/images/scarf1.png'
import Scarf2 from '../assets/images/scarf2.png'

const BeautyProducts = () => {
  const { addToCart } = useCart()
  const { showToast } = useToast()
  const [sortBy, setSortBy] = useState('popularity')
  const [filterBy, setFilterBy] = useState('all')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

  // Comprehensive beauty products data
  const beautyProducts = [
    {
      id: 101,
      name: "Elegant Diamond Earrings",
      price: "GHC 50.00",
      originalPrice: "GHC 70.00",
      image: Earrings,
      rating: 4.8,
      reviews: 156,
      category: "earrings",
      badge: "Best Seller",
      description: "Stunning diamond-inspired earrings that add sparkle to any occasion.",
      features: ["Hypoallergenic", "Water Resistant", "Luxury Design"]
    },
    {
      id: 102,
      name: "Classic Pearl Collection",
      price: "GHC 45.00",
      image: Earrings2,
      rating: 4.6,
      reviews: 98,
      category: "earrings",
      description: "Timeless pearl earrings perfect for both casual and formal wear.",
      features: ["Genuine Pearl", "Sterling Silver", "Gift Box Included"]
    },
    {
      id: 103,
      name: "Modern Geometric Design",
      price: "GHC 60.00",
      image: Earrings3,
      rating: 4.7,
      reviews: 134,
      category: "earrings",
      badge: "New Arrival",
      description: "Contemporary geometric earrings for the modern woman.",
      features: ["Unique Design", "Lightweight", "Versatile Style"]
    },
    {
      id: 104,
      name: "Premium Gold Style",
      price: "GHC 55.00",
      image: Earrings4,
      rating: 4.5,
      reviews: 87,
      category: "earrings",
      description: "Luxurious gold-toned earrings that complement any outfit.",
      features: ["Gold Plated", "Anti-Tarnish", "Premium Quality"]
    },
    {
      id: 105,
      name: "Luxury Tennis Bracelet",
      price: "GHC 70.00",
      originalPrice: "GHC 95.00",
      image: Wrist,
      rating: 4.9,
      reviews: 203,
      category: "bracelets",
      badge: "Premium",
      description: "Exquisite tennis bracelet featuring brilliant crystals.",
      features: ["Crystal Stones", "Adjustable Size", "Elegant Clasp"]
    },
    {
      id: 106,
      name: "Stylish Chain Band",
      price: "GHC 65.00",
      image: Wrist2,
      rating: 4.4,
      reviews: 76,
      category: "bracelets",
      description: "Trendy chain bracelet that adds edge to your style.",
      features: ["Stainless Steel", "Durable Chain", "Modern Look"]
    },
    {
      id: 107,
      name: "Designer Charm Piece",
      price: "GHC 75.00",
      image: Wrist3,
      rating: 4.8,
      reviews: 145,
      category: "bracelets",
      description: "Unique charm bracelet with intricate design details.",
      features: ["Multiple Charms", "Customizable", "Artisan Made"]
    },
    {
      id: 108,
      name: "Exclusive Royal Design",
      price: "GHC 80.00",
      image: Wrist4,
      rating: 4.7,
      reviews: 112,
      category: "bracelets",
      badge: "Limited Edition",
      description: "Royal-inspired bracelet for those who appreciate luxury.",
      features: ["Limited Edition", "Royal Design", "Premium Materials"]
    },
    {
      id: 109,
      name: "Silk Infinity Scarf",
      price: "GHC 40.00",
      image: Scarf,
      rating: 4.3,
      reviews: 89,
      category: "accessories",
      description: "Luxurious silk scarf that elevates any ensemble.",
      features: ["100% Silk", "Versatile Styling", "Premium Feel"]
    },
    {
      id: 110,
      name: "Premium Cashmere Blend",
      price: "GHC 42.00",
      image: Scarf2,
      rating: 4.6,
      reviews: 67,
      category: "accessories",
      badge: "Eco-Friendly",
      description: "Soft cashmere blend scarf for ultimate comfort and style.",
      features: ["Cashmere Blend", "Ultra Soft", "Sustainable"]
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "The quality of these beauty products is exceptional! My earrings still look brand new after months of wear.",
      product: "Elegant Diamond Earrings",
      location: "Accra, Ghana"
    },
    {
      name: "Michelle Asante",
      rating: 5,
      comment: "I absolutely love my tennis bracelet. It's elegant and goes with everything in my wardrobe.",
      product: "Luxury Tennis Bracelet",
      location: "Kumasi, Ghana"
    },
    {
      name: "Grace Osei",
      rating: 4,
      comment: "Beautiful scarves with amazing quality. The silk feels so luxurious and the colors are vibrant.",
      product: "Silk Infinity Scarf",
      location: "Takoradi, Ghana"
    }
  ]

  // FAQ data
  const faqs = [
    {
      question: "Are your jewelry pieces hypoallergenic?",
      answer: "Yes, most of our jewelry pieces are made with hypoallergenic materials, perfect for sensitive skin. We clearly mark which pieces have this feature."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Absolutely! We provide beautiful gift wrapping for all our beauty products at no extra charge. Just mention it in your order notes."
    },
    {
      question: "What's your return policy for beauty products?",
      answer: "We offer a 30-day return policy for all beauty products in original condition. Jewelry must be unworn and in original packaging."
    },
    {
      question: "How do I care for my jewelry?",
      answer: "Each piece comes with care instructions. Generally, store in a dry place, avoid chemicals, and clean gently with appropriate jewelry cleaners."
    }
  ]

  // Filter and sort functions
  const filteredProducts = beautyProducts.filter(product => {
    if (filterBy === 'all') return true
    return product.category === filterBy
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('GHC ', '')) - parseFloat(b.price.replace('GHC ', ''))
      case 'price-high':
        return parseFloat(b.price.replace('GHC ', '')) - parseFloat(a.price.replace('GHC ', ''))
      case 'rating':
        return b.rating - a.rating
      case 'newest':
        return b.id - a.id
      default: // popularity
        return b.reviews - a.reviews
    }
  })

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        className={`${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} text-sm`} 
      />
    ))
  }

  const handleAddToCart = (product) => {
    addToCart(product, 1)
    showToast(`${product.name} added to cart!`, 'success')
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const openQuickView = (product) => {
    setQuickViewProduct(product)
    setIsQuickViewOpen(true)
  }

  const closeQuickView = () => {
    setIsQuickViewOpen(false)
    setQuickViewProduct(null)
  }
  return (    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white py-12 sm:py-16 lg:py-20 pt-24 sm:pt-28 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">Beauty Products Collection</h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Discover our exquisite collection of premium jewelry and accessories designed to enhance your natural beauty and express your unique style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button 
                onClick={() => document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                Shop Collection
              </button>
              <button 
                onClick={() => {
                  setFilterBy('all')
                  setSortBy('popularity')
                  document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' })
                }}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-sm sm:text-base"
              >
                View Catalog
              </button>
            </div>
          </div>
        </div>
      </div>      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-purple-600 font-medium">Beauty Products</span>
          </div>
        </div>
      </div>{/* Filter and Sort Section */}
      <div className="bg-white py-6 border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <div className="relative w-full sm:w-auto">
                <select 
                  value={filterBy} 
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="appearance-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
                >
                  <option value="all">All Categories</option>
                  <option value="earrings">Earrings</option>
                  <option value="bracelets">Bracelets</option>
                  <option value="accessories">Accessories</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
              
              <div className="relative w-full sm:w-64">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <span className="text-gray-600 text-sm sm:text-base">Sort by:</span>
              <div className="relative w-full sm:w-auto">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                  <option value="newest">Newest First</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
              
              <span className="text-gray-600 text-sm sm:text-base">{sortedProducts.length} products</span>
            </div>
          </div>
        </div>
      </div>      {/* Products Grid */}
      <div id="products-section" className="py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {sortedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.badge}
                    </span>
                  )}
                  <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors group">
                    <FaHeart className="text-pink-500" />
                  </button>
                    {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => openQuickView(product)}
                      className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-purple-700">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>      {/* Features Section */}
      <div className="bg-white py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Why Choose Our Beauty Products?</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              We're committed to providing you with the highest quality beauty products that enhance your natural elegance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <FaShieldAlt className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">Premium Quality</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                All our beauty products are crafted with the finest materials and undergo rigorous quality testing to ensure excellence.
              </p>
            </div>
            
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <FaLeaf className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">Hypoallergenic</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our jewelry is made with skin-friendly materials, perfect for those with sensitive skin or allergies.
              </p>
            </div>
            
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <FaTruck className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">Free Shipping</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Enjoy free shipping on all beauty product orders over GHC 100 with fast and secure delivery.
              </p>
            </div>
          </div>
        </div>
      </div>      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Don't just take our word for it. Here's what our satisfied customers have to say about our beauty products.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 text-center">
              <FaQuoteLeft className="text-3xl sm:text-4xl text-purple-600 mx-auto mb-4 sm:mb-6" />
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed px-2">
                "{testimonials[currentTestimonial].comment}"
              </p>
              <div className="flex justify-center mb-3 sm:mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 mb-2">{testimonials[currentTestimonial].product}</p>
              <p className="text-xs sm:text-sm text-gray-500">{testimonials[currentTestimonial].location}</p>
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <FaChevronDown className="transform rotate-90 text-purple-600 text-sm sm:text-base" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <FaChevronDown className="transform -rotate-90 text-purple-600 text-sm sm:text-base" />
            </button>
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>      {/* FAQ Section */}
      <div className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Find answers to common questions about our beauty products and services.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-start sm:items-center">
                  <FaCheck className="text-purple-600 mr-2 sm:mr-3 flex-shrink-0 mt-1 sm:mt-0" />
                  <span className="leading-tight">{faq.question}</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-5 sm:pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
            Ready to Enhance Your Beauty?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4 max-w-2xl mx-auto">
            Explore our complete collection of premium beauty products and find the perfect pieces to express your unique style.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm sm:text-base">
              Shop All Products
            </button>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>      {/* Quick View Modal */}
      {isQuickViewOpen && quickViewProduct && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-lg sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeQuickView}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
                  />
                  {quickViewProduct.badge && (
                    <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {quickViewProduct.badge}
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">{quickViewProduct.name}</h2>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600">{quickViewProduct.description}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex">{renderStars(quickViewProduct.rating)}</div>
                    <span className="text-xs sm:text-sm text-gray-500">({quickViewProduct.reviews} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl font-bold text-purple-700">{quickViewProduct.price}</span>
                    {quickViewProduct.originalPrice && (
                      <span className="text-lg sm:text-xl text-gray-400 line-through">{quickViewProduct.originalPrice}</span>
                    )}
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Features:</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {quickViewProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <FaCheck className="text-green-500 text-xs sm:text-sm flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity:</label>
                    <select className="bg-gray-100 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 sm:space-y-3">
                    <button
                      onClick={() => {
                        handleAddToCart(quickViewProduct)
                        closeQuickView()
                      }}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <FaShoppingCart />
                      Add to Cart
                    </button>
                    <button className="w-full border-2 border-purple-600 text-purple-600 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                      <FaHeart />
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BeautyProducts
