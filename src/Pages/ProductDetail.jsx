import React, { useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { FaShoppingCart, FaStar, FaHeart, FaShare, FaArrowLeft, FaLeaf, FaShieldAlt, FaCheck, FaTruck, FaPhoneAlt } from 'react-icons/fa'
import virgin1 from '../assets/images/virgin1.png'
import virgin2 from '../assets/images/virgin2.png'
import oil from '../assets/images/oil.jpg'
import smallOil from '../assets/images/small-oil.png'

const ProductDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const { addToCart } = useCart()
  const { showToast } = useToast()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('description')

  // Check if product data was passed via location state (from CoconutSnacks page)
  const locationProduct = location.state?.product
  const productCategory = location.state?.category || 'oil'

  // Same products data as in OilCategory - in a real app, this would come from an API
  const products = [
    {
      id: 1,
      name: "Premium Virgin Coconut Oil",
      images: [virgin1, oil, smallOil],
      price: "GHC 45.00",
      originalPrice: "GHC 60.00",
      rating: 4.8,
      reviews: 124,
      description: "Cold-pressed, unrefined coconut oil perfect for skin, hair, and cooking.",
      badge: "Best Seller",
      inStock: true,
      stockCount: 25,
      longDescription: "Our Premium Virgin Coconut Oil is extracted using traditional cold-pressing methods to preserve all the natural goodness. Rich in lauric acid and vitamin E, this versatile oil can be used for cooking, skincare, and hair care. The oil has a natural coconut aroma and solidifies below 76°F, which is completely normal.",
      benefits: [
        "Rich in medium-chain fatty acids",
        "Natural moisturizer for skin and hair",
        "High smoke point for cooking",
        "Antimicrobial properties",
        "No artificial additives or preservatives"
      ],
      ingredients: "100% Pure Virgin Coconut Oil",
      usage: "For cooking: Use as you would any cooking oil. For skincare: Apply small amounts to clean skin. For hair: Use as a pre-wash treatment or leave-in conditioner.",
      storage: "Store in a cool, dry place. Solidification below 76°F is normal.",
      weight: "500ml",
      origin: "Ghana"
    },
    {
      id: 2,
      name: "Organic Virgin Coconut Oil",
      images: [virgin2, virgin1, oil],
      price: "GHC 52.00",
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      description: "100% organic, extra virgin coconut oil with natural coconut aroma.",
      badge: "Organic",
      inStock: true,
      stockCount: 18,
      longDescription: "Certified organic virgin coconut oil sourced from sustainably grown coconuts. This premium oil undergoes minimal processing to retain maximum nutritional value and natural coconut flavor.",
      benefits: [
        "Certified organic",
        "Sustainably sourced",
        "Extra virgin quality",
        "Natural coconut flavor",
        "Eco-friendly packaging"
      ],
      ingredients: "100% Organic Virgin Coconut Oil",
      usage: "Ideal for all cooking needs, natural skincare routines, and hair treatments.",
      storage: "Keep in cool, dry place away from direct sunlight.",
      weight: "500ml",
      origin: "Ghana"
    },
    {
      id: 3,
      name: "Pure Coconut Oil Blend",
      images: [oil, virgin1, virgin2],
      price: "GHC 38.00",
      originalPrice: "GHC 48.00",
      rating: 4.6,
      reviews: 67,
      description: "Multi-purpose coconut oil blend for daily wellness routines.",
      badge: "Value Pack",
      inStock: true,
      stockCount: 32,
      longDescription: "A carefully crafted blend of pure coconut oil designed for everyday use. This versatile oil offers excellent value while maintaining quality standards for all your wellness needs.",
      benefits: [
        "Great value for money",
        "Multi-purpose use",
        "Consistent quality",
        "Mild coconut scent",
        "Long shelf life"
      ],
      ingredients: "Pure Coconut Oil Blend",
      usage: "Perfect for daily cooking, moisturizing, and general wellness applications.",
      storage: "Store at room temperature in original container.",
      weight: "750ml",
      origin: "Ghana"
    },
    {
      id: 4,
      name: "Travel Size Coconut Oil",
      images: [smallOil, virgin1, virgin2],
      price: "GHC 15.00",
      originalPrice: null,
      rating: 4.7,
      reviews: 156,
      description: "Convenient travel-sized pure coconut oil for on-the-go care.",
      badge: "Travel Size",
      inStock: true,
      stockCount: 45,
      longDescription: "Perfect for travelers and those who want to try our coconut oil before committing to a larger size. This compact bottle fits easily in your luggage or handbag.",
      benefits: [
        "TSA-friendly size",
        "Leak-proof container",
        "Perfect for travel",
        "Same quality as full-size",
        "Great for trying our products"
      ],
      ingredients: "100% Pure Coconut Oil",
      usage: "Ideal for maintaining your skincare and hair care routine while traveling.",
      storage: "Keep sealed when not in use.",
      weight: "100ml",
      origin: "Ghana"
    },
    {
      id: 5,
      name: "Cold-Pressed Virgin Oil",
      images: [virgin1, oil, smallOil],
      price: "GHC 48.00",
      originalPrice: "GHC 55.00",
      rating: 4.8,
      reviews: 98,
      description: "Artisanal cold-pressed coconut oil with maximum nutrient retention.",
      badge: "Premium",
      inStock: true,
      stockCount: 15,
      longDescription: "Artisanally crafted using traditional cold-pressing techniques to ensure maximum retention of nutrients and natural properties. Each batch is carefully monitored for quality.",
      benefits: [
        "Artisanal quality",
        "Maximum nutrient retention",
        "Traditional cold-pressing",
        "Small batch production",
        "Premium grade"
      ],
      ingredients: "100% Cold-Pressed Virgin Coconut Oil",
      usage: "Best used for premium applications where quality matters most.",
      storage: "Store in cool, dark place for optimal freshness.",
      weight: "500ml",
      origin: "Ghana"
    },
    {
      id: 6,
      name: "Coconut Oil Gift Set",
      images: [virgin2, virgin1, oil],
      price: "GHC 85.00",
      originalPrice: "GHC 100.00",
      rating: 4.9,
      reviews: 43,
      description: "Beautiful gift set with 3 different coconut oil varieties.",
      badge: "Gift Set",
      inStock: true,
      stockCount: 12,
      longDescription: "A beautifully packaged gift set containing three of our most popular coconut oil varieties. Perfect for introducing someone to the benefits of natural coconut oil or as a special treat.",
      benefits: [
        "Three different varieties",
        "Beautiful gift packaging",
        "Perfect for gifting",
        "Great value bundle",
        "Includes product guide"
      ],
      ingredients: "Virgin Coconut Oil, Organic Coconut Oil, Cold-Pressed Oil",
      usage: "Each oil type has specific recommended uses detailed in the included guide.",
      storage: "Store all bottles in cool, dry place.",
      weight: "3 x 250ml bottles",
      origin: "Ghana"
    }  ]

  // Use product from location state if available, otherwise find from local products array
  const product = locationProduct || products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
          <Link 
            to={productCategory === 'snacks' ? '/snacks' : '/oil'} 
            className="text-purple-600 hover:text-purple-800"
          >
            Back to {productCategory === 'snacks' ? 'Coconut Snacks' : 'Oil Category'}
          </Link>
        </div>
      </div>
    )
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        className={`${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} text-lg`} 
      />
    ))
  }
  // Helper function to format price consistently
  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `GHC ${price.toFixed(2)}`
    }
    return price // Already formatted string
  }

  // Helper function to get numeric price value
  const getNumericPrice = (price) => {
    if (typeof price === 'number') {
      return price
    }
    return parseFloat(price.replace('GHC ', ''))
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    showToast(`Added ${quantity} ${product.name} to cart!`, 'success')
  }

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <span>/</span>
          <Link 
            to={productCategory === 'snacks' ? '/snacks' : '/oil'} 
            className="hover:text-purple-600"
          >
            {productCategory === 'snacks' ? 'Coconut Snacks' : 'Natural Oils'}
          </Link>
          <span>/</span>
          <span className="text-gray-800 truncate">{product.name}</span>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 mb-6">
        <Link 
          to={productCategory === 'snacks' ? '/snacks' : '/oil'}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors text-sm"
        >
          <FaArrowLeft />
          Back to {productCategory === 'snacks' ? 'Coconut Snacks' : 'Oil Category'}
        </Link>
      </div>      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-2xl p-4 shadow-lg">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
              />
              {product.badge && (
                <span className="absolute top-6 left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {product.badge}
                </span>
              )}
            </div>
            
            {/* Image Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 overflow-hidden ${
                    selectedImage === index ? 'border-purple-600' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 lg:space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <p className="text-base lg:text-lg text-gray-600">{product.description}</p>
            </div>

            {/* Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="text-base sm:text-lg font-semibold">{product.rating}</span>
              </div>
              <span className="text-sm sm:text-base text-gray-600">({product.reviews} reviews)</span>
            </div>            {/* Price */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-2xl sm:text-3xl font-bold text-purple-700">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg sm:text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                )}
              </div>
              {product.originalPrice && (
                <span className="inline-block bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  Save {((getNumericPrice(product.originalPrice) - getNumericPrice(product.price)) / getNumericPrice(product.originalPrice) * 100).toFixed(0)}%
                </span>
              )}
            </div>            {/* Stock Status */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              {product.inStock ? (
                <>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    <span className="text-green-600 font-semibold">In Stock</span>
                  </div>
                  <span className="text-sm text-gray-600">({product.stockCount} available)</span>
                </>
              ) : (
                <span className="text-red-600 font-semibold">Out of Stock</span>
              )}
            </div>

            {/* Product Details */}
            <div className="bg-gray-100 rounded-lg p-3 sm:p-4 space-y-2">
              <div className="flex justify-between items-start">
                <span className="font-semibold text-sm sm:text-base">Weight:</span>
                <span className="text-sm sm:text-base">{product.weight}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="font-semibold text-sm sm:text-base">Origin:</span>
                <span className="text-sm sm:text-base">{product.origin}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="font-semibold text-sm sm:text-base">Ingredients:</span>
                <span className="text-right text-sm sm:text-base max-w-[60%]">{product.ingredients}</span>
              </div>
            </div>            {/* Quantity and Add to Cart */}
            {product.inStock && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="font-semibold text-sm sm:text-base">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                    <button 
                      onClick={() => handleQuantityChange(-1)}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors text-sm sm:text-base"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-3 sm:px-4 py-2 border-x border-gray-300 text-sm sm:text-base min-w-[40px] text-center">{quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(1)}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors text-sm sm:text-base"
                      disabled={quantity >= product.stockCount}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                  <div className="flex gap-3 sm:gap-0">
                    <button className="flex-1 sm:flex-none px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                      <FaHeart className="text-pink-500" />
                    </button>
                    <button className="flex-1 sm:flex-none px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                      <FaShare className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <FaTruck className="text-green-600 text-xl" />
                <div>
                  <div className="font-semibold text-green-800">Free Shipping</div>
                  <div className="text-sm text-green-600">On orders over GHC 100</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <FaShieldAlt className="text-blue-600 text-xl" />
                <div>
                  <div className="font-semibold text-blue-800">Quality Guarantee</div>
                  <div className="text-sm text-blue-600">100% satisfaction</div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="border-t pt-6">
              <div className="flex items-center gap-3 text-gray-600">
                <FaPhoneAlt />
                <span>Need help? Call us at +233 123 456 789</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <div className="flex gap-8">
              {['description', 'benefits', 'usage', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-1 border-b-2 font-semibold capitalize transition-colors ${
                    activeTab === tab 
                      ? 'border-purple-600 text-purple-600' 
                      : 'border-transparent text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.longDescription}</p>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FaCheck className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">How to Use</h3>
                  <p className="text-gray-700 leading-relaxed">{product.usage}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Storage Instructions</h4>
                  <p className="text-gray-700">{product.storage}</p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <p className="text-gray-600">Customer reviews feature coming soon!</p>
                  <p className="text-sm text-gray-500 mt-2">Currently showing {product.reviews} reviews with an average rating of {product.rating} stars.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
