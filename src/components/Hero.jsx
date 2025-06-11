import React from 'react'
import herologo from '../assets/images/herologo.png'
import { FaTruckMoving } from "react-icons/fa6";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { GrCycle } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-8 py-8 md:py-12 bg-gradient-to-b from-pink-300 to-violet-300 mt-0">
        {/* Image */}
        <div className="flex-shrink-0">
          <img 
            src={herologo} 
            alt="hero"
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
        {/* Text */}
        <div className="ml-10 max-w-xl mb-10">
          <h6 className="text-white text-lg font-medium mb-0">Best Quality Product</h6>
          <h1 className="text-[4rem] font-semibold mb-8 text-gray-800">Join The Organic Movement!</h1>
          <p className="text-gray-700 text-lg mb-6">
            In the heart of the home, coconut oil transforms 
            the kitchen, adding a tropical richness to sizzling
            stir-fries and a velvety smoothness to morning smoothies.
          </p>
          <button className='bg-pink-600 hover:bg-pink-500 px-16 py-4 text-white mt-4 flex items-center justify-center gap-2 rounded-lg shadow-md transition'>
            <FaShoppingCart className="text-xl" /> Shop Now
          </button>   
        </div>
      </div>
      
      {/* Features Section */}
      <div className="px-2 sm:px-4 md:px-10 py-6 md:py-8 bg-black">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
          <div className='bg-gray-900 rounded-lg shadow-lg p-4 flex-1 text-center text-white flex items-center justify-center transition-transform transform hover:scale-105'>
            <FaTruckMoving className='text-3xl text-pink-400 mr-2' />
            <div className="text-left">
              <h1 className='m-0 p-0'>Shipping Fee</h1>
              <h6 className='m-0 p-0'>Very Affordable</h6>
            </div>
          </div>
          <div className='bg-gray-900 rounded-lg shadow-lg p-4 flex-1 text-center text-white flex items-center justify-center transition-transform transform hover:scale-105'>
            <RiContactsBook3Fill className='text-3xl text-pink-400 mr-2'/>
            <div className="text-left">
              <h1 className='m-0 p-0'>Certified Organic</h1>
              <h6 className='m-0 p-0'>100% Guarantee</h6>
            </div>
          </div>
          <div className='bg-gray-900 rounded-lg shadow-lg p-4 flex-1 text-center text-white flex items-center justify-center transition-transform transform hover:scale-105'>
            <FaRegMoneyBill1 className='text-3xl text-pink-400 mr-2'/>
            <div className="text-left">
              <h1 className='m-0 p-0'>Huge Savings</h1>
              <h6 className='m-0 p-0'>At Lowest Price</h6>
            </div>
          </div>
          <div className='bg-gray-900 rounded-lg shadow-lg p-4 flex-1 text-center text-white flex items-center justify-center transition-transform transform hover:scale-105'>
            <GrCycle className='text-3xl text-pink-400 mr-2'/>
            <div className="text-left">
              <h1 className='m-0 p-0'>Easy Returns</h1>
              <h6 className='m-0 p-0'>No Questions Asked</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero