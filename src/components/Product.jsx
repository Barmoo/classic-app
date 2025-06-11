import React from 'react'
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
import { FaArrowRight } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Product = () => {
  return (
    <div className="bg-gray-50">
      {/* Best Selling Products */}
      <div>
        <h1 className="flex justify-center text-xl md:text-2xl font-bold mt-6 text-gray-800">Best Selling Products</h1>
      </div>
      <div className="flex flex-row justify-center gap-8 mt-8 px-2 md:px-8">
        {[ 
          { img: Coconut, label: "Virgin Coconut Oil", price: "GHS 155" },
          { img: Small, label: "Virgin Coconut Oil", price: "GHS 80" },
          { img: Flour, label: "Coconut Flour", price: "GHS 80" },
          { img: Chips1, label: "Chips", price: "GHS 90" }
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg flex flex-col items-center w-72 md:w-80 h-[26rem] p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-48 h-48 md:w-56 md:h-56 object-cover mb-4 rounded-lg shadow-md"
            />
            <h3 className="text-center text-lg font-semibold mb-2 text-gray-800">{item.label}</h3>
            <p className="text-center text-pink-600 font-bold text-lg mb-4">{item.price}</p>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-500 transition">
              <FaShoppingCart className="inline mr-2" /> Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Coconut Snacks */}
      <div className="flex flex-col items-center mt-20 bg-gray-100 px-2 sm:px-4 md:px-8 py-8 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-pink-600 text-center">Coconut Snacks</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 w-full">
          {/* Snack 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center w-full sm:w-96 md:w-80 transition-transform duration-300 hover:shadow-2xl">
            <h1 className="text-xl font-semibold mb-2 text-pink-500 text-center">Coconut Snack Delight</h1>
            <p className="text-gray-600 text-center mb-4">
              Indulge in the perfect balance of sweet, nutty coconut flavors and a satisfying crunch 
              that transports you straight to a sun-soaked island with every bite.
            </p>
            <button className="flex gap-2 mb-4 bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-500 transition">
              SHOP NOW <FaArrowRight />
            </button>
            <img src={Chips1} alt="Coconut Snack Delight" className="w-40 h-40 object-cover rounded mb-2 shadow" />
          </div>
          {/* Snack 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center w-full sm:w-96 md:w-80 transition-transform duration-300 hover:shadow-2xl">
            <h1 className="text-xl font-semibold mb-2 text-pink-500 text-center">Coconut Bliss Bites</h1>
            <p className="text-gray-600 text-center mb-4">
              These bite-sized treats are bursting with the rich, creamy flavor of pure coconut, 
              offering a perfect blend of chewy sweetness and a hint of paradise in every piece.
            </p>
            <button className="flex gap-2 mb-4 bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-500 transition">
              SHOP NOW <FaArrowRight />
            </button>
            <img src={Chips2} alt="Coconut Bliss Bites" className="w-40 h-40 object-cover rounded mb-2 shadow" />
          </div>
          {/* Snack 3 */}
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center w-full sm:w-96 md:w-80 transition-transform duration-300 hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-2 text-pink-500 text-center">Savor the Tropics with Coconut Munchies</h3>
            <p className="text-gray-600 text-center mb-4">
              These delightful snacks capture the essence of the tropics with every crispy, coconut-infused bite, 
              delivering a burst of natural sweetness that feels like a vacation in your mouth.
            </p>
            <button className="flex gap-2 mb-4 bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-500 transition">
              SHOP NOW <FaArrowRight />
            </button>
            <img src={Chips3} alt="Coconut Munchies" className="w-40 h-40 object-cover rounded mb-2 shadow" />
          </div>
        </div>
        {/* Promo Banner */}
        <div className="w-full bg-black mt-16 mb-4 px-4 md:px-10 py-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row w-full justify-between items-center gap-6">
            <h1 className="text-white text-xl md:text-3xl text-center md:text-left">Get 10% Off On Your First Purchase</h1>
            <button className="bg-pink-600 px-8 md:px-16 py-3 md:py-4 text-white flex items-center justify-center gap-2 rounded mt-4 md:mt-0">
              <FaShoppingCart className="text-xl" />Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Beauty Products */}
      <div>
        <h1 className="flex justify-center mt-20 text-xl md:text-2xl font-bold text-gray-800">Beauty Products</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-8 p-2 mb-20">
        {[ 
          { img: Earrings, label: "Making Every Meal", price: "GHS 50" },
          { img: Earrings2, label: "Very Handy", price: "GHS 45" },
          { img: Earrings3, label: "Having Varieties", price: "GHS 60" },
          { img: Earrings4, label: "Having Varieties", price: "GHS 55" },
          { img: Wrist, label: "Having Varieties", price: "GHS 70" },
          { img: Wrist2, label: "Having Varieties", price: "GHS 65" },
          { img: Wrist3, label: "Having Varieties", price: "GHS 75" },
          { img: Wrist4, label: "Having Varieties", price: "GHS 80" },
          { img: Scarf, label: "Having Varieties", price: "GHS 40" },
          { img: Scarf2, label: "Having Varieties", price: "GHS 42" }
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg flex flex-col items-center w-64 h-80 p-4 transition-transform duration-300 hover:shadow-2xl"
          >
            <img src={item.img} alt={item.label} className="w-full h-64 object-cover mb-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
            <h3 className="text-center text-base md:text-lg font-semibold text-gray-800">{item.label}</h3>
            <p className="text-center text-pink-600 font-semibold mt-auto">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product