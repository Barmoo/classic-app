import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { FaShoppingCart, FaStar, FaFilter, FaChevronDown, FaChevronLeft, FaChevronRight, FaLeaf, FaHeart, FaShieldAlt } from 'react-icons/fa'
import virgin1 from '../assets/images/virgin1.png'
import virgin2 from '../assets/images/virgin2.png'
import oil from '../assets/images/oil.jpg'
import smallOil from '../assets/images/small-oil.png'

const OilCategory = () => {
  const [sortBy, setSortBy] = useState('popularity')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { addToCart } = useCart()
  const { showToast } = useToast()

  const products = [
    {
      id: 1,
      name: "Premium Virgin Coconut Oil",
      image: virgin1,
      price: "GHC 45.00",
      originalPrice: "GHC 60.00",
      rating: 4.8,
      reviews: 124,
      description: "Cold-pressed, unrefined coconut oil perfect for skin, hair, and cooking.",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Organic Virgin Coconut Oil",
      image: virgin2,
      price: "GHC 52.00",
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      description: "100% organic, extra virgin coconut oil with natural coconut aroma.",
      badge: "Organic"
    },
    {
      id: 3,
      name: "Pure Coconut Oil Blend",
      image: oil,
      price: "GHC 38.00",
      originalPrice: "GHC 48.00",
      rating: 4.6,
      reviews: 67,
      description: "Multi-purpose coconut oil blend for daily wellness routines.",
      badge: "Value Pack"
    },
    {
      id: 4,
      name: "Travel Size Coconut Oil",
      image: smallOil,
      price: "GHC 15.00",
      originalPrice: null,
      rating: 4.7,
      reviews: 156,
      description: "Convenient travel-sized pure coconut oil for on-the-go care.",
      badge: "Travel Size"
    },
    {
      id: 5,
      name: "Cold-Pressed Virgin Oil",
      image: virgin1,
      price: "GHC 48.00",
      originalPrice: "GHC 55.00",
      rating: 4.8,
      reviews: 98,
      description: "Artisanal cold-pressed coconut oil with maximum nutrient retention.",
      badge: "Premium"
    },
    {
      id: 6,
      name: "Coconut Oil Gift Set",
      image: virgin2,
      price: "GHC 85.00",
      originalPrice: "GHC 100.00",
      rating: 4.9,
      reviews: 43,
      description: "Beautiful gift set with 3 different coconut oil varieties.",
      badge: "Gift Set"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "The virgin coconut oil transformed my hair routine completely. So smooth and healthy now!",
      product: "Premium Virgin Coconut Oil"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Best quality coconut oil I've ever used. Great for cooking and skincare both.",
      product: "Organic Virgin Coconut Oil"
    },
    {
      name: "Aisha Mensah",
      rating: 4,
      text: "Love the travel size! Perfect for my business trips. Keeps my skin moisturized.",
      product: "Travel Size Coconut Oil"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        className={`${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} text-sm`} 
      />
    ))
  }  // Sort products based on selected criteria
  const getSortedProducts = () => {
    const sortedProducts = [...products];
    
    switch (sortBy) {
      case 'price-low':
        return sortedProducts.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('GHC ', ''));
          const priceB = parseFloat(b.price.replace('GHC ', ''));
          return priceA - priceB;
        });
      case 'price-high':
        return sortedProducts.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('GHC ', ''));
          const priceB = parseFloat(b.price.replace('GHC ', ''));
          return priceB - priceA;
        });
      case 'rating':
        return sortedProducts.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return sortedProducts.reverse(); // Assuming higher IDs are newer
      case 'popularity':
      default:
        return sortedProducts.sort((a, b) => b.reviews - a.reviews);
    }
  };
  const handleAddToCart = (product) => {
    addToCart(product, 1)
    showToast(`${product.name} added to cart!`, 'success')
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-gradient-to-br from-purple-900 to-pink-600 text-white py-20 px-8 md:px-16 lg:px-24"
        style={{
          backgroundImage: `linear-gradient(rgba(81, 33, 122, 0.8), rgba(224, 15, 138, 0.8)), url(${oil})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <FaLeaf className="text-4xl text-green-300" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Premium Natural Oils</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Explore our range of natural, cold-pressed oils for skin, hair, and wellness. 
            100% organic and ethically sourced for your complete well-being.
          </p>
        </div>
      </div>

      {/* Filter and Sort Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-semibold text-gray-800">Natural Coconut Oils</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select 
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getSortedProducts().map((product) => (
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
                <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                  <FaHeart className="text-pink-500" />
                </button>
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
                </div>                  <div className="flex gap-3">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                  <Link 
                    to={`/oil/${product.id}`}
                    className="px-4 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Our Natural Oils?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the incredible benefits of our premium coconut oils for your health and beauty routine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">100% Natural</h3>
              <p className="text-gray-600">Cold-pressed and unrefined to preserve all natural nutrients and benefits.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Assured</h3>
              <p className="text-gray-600">Rigorous testing and quality control ensure premium standards in every bottle.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ethically Sourced</h3>
              <p className="text-gray-600">Supporting local farmers and sustainable practices for a better tomorrow.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real experiences from people who love our natural oils</p>
          </div>
          
          <div className="relative bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <p className="text-lg text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <h4 className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                <p className="text-sm text-gray-600">Verified Purchase: {testimonials[currentTestimonial].product}</p>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <FaChevronLeft className="text-purple-600" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <FaChevronRight className="text-purple-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Is coconut oil good for hair?</h3>
              <p className="text-gray-600">
                Yes! Coconut oil is excellent for hair care. It penetrates the hair shaft to reduce protein loss, 
                adds shine, and helps prevent damage. Use it as a pre-wash treatment or leave-in conditioner.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">What's the difference between virgin and regular coconut oil?</h3>
              <p className="text-gray-600">
                Virgin coconut oil is unrefined and cold-pressed, retaining more nutrients and natural coconut flavor. 
                Regular coconut oil is often refined and may have less nutritional value but a neutral taste.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">How should I store coconut oil?</h3>
              <p className="text-gray-600">
                Store in a cool, dry place away from direct sunlight. Coconut oil is solid below 76°F and liquid above. 
                Both states are normal and don't affect quality. It has a long shelf life of 2-3 years.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-700 to-pink-600 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-8 md:px-16 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Choosing the Right Oil?</h2>
          <p className="text-lg mb-8 text-purple-100">
            Our experts are here to help you find the perfect natural oil for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Our Experts
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors">
              Live Chat Support
            </button>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quality Promise</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <p className="text-sm text-gray-300 mb-4">Stay updated with our latest products and offers.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 rounded bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 BGG Classics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default OilCategory
