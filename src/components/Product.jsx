import React from 'react'
import Coconut from '../assets/images/oil.jpg'
import Small from '../assets/images/small-oil.png'
import Flour from '../assets/images/coconut-flour.png'
import Flakes from '../assets/images/flakes.png'
import Chips1 from '../assets/images/chips1.png'
import Chips2 from '../assets/images/chips2.png'
import Chips3 from '../assets/images/chips3.png'
import { FaArrowRight } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Product = () => {
  return (
    <div>
        <div>
            <h1 className='flex justify-center'>Best Selling Products</h1>
        </div>
        <div className="flex justify-between mt-8 p-2">
            <div className="bg-gray-400 rounded shadow p- flex flex-col items-center w-60 h-80">
                <img src={Coconut} alt="" className="w-full h-full object-cover mb-2" />
                <h3>Making every meal a memorable one</h3>
            </div>
            <div className="bg-white rounded shadow p- flex flex-col items-center w-60 h-80">
                <img src={Small} alt="" className="w-full h-full object-cover mb-2" />
                <h3>Very Handy</h3>
            </div>
            <div className="bg-white rounded shadow p- flex flex-col items-center w-60 h-80">
                <img src={Flour} alt="" className="w-full h-full object-cover mb-2" />
                <h3>Having varieties</h3>
            </div>
            <div className="bg-white rounded shadow p- flex flex-col items-center w-60 h-80">
                <img src={Flakes} alt="" className="w-full h-full object-cover mb-2" />
                <h3>No Boring Moments</h3>
            </div>
        </div>

        <div className="flex flex-col items-center mt-40 bg-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-green-800">Coconut Snacks</h2>
            <div className="flex flex-wrap justify-center gap-8 w-full">
                <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center w-90">
                    <h1 className="text-xl font-semibold mb-2 text-green-700">Coconut Snack Delight</h1>
                    <p className="text-gray-600 text-center mb-4">
                        Indulge in the perfect balance of sweet, nutty coconut flavors and a satisfying crunch 
                        that transports you straight to a sun-soaked island with every bite.
                    </p>
                    <button className="flex gap-2 mb-4 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
                        SHOP NOW <FaArrowRight />
                    </button>
                    <img src={Chips1} alt="" className="w-40 h-40 object-cover rounded mb-2 shadow" />
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-80">
                    <h1 className="text-xl font-semibold mb-2 text-green-700">Coconut Bliss Bites</h1>
                    <p className="text-gray-600 text-center mb-4">
                        These bite-sized treats are bursting with the rich, creamy flavor of pure coconut, 
                        offering a perfect blend of chewy sweetness and a hint of paradise in every piece.
                    </p>
                    <button className="flex gap-2 mb-4 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
                        SHOP NOW <FaArrowRight />
                    </button>
                    <img src={Chips2} alt="" className="w-40 h-40 object-cover rounded mb-2 shadow" />
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-80">
                    <h3 className="text-xl font-semibold mb-2 text-green-700">Savor the Tropics with Coconut Munchies</h3>
                    <p className="text-gray-600 text-center mb-4">
                        These delightful snacks capture the essence of the tropics with every crispy, coconut-infused bite, 
                        delivering a burst of natural sweetness that feels like a vacation in your mouth.
                    </p>
                    <button className="flex gap-2 mb-4 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
                        SHOP NOW <FaArrowRight />
                    </button>
                    <img src={Chips3} alt="" className="w-40 h-40 object-cover rounded mb-2 shadow" />
                </div>
        </div>
        <div className='w-full bg-black mt-16 mb-4 px-10 py-8'>
            <div className='flex w-full justify-between items-center'>
            <h1 className='text-white text-[2rem]'>Get 10% Off On Your First Purchase</h1>
            <button className='bg-green-700 px-16 py-4 text-white flex items-center justify-center gap-2'>
                <FaShoppingCart className="text-xl" />Shop Now
            </button>
            </div>
        </div>
     </div>
     <div>
            <h1 className='flex justify-center mt-20'>Flour Products</h1>
        </div>
        <div className="flex justify-between mt-20 p-2 mb-20">
            <div className="bg-gray-400 rounded shadow p- flex flex-col items-center w-60 h-80">
                <img src={Coconut} alt="" className="w-full h-full object-cover mb-2" />
                <h3>Making every meal a memorable one</h3>
            </div>
            <div className="bg-white rounded shadow p- flex flex-col items-center w-60 h-80">
                <img src={Small} alt="" className="w-full h-full object-cover mb-2" />
                <h3>Very Handy</h3>
            </div>
            <div className="bg-white rounded shadow p- flex flex-col items-center w-60 h-80">
                <img src={Flour} alt="" className="w-full h-full object-cover mb-2" />
                <h3>Having varieties</h3>
            </div>
            <div className="bg-white rounded shadow p- flex flex-col items-center w-60 h-80">
                <img src={Flakes} alt="" className="w-full h-full object-cover mb-2" />
                <h3>No Boring Moments</h3>
            </div>
        </div>
    </div>
    
  )
}

export default Product