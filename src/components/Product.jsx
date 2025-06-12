import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import Coconut from '../assets/images/virgin1.png'
import Small from '../assets/images/virgin2.png'
import Flour from '../assets/images/alamode.png'
import Chips1 from '../assets/images/chips1.png'
import Chips2 from '../assets/images/chips2.png'
import Chips3 from '../assets/images/chips3.png'
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
import Desiccated from '../assets/images/desiccated.png'
import { FaArrowRight, FaShoppingCart, FaStar, FaHeart, FaLeaf, FaShieldAlt } from "react-icons/fa"

const Product = () => {
  const { addToCart } = useCart()
  const { showToast } = useToast()

  // Best selling products data with enhanced details
  const bestSellingProducts = [
    { 
      id: 1,
      img: Coconut, 
      name: "Premium Virgin Coconut Oil", 
      price: "GHC 155.00",
      originalPrice: "GHC 200.00",
      description: "Cold-pressed, unrefined coconut oil perfect for skin, hair, and cooking.",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      category: "oil"
    },
    { 
      id: 2,
      img: Small, 
      name: "Travel Size Coconut Oil", 
      price: "GHC 80.00",
      description: "Convenient travel-sized coconut oil for on-the-go nourishment.",
      rating: 4.6,
      reviews: 89,
      category: "oil"
    },
    { 
      id: 3,
      img: Flour, 
      name: "Organic Coconut Flour", 
      price: "GHC 80.00",
      description: "High-fiber, gluten-free flour perfect for healthy baking.",
      rating: 4.7,
      reviews: 156,
      badge: "Organic",
      category: "food"
    },
    { 
      id: 4,
      img: Chips1, 
      name: "Coconut Chips Delight", 
      price: "GHC 90.00",
      description: "Crispy, naturally sweet coconut chips for healthy snacking.",
      rating: 4.5,
      reviews: 78,
      category: "snacks"
    }
  ]

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

  return (
    <div className="bg-gray-50 py-16">
      {/* Best Selling Products Section */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Best Selling Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular products loved by customers worldwide. Premium quality guaranteed.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {bestSellingProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={product.img} 
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
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                  {product.category === 'oil' ? (
                    <Link 
                      to={`/oil/${product.id}`}
                      className="px-4 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center"
                    >
                      View
                    </Link>
                  ) : (
                    <button className="px-4 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center">
                      View
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <Link 
            to="/oil"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            View All Products
            <FaArrowRight />
          </Link>
        </div>
      </div>      {/* Coconut Snacks Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Coconut Snacks</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Indulge in our premium coconut snacks that bring tropical flavors right to your table.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Snack 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Coconut Snack Delight</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Indulge in the perfect balance of sweet, nutty coconut flavors and a satisfying crunch 
                that transports you straight to a sun-soaked island with every bite.
              </p>
              <img src={Chips1} alt="Coconut Snack Delight" className="w-32 h-32 object-cover rounded-lg mx-auto mb-6 shadow-md" />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 mx-auto">
                SHOP NOW <FaArrowRight />
              </button>
            </div>
            
            {/* Snack 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Coconut Bliss Bites</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                These bite-sized treats are bursting with the rich, creamy flavor of pure coconut, 
                offering a perfect blend of chewy sweetness and a hint of paradise in every piece.
              </p>
              <img src={Chips2} alt="Coconut Bliss Bites" className="w-32 h-32 object-cover rounded-lg mx-auto mb-6 shadow-md" />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 mx-auto">
                SHOP NOW <FaArrowRight />
              </button>
            </div>
            
            {/* Snack 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Coconut Munchies</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                These delightful snacks capture the essence of the tropics with every crispy, coconut-infused bite, 
                delivering a burst of natural sweetness that feels like a vacation in your mouth.
              </p>
              <img src={Chips3} alt="Coconut Munchies" className="w-32 h-32 object-cover rounded-lg mx-auto mb-6 shadow-md" />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 mx-auto">
                SHOP NOW <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Promo Banner */}
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">Get 10% Off On Your First Purchase</h2>
            <p className="text-gray-300 mb-8 text-lg">Join our community of satisfied customers and save on your first order!</p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 mx-auto">
              <FaShoppingCart />
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Beauty Products Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Beauty Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your natural beauty with our carefully curated collection of premium accessories.
            </p>
          </div>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { img: Earrings, label: "Elegant Earrings", price: "GHC 50.00", rating: 4.3, reviews: 28 },
              { img: Earrings2, label: "Classic Collection", price: "GHC 45.00", rating: 4.5, reviews: 35 },
              { img: Earrings3, label: "Modern Design", price: "GHC 60.00", rating: 4.7, reviews: 42 },
              { img: Earrings4, label: "Premium Style", price: "GHC 55.00", rating: 4.4, reviews: 31 },
              { img: Wrist, label: "Luxury Bracelet", price: "GHC 70.00", rating: 4.6, reviews: 48 },
              { img: Wrist2, label: "Stylish Band", price: "GHC 65.00", rating: 4.5, reviews: 39 },
              { img: Wrist3, label: "Designer Piece", price: "GHC 75.00", rating: 4.8, reviews: 52 },
              { img: Wrist4, label: "Exclusive Design", price: "GHC 80.00", rating: 4.7, reviews: 44 },
              { img: Scarf, label: "Silk Scarf", price: "GHC 40.00", rating: 4.2, reviews: 26 },
              { img: Scarf2, label: "Premium Fabric", price: "GHC 42.00", rating: 4.4, reviews: 33 }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <img 
                    src={item.img} 
                    alt={item.label} 
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <FaHeart className="text-pink-500" />
                  </button>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.label}</h3>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">{renderStars(item.rating)}</div>
                    <span className="text-sm text-gray-500">({item.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-2xl font-bold text-purple-700">{item.price}</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-3">
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product