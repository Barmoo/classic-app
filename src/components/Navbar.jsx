import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 z-50 flex justify-between items-center bg-white py-8 p-2 w-full shadow '>
        <div className='flex flex-row space-x-6 '>
          <span>BBG CLASSIC</span>  
          <span>Everything</span>  
          <span>Oil</span>  
          <span>Snack</span>  
        </div>
        <div className="flex flex-row space-x-6">
            <span>About</span>
            <span>Contact</span>
            <span>GHS 0.00</span>
            <span>Cart</span>
        </div>
    </div>
  )
}

export default Navbar