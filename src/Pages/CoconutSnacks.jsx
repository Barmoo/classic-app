import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { FaStar, FaEye, FaShoppingCart } from 'react-icons/fa';

// Import coconut snack images
import chips1 from '../assets/images/chips1.png';
import chips2 from '../assets/images/chips2.png';
import chips3 from '../assets/images/chips3.png';
import coconutFlour from '../assets/images/coconut-flour.png';
import desiccated from '../assets/images/desiccated.png';
import flakes from '../assets/images/flakes.png';

const CoconutSnacks = () => {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const snackProducts = [
    {
      id: 1,
      name: 'Premium Coconut Chips - Original',
      price: 40.00,
      images: [chips1],
      rating: 4.7,
      reviews: 89,
      description: 'Crispy and naturally sweet coconut chips, perfect for snacking or adding to your favorite dishes.',
      longDescription: 'Our Premium Coconut Chips are made from the finest mature coconuts, carefully sliced and toasted to perfection. These crispy, golden chips retain their natural sweetness and coconut flavor. Perfect for snacking, baking, or as a healthy topping for yogurt, smoothie bowls, and cereals.',
      benefits: [
        'High in healthy fats and fiber',
        'No artificial preservatives',
        'Gluten-free and vegan',
        'Rich in minerals like iron and zinc',
        'Natural source of energy'
      ],
      ingredients: '100% Pure Coconut',
      weight: '150g',
      origin: 'Ghana',
      category: 'snacks',
      inStock: true,
      stockCount: 32
    },
    {
      id: 2,
      name: 'Spiced Coconut Chips',
      price: 40.00,
      images: [chips2],
      rating: 4.6,
      reviews: 67,
      description: 'Deliciously seasoned coconut chips with a blend of spices for an exotic taste experience.',
      longDescription: 'Experience the perfect fusion of tropical coconut and exotic spices. Our Spiced Coconut Chips are carefully seasoned with a proprietary blend of natural spices including paprika, turmeric, and chili powder, creating a delightful balance of sweet and savory flavors.',
      benefits: [
        'Unique blend of natural spices',
        'Antioxidant-rich ingredients',
        'Perfect balance of sweet and savory',
        'Healthy alternative to potato chips',
        'Energy-boosting snack'
      ],
      ingredients: 'Coconut, Natural Spices (Paprika, Turmeric, Chili Powder, Salt)',
      weight: '150g',
      origin: 'Ghana',
      category: 'snacks',
      inStock: true,
      stockCount: 28
    },
    {
      id: 3,
      name: 'Toasted Coconut Chips',
      price: 40.00,
      images: [chips3],
      rating: 4.8,
      reviews: 94,
      description: 'Golden toasted coconut chips with a rich, nutty flavor that melts in your mouth.',
      longDescription: 'Our Toasted Coconut Chips are slowly roasted to achieve the perfect golden color and intense coconut flavor. The toasting process brings out the natural oils and creates a rich, nutty taste with a satisfying crunch that gradually melts in your mouth.',
      benefits: [
        'Slow-roasted for optimal flavor',
        'Rich in medium-chain triglycerides',
        'Natural source of potassium',
        'Satisfying crunch and texture',
        'Perfect for dessert toppings'
      ],
      ingredients: '100% Pure Toasted Coconut',
      weight: '150g',
      origin: 'Ghana',
      category: 'snacks',
      inStock: true,
      stockCount: 41
    },
    {
      id: 4,
      name: 'Organic Coconut Flour',
      price: 80.00,
      images: [coconutFlour],
      rating: 4.9,
      reviews: 156,
      description: 'High-quality, gluten-free coconut flour perfect for baking and cooking healthy recipes.',
      longDescription: 'Our Organic Coconut Flour is made from dried coconut meat that has been ground into a fine, soft powder. This gluten-free flour alternative is perfect for paleo and keto baking, offering a subtle coconut flavor and excellent nutritional profile.',
      benefits: [
        'Certified organic and gluten-free',
        'High in protein and fiber',
        'Low glycemic index',
        'Rich in healthy fats',
        'Perfect for paleo and keto diets'
      ],
      ingredients: '100% Organic Coconut Flour',
      weight: '500g',
      origin: 'Ghana',
      category: 'snacks',
      inStock: true,
      stockCount: 23
    },
    {
      id: 5,
      name: 'Desiccated Coconut',
      price: 150.00,
      images: [desiccated],
      rating: 4.5,
      reviews: 78,
      description: 'Finely shredded dried coconut, ideal for baking, cooking, and adding tropical flavor to dishes.',
      longDescription: 'Our Desiccated Coconut is made from fresh coconut meat that has been shredded and carefully dried to preserve its natural flavor and nutritional value. This versatile ingredient adds tropical flair to both sweet and savory dishes.',
      benefits: [
        'Finely shredded for easy mixing',
        'Long shelf life when stored properly',
        'Versatile cooking ingredient',
        'Natural sweetness enhancer',
        'Rich in dietary fiber'
      ],
      ingredients: '100% Pure Desiccated Coconut',
      weight: '250g',
      origin: 'Ghana',
      category: 'snacks',
      inStock: true,
      stockCount: 37
    },
    {
      id: 6,
      name: 'Coconut Flakes',
      price: 80.00,
      images: [flakes],
      rating: 4.6,
      reviews: 112,
      description: 'Large, soft coconut flakes that add texture and natural sweetness to cereals and desserts.',
      longDescription: 'Our Coconut Flakes are larger pieces of dried coconut that maintain a softer texture compared to chips. These flakes are perfect for adding to granola, yogurt, smoothie bowls, or baking recipes where you want visible coconut pieces.',
      benefits: [
        'Larger flakes for better texture',
        'Naturally sweet and aromatic',
        'Great for breakfast toppings',
        'Excellent for baking applications',
        'Source of healthy saturated fats'
      ],
      ingredients: '100% Pure Coconut Flakes',
      weight: '200g',
      origin: 'Ghana',
      category: 'snacks',
      inStock: true,
      stockCount: 29
    }
  ];  const handleAddToCart = (product) => {
    addToCart(product);
    showToast(`${product.name} added to cart!`, 'success');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Coconut <span className="text-yellow-300">Snacks</span>
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
            Discover our delicious range of coconut snacks and baking essentials. 
            From crispy chips to versatile flours, indulge in the tropical goodness!
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {snackProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Rating and Reviews */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Stock Status */}
                <div className="mb-4">
                  {product.inStock ? (
                    <span className="text-sm text-green-600 font-medium">
                      ✓ In Stock ({product.stockCount} available)
                    </span>
                  ) : (
                    <span className="text-sm text-red-600 font-medium">
                      ✗ Out of Stock
                    </span>
                  )}
                </div>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-600">
                    GHC {product.price.toFixed(2)}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    to={`/product/${product.id}`}
                    state={{ product, category: 'snacks' }}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-2"
                  >
                    <FaEye className="text-sm" />
                    View Details
                  </Link>                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className={`flex-1 px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
                      product.inStock
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <FaShoppingCart className="text-sm" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Coconut Snacks?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of taste, nutrition, and quality in every bite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🥥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Natural</h3>
              <p className="text-gray-600">Made from the finest coconuts with no artificial additives or preservatives.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💪</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nutrient Rich</h3>
              <p className="text-gray-600">Packed with healthy fats, fiber, and essential minerals for your wellbeing.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Carefully processed and packaged to maintain freshness and flavor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoconutSnacks;
