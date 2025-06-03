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
      <div className="flex items-center justify-center px-8 py-12 bg-gray-50  mt-0">
        {/* Image */}
        <div className="">
          <img 
            src={herologo} 
            alt="hero"
            className=""
          />
        </div>
        {/* Text */}
        <div className="ml-10 max-w-xl mb-10">
          <h6 className="text-black text-lg font-medium mb-0">Best Quality Product</h6>
          <h1 className="text-[4rem] font-semibold mb-8">Join The Organic Movement!</h1>
          <p className="text-gray-700 text-lg mb-6">
            In the heart of the home, coconut oil transforms 
            the kitchen, adding a tropical richness to sizzling
            stir-fries and a velvety smoothness to morning smoothies.
          </p>
         <button className='bg-green-700 px-16 py-4 text-white mt-4 flex items-center justify-center gap-2'>
            <FaShoppingCart className="text-xl" />Shop Now
        </button>   
        </div>
      </div>
      
     
      {/* Features Section */}
      <div className="flex justify-between space-x-8 mb-4 px-10 py-8 p-2 bg-black">
        <div className='flex w-full justify-between'>
          <div className='bg-gray-900 rounded shadow p-4 flex-1 mx-2 object-contain text-center text-white flex items-center justify-center'>
            <FaTruckMoving className='text-3xl text-green-400 mr-2' />
            <div className="text-left">
              <h1 className='m-0 p-0'>Shipping Fee</h1>
              <h6 className='m-0 p-0'>Very Affordable </h6>
            </div>
          </div>
          <div className='bg-gray-900 rounded shadow p-4 flex-1 mx-2 text-center text-white flex items-center justify-center'>
            <RiContactsBook3Fill className='text-3xl text-green-400 mr-2'/>
            <div className="text-left">
              <h1 className='m-0 p-0'>Certified Organic</h1>
              <h6 className='m-0 p-0'>100% Guarantee </h6>
            </div>
          </div>
          <div className='bg-gray-900 rounded shadow p-4 flex-1 mx-2 text-center text-white flex items-center justify-center'>
            <FaRegMoneyBill1 className='text-3xl text-green-400 mr-2'/>
            <div className="text-left">
              <h1 className='m-0 p-0'>Huge Savings</h1>
              <h6 className='m-0 p-0'>At Lowest Price </h6>
            </div>
          </div>
          
          <div className='bg-gray-900 rounded shadow p-4 flex-1 mx-2 h-30 text-center text-white flex items-center justify-center'>
            <GrCycle className='text-3xl text-green-400 mr-2'/>
            <div className="text-left">
              <h1 className='m-0 p-0'>Easy Returns</h1>
              <h6 className='m-0 p-0'>No Questions Asked </h6>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Hero