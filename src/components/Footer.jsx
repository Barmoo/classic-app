import React from 'react'
import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bg-black py-6 mt-12">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-lg mb-4 font-semibold">Follow BBG Classic</h2>
        <div className="flex space-x-6 mb-2">
          <a href="https://www.instagram.com/bgg_classics?igsh=Y3JuYXM2MWV5Ynow&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-white text-2xl hover:text-green-400 transition" />
          </a>
          <a href="https://www.tiktok.com/@naatsoobanks1?_t=ZM-8wrtkmO0cbg&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok className="text-white text-2xl hover:text-green-400 transition" />
          </a>
          <a href="https://www.facebook.com/share/19Bu8cmnsh/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="text-white text-2xl hover:text-green-400 transition" />
          </a>
        </div>
        <hr className="w-[90%] border-gray-700 my-4" />
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} BBG Classic. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer