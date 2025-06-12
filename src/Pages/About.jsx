import React from 'react'
import { Link } from 'react-router-dom'
import { FaLeaf, FaCrown, FaHeart, FaShieldAlt, FaStar, FaUsers, FaAward, FaGlobe, FaHandshake, FaRecycle } from 'react-icons/fa'

const About = () => {  const values = [
    {
      icon: <FaLeaf className="text-3xl text-purple-600" />,
      title: "Natural Excellence",
      description: "We source only the finest natural ingredients, ensuring purity and quality in every product."
    },
    {
      icon: <FaCrown className="text-3xl text-purple-600" />,
      title: "Premium Quality",
      description: "Every item is crafted with meticulous attention to detail, delivering luxury you can trust."
    },
    {
      icon: <FaHeart className="text-3xl text-pink-600" />,
      title: "Customer Love",
      description: "Your satisfaction is our priority. We build lasting relationships through exceptional service."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-purple-600" />,
      title: "Trust & Integrity",
      description: "Transparency in our processes and honest business practices form the foundation of our brand."
    }
  ]

  const achievements = [
    { icon: <FaUsers className="text-2xl text-purple-600" />, number: "10,000+", label: "Happy Customers" },
    { icon: <FaAward className="text-2xl text-pink-600" />, number: "50+", label: "Premium Products" },
    { icon: <FaGlobe className="text-2xl text-purple-600" />, number: "15+", label: "Cities Served" },
    { icon: <FaStar className="text-2xl text-pink-600" />, number: "4.9/5", label: "Customer Rating" }
  ]

  const timeline = [
    {
      year: "2015",
      title: "The Beginning",
      description: "BGG Classics was founded by visionary entrepreneur Naa Tsoo Banks with a commitment to timeless style and quality craftsmanship."
    },
    {
      year: "2016",
      title: "Expansion into Wellness",
      description: "Launched A-La-Mode, our specialized confectionery division, driven by passion for wholesome living and premium nutrition."
    },
    {
      year: "2018",
      title: "Artisanal Coconut Focus",
      description: "Became a trusted name in artisanal coconut processing, bringing families the finest coconut products nature has to offer."
    },
    {
      year: "2024",
      title: "Digital Innovation",
      description: "Launched our comprehensive e-commerce platform, making premium products accessible to customers across the region."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white py-20 sm:py-24 lg:py-32 pt-24 sm:pt-28 lg:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
              Our <span className="text-yellow-300">Story</span> of Excellence
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
              From fashion to food, BGG Classics has been delivering premium quality products that enhance your lifestyle, naturally, for nearly a decade.
            </p>            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/beauty"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Discover Our Products
              </Link>
              <button 
                onClick={() => document.getElementById('values-section').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Our Mission
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Crafting Excellence Since <span className="text-purple-600">2015</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by visionary entrepreneur <span className="font-semibold text-purple-700">Naa Tsoo Banks</span>, 
                BGG Classics began as an innovative fashion brand with an unwavering commitment to timeless style and quality craftsmanship.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we've evolved into a comprehensive lifestyle brand, offering premium coconut products through our 
                <span className="font-semibold text-purple-700"> A-La-Mode</span> division and exquisite fashion accessories 
                that celebrate your unique style.
              </p>
              <div className="flex items-center gap-4">
                <FaHandshake className="text-3xl text-purple-600" />
                <div>
                  <h3 className="font-semibold text-gray-800">Our Promise</h3>
                  <p className="text-gray-600">Quality, authenticity, and excellence in every product.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
                <FaCrown className="text-6xl text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Brand</h3>
                <p className="text-gray-600 leading-relaxed">
                  From artisanal coconut processing to elegant fashion accessories, we maintain the highest standards of quality and craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>      {/* Values Section */}
      <div id="values-section" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our Core <span className="text-purple-600">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-purple-600">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A decade of growth, innovation, and commitment to excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200 hidden lg:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full inline-block mb-4">
                      <span className="font-bold text-lg">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block">
                    <div className="w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                      <FaStar className="text-4xl text-purple-600 mb-4" />
                      <h4 className="font-semibold text-gray-800 mb-2">Milestone Achievement</h4>
                      <p className="text-gray-600">Each step forward represents our commitment to bringing you the finest products and exceptional service.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>      {/* Achievements Section */}
      <div className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-yellow-300">Achievements</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors duration-300">
                  <div className="mb-4">{achievement.icon}</div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-lg opacity-90">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-purple-600">Product Lines</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From premium coconut products to elegant fashion accessories, discover our carefully curated collections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* A-La-Mode Products */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <FaLeaf className="text-3xl text-purple-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">A-La-Mode Coconut Products</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our artisanal coconut processing division offers premium, natural products for health-conscious families.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <FaRecycle className="text-purple-600 mr-3" />
                  <span><strong className="text-purple-700">Premium Unrefined Coconut Oil</strong> – Cold-pressed and pure</span>
                </li>
                <li className="flex items-center">
                  <FaRecycle className="text-purple-600 mr-3" />
                  <span><strong className="text-purple-700">Artisanal Desiccated Coconut</strong> – Perfectly processed</span>
                </li>
                <li className="flex items-center">
                  <FaRecycle className="text-purple-600 mr-3" />
                  <span><strong className="text-purple-700">Nutrient-Rich Coconut Flour</strong> – Gluten-free alternative</span>
                </li>
              </ul>              <Link 
                to="/oil"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-center inline-block"
              >
                Explore Coconut Products
              </Link>
            </div>

            {/* Beauty Products */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <FaCrown className="text-3xl text-purple-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Fashion & Beauty Accessories</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Elegant jewelry and accessories that celebrate your unique style and enhance your natural beauty.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <FaStar className="text-purple-600 mr-3" />
                  <span><strong className="text-purple-700">Premium Earrings</strong> – Timeless elegance</span>
                </li>
                <li className="flex items-center">
                  <FaStar className="text-purple-600 mr-3" />
                  <span><strong className="text-purple-700">Luxury Bracelets</strong> – Sophisticated designs</span>
                </li>
                <li className="flex items-center">
                  <FaStar className="text-purple-600 mr-3" />
                  <span><strong className="text-purple-700">Fashion Accessories</strong> – Complete your look</span>
                </li>
              </ul>              <Link 
                to="/beauty"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-center inline-block"
              >
                Browse Beauty Collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-gray-900 to-black text-white">        <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Join the BGG Classics <span className="text-purple-400">Family</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Experience the perfect blend of natural wellness and timeless elegance. 
            Discover why thousands of customers trust BGG Classics for their premium lifestyle needs.
          </p>          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/beauty"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center"
            >
              Shop Our Collections
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About