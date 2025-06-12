import React, { useState, useEffect } from 'react'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image1 from '../assets/images/image1.png'
import Image2 from '../assets/images/image2.png'
import Image3 from '../assets/images/image3.png' 
import Image4 from '../assets/images/image4.png'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      message: "The coconut snacks are absolutely delicious! I can't get enough of them!",
      name: "Sarah J.",
      image: Image1,
      rating: 5,
      product: "Coconut Chips"
    },
    {
      id: 2,
      message: "A perfect blend of flavor and crunch. My new favorite snack!",
      name: "Mike T.",
      image: Image2,
      rating: 5,
      product: "Virgin Coconut Oil"
    },
    {
      id: 3,
      message: "These coconut chips are a game changer. Healthy and tasty!",
      name: "Emily R.",
      image: Image3,
      rating: 5,
      product: "Coconut Flour"
    },
    {
      id: 4,
      message: "I love the variety of coconut products. They never disappoint!",
      name: "John D.",
      image: Image4,
      rating: 5,
      product: "Beauty Accessories"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        className={`${index < rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`} 
      />
    ))
  }

  return (
    <div className="px-2 sm:px-4 md:px-8 py-16 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <FaQuoteLeft className="text-2xl text-purple-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            What Our Customers Say
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing customers have to say about their BGG Classics experience.
          </p>
          
          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">4.9</div>
              <div className="flex justify-center mt-1 mb-2">
                {renderStars(5)}
              </div>
              <div className="text-sm text-gray-500">Average Rating</div>
            </div>
            <div className="w-px h-16 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">10K+</div>
              <div className="text-sm text-gray-500 mt-1">Happy Customers</div>
            </div>
            <div className="w-px h-16 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">95%</div>
              <div className="text-sm text-gray-500 mt-1">Satisfaction Rate</div>
            </div>
          </div>
        </div>        {/* Desktop View - All Cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group">
              <div className="bg-white rounded-2xl shadow-xl p-6 h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-purple-200 group-hover:text-purple-300 transition-colors">
                  <FaQuoteLeft className="text-2xl" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Message */}
                <p className="text-gray-700 text-center mb-6 flex-grow italic leading-relaxed text-lg">
                  "{testimonial.message}"
                </p>
                
                {/* Customer Info */}
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 object-cover rounded-full border-4 border-purple-400 shadow-lg transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">{testimonial.name}</h3>
                  <span className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full">{testimonial.product}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View - Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl p-8 mx-auto max-w-sm relative overflow-hidden border border-gray-100">
                    {/* Decorative gradient */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    
                    {/* Quote icon */}
                    <div className="absolute top-4 right-4 text-purple-200">
                      <FaQuoteLeft className="text-3xl" />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    {/* Message */}
                    <p className="text-gray-700 text-center mb-8 italic leading-relaxed text-lg">
                      "{testimonial.message}"
                    </p>
                    
                    {/* Customer Info */}
                    <div className="flex flex-col items-center">
                      <div className="relative mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-20 h-20 object-cover rounded-full border-4 border-purple-400 shadow-lg"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-800 text-xl mb-2">{testimonial.name}</h3>
                      <span className="text-sm text-purple-600 bg-purple-50 px-4 py-2 rounded-full">{testimonial.product}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 text-purple-600 hover:text-purple-800"
          >
            <FaChevronLeft />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 text-purple-600 hover:text-purple-800"
          >
            <FaChevronRight />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Happy Customers!</h3>
            <p className="mb-6 text-purple-100">Experience the BGG Classics difference for yourself</p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials