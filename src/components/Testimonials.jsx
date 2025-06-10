import React from 'react'
import Image1 from '../assets/images/image1.png'
import Image2 from '../assets/images/image2.png'
import Image3 from '../assets/images/image3.png' 
import Image4 from '../assets/images/image4.png'

const Testimonials = () => {
  return (
    <div className="px-2 sm:px-4 md:px-8 py-8 bg-gray-50">
        <div>
            <h1 className="flex justify-center text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center">
                What Our Customers Say
            </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-4 sm:mt-8">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center w-full max-w-xs sm:w-64 h-80">
                <p className="italic text-gray-700 text-center mb-4 text-base sm:text-lg">
                  "The coconut snacks are absolutely delicious! I can't get enough of them!"
                </p>
                <img 
                  src={Image1} 
                  alt="" 
                  className="w-20 h-20 object-cover rounded-full border-4 border-green-400 shadow mb-3 transition-transform duration-300 hover:scale-110"
                />
                <h3 className="mt-2 font-semibold text-green-700 text-base sm:text-lg">- Sarah J.</h3>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center w-full max-w-xs sm:w-64 h-80">
                <p className="italic text-gray-700 text-center mb-4 text-base sm:text-lg">
                  "A perfect blend of flavor and crunch. My new favorite snack!"
                </p>
                <img 
                  src={Image2} 
                  alt="" 
                  className="w-20 h-20 object-cover rounded-full border-4 border-green-400 shadow mb-3 transition-transform duration-300 hover:scale-110"
                />
                <h3 className="mt-2 font-semibold text-green-700 text-base sm:text-lg">- Mike T.</h3>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center w-full max-w-xs sm:w-64 h-80">
                <p className="italic text-gray-700 text-center mb-4 text-base sm:text-lg">
                  "These coconut chips are a game changer. Healthy and tasty!"
                </p>
                <img 
                  src={Image3} 
                  alt="" 
                  className="w-20 h-20 object-cover rounded-full border-4 border-green-400 shadow mb-3 transition-transform duration-300 hover:scale-110"
                />
                <h3 className="mt-2 font-semibold text-green-700 text-base sm:text-lg">- Emily R.</h3>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center w-full max-w-xs sm:w-64 h-80">
                <p className="italic text-gray-700 text-center mb-4 text-base sm:text-lg">
                  "I love the variety of coconut products. They never disappoint!"
                </p>
                <img 
                  src={Image4} 
                  alt="" 
                  className="w-20 h-20 object-cover rounded-full border-4 border-green-400 shadow mb-3 transition-transform duration-300 hover:scale-110"
                />
                <h3 className="mt-2 font-semibold text-green-700 text-base sm:text-lg">- John D.</h3>
            </div>
        </div>
    </div>
  )
}

export default Testimonials