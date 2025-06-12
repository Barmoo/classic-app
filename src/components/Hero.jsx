import React from 'react'
import herologo from '../assets/images/herologo.png'
import { FaTruckMoving, FaShoppingCart, FaLeaf, FaStar, FaPlay, FaCheckCircle, FaHeart, FaUsers, FaAward, FaShieldAlt } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { GrCycle } from "react-icons/gr";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-16 md:py-20 bg-gradient-to-b from-pink-300 to-violet-300 pt-32 min-h-screen overflow-hidden">
        {/* Enhanced Background decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400/30 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-violet-400/20 rounded-full blur-xl"></div>
        
        {/* Floating sparkles */}
        <div className="absolute top-1/4 right-1/4 text-yellow-300 text-2xl animate-ping">
          <HiSparkles />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-white text-xl animate-pulse">
          <HiSparkles />
        </div>
        <div className="absolute top-1/3 left-1/5 text-pink-200 text-lg animate-bounce">
          <HiSparkles />
        </div>
        
        {/* Animated gradient border */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>
        
        {/* Enhanced Image Section */}
        <div className="relative flex-shrink-0 mb-8 lg:mb-0 group">
          {/* Enhanced floating badges around image */}
          <div className="absolute -top-6 -left-6 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 animate-bounce shadow-2xl border-2 border-white/30">
            <FaCheckCircle className="animate-pulse" />
            <span>100% Organic</span>
          </div>
          <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 animate-pulse shadow-2xl border-2 border-white/30">
            <FaStar className="animate-spin" />
            <span>4.9 Rating</span>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-2xl border-2 border-white/30 animate-bounce delay-1000">
            <FaTruckMoving className="mr-2" />
            Free Shipping
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-2xl border-2 border-white/30 animate-pulse delay-500">
            <FaHeart className="animate-ping" />
            <span>Loved</span>
          </div>
          
          {/* Enhanced product image with more effects */}
          <img 
            src={herologo} 
            alt="BGG Classics Premium Coconut Products"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl shadow-2xl transition-all duration-700 transform group-hover:scale-105 group-hover:rotate-1 border-4 border-white/30 group-hover:border-white/50"
          />
          
          {/* Enhanced glow effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-violet-400/30 rounded-3xl blur-xl -z-10 group-hover:blur-2xl transition-all duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-3xl blur-2xl -z-20 animate-pulse"></div>
          
          {/* Premium quality indicator */}
          <div className="absolute top-1/2 -right-8 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl border border-white/50 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <FaAward className="text-yellow-500 text-xl" />
          </div>
        </div>        {/* Enhanced Text Section */}
        <div className="lg:ml-16 max-w-2xl text-center lg:text-left relative z-10">
          {/* Limited time offer banner */}
          <div className="flex justify-center lg:justify-start mb-4 mt-8">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 animate-pulse shadow-lg">
              <HiLightningBolt className="animate-spin" />
              <span>Limited Time: Free Shipping on All Orders!</span>
            </div>
          </div>            {/* Enhanced main headline with typing effect styling */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">Join The</span>
            <br />
            <span className="text-purple-800 drop-shadow-lg animate-pulse">
              Organic Movement!
            </span>
          </h1>
            {/* Enhanced description with highlight */}
          <p className="text-white text-lg lg:text-xl mb-8 leading-relaxed drop-shadow-lg font-medium">
            Transform your lifestyle with our premium coconut products. 
            From kitchen essentials to beauty accessories, discover the natural            goodness that brings <span className="text-yellow-300 font-bold bg-black/20 px-3 py-1 rounded-lg shadow-lg">tropical richness</span> 
            to your everyday routine.
          </p>
          
          {/* Enhanced CTA buttons with improved styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
            <button className='group bg-gradient-to-r from-pink-600 via-pink-700 to-purple-700 hover:from-pink-700 hover:via-purple-700 hover:to-pink-800 px-10 py-4 text-white text-lg font-semibold flex items-center justify-center gap-3 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/30 transform hover:scale-105 hover:-translate-y-1 border-2 border-white/20 relative overflow-hidden'>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <FaShoppingCart className="text-xl group-hover:animate-bounce" /> 
              <span>Shop Now</span>
              <HiSparkles className="text-yellow-300 group-hover:animate-spin" />
            </button>
            
            <button className='group bg-white/10 backdrop-blur-sm hover:bg-white/30 px-8 py-4 text-white text-lg font-semibold flex items-center justify-center gap-3 rounded-full border-2 border-white/40 transition-all duration-300 hover:border-white/60 transform hover:scale-105 relative overflow-hidden'>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <FaPlay className="text-lg group-hover:animate-pulse" /> 
              <span>Watch Story</span>
            </button>
          </div>
            {/* Enhanced social proof with testimonial preview */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white font-bold">A</div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white font-bold">M</div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-400 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white font-bold">S</div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">
                  1K+
                </div>
              </div>
              <div className="text-white">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm drop-shadow-md" />
                  ))}
                </div>
                <p className="text-sm font-bold drop-shadow-lg">Thousands of happy customers</p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/30 shadow-xl">
              <p className="text-white font-medium text-sm italic drop-shadow-md">"Best coconut products ever!"</p>
              <p className="text-white/80 text-xs font-medium drop-shadow-sm">- Sarah M.</p>
            </div>
          </div>
        </div>
      </div>        {/* Enhanced Features Section with modern grid */}
      <div className="px-4 sm:px-6 md:px-10 py-12 md:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Enhanced background decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-1 bg-gradient-to-r from-pink-500 to-violet-500 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-1 bg-gradient-to-r from-violet-500 to-pink-500 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-violet-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
        
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">BGG Classics?</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Experience premium quality and exceptional service with every purchase
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className='group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center text-white transition-all duration-500 hover:scale-105 hover:shadow-pink-500/25 border border-gray-700/50 hover:border-pink-500/50 relative overflow-hidden'>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-transparent"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl shadow-pink-500/30">
                  <FaTruckMoving className='text-3xl text-white' />
                </div>
                <h3 className='text-xl font-bold mb-3 text-white group-hover:text-pink-300 transition-colors'>Free Shipping</h3>
                <p className='text-gray-300 text-sm leading-relaxed mb-4'>Fast & reliable delivery to your doorstep nationwide</p>
                <div className="text-pink-400 text-sm font-semibold">Available 24/7</div>
              </div>
            </div>
            
            <div className='group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center text-white transition-all duration-500 hover:scale-105 hover:shadow-violet-500/25 border border-gray-700/50 hover:border-violet-500/50 relative overflow-hidden'>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-transparent"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-violet-500 to-violet-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl shadow-violet-500/30">
                  <RiContactsBook3Fill className='text-3xl text-white'/>
                </div>
                <h3 className='text-xl font-bold mb-3 text-white group-hover:text-violet-300 transition-colors'>Certified Organic</h3>
                <p className='text-gray-300 text-sm leading-relaxed mb-4'>100% natural & authentic products with certification</p>
                <div className="text-violet-400 text-sm font-semibold">Lab Tested</div>
              </div>
            </div>
            
            <div className='group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center text-white transition-all duration-500 hover:scale-105 hover:shadow-green-500/25 border border-gray-700/50 hover:border-green-500/50 relative overflow-hidden'>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl shadow-green-500/30">
                  <FaRegMoneyBill1 className='text-3xl text-white'/>
                </div>
                <h3 className='text-xl font-bold mb-3 text-white group-hover:text-green-300 transition-colors'>Best Prices</h3>
                <p className='text-gray-300 text-sm leading-relaxed mb-4'>Unbeatable value for premium quality products</p>
                <div className="text-green-400 text-sm font-semibold">Price Match</div>
              </div>
            </div>
            
            <div className='group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center text-white transition-all duration-500 hover:scale-105 hover:shadow-blue-500/25 border border-gray-700/50 hover:border-blue-500/50 relative overflow-hidden'>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl shadow-blue-500/30">
                  <GrCycle className='text-3xl text-white'/>
                </div>
                <h3 className='text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors'>Easy Returns</h3>
                <p className='text-gray-300 text-sm leading-relaxed mb-4'>Hassle-free 30-day return policy guarantee</p>
                <div className="text-blue-400 text-sm font-semibold">No Questions</div>
              </div>
            </div>
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-green-400" />
                <span className="text-sm">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <FaAward className="text-yellow-400" />
                <span className="text-sm">Award Winning</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-blue-400" />
                <span className="text-sm">10K+ Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHeart className="text-red-400" />
                <span className="text-sm">Made with Love</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero