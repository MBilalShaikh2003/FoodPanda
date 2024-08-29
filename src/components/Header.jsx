import React from 'react'
import foodpandalogo from '/public/logo.png'
import cart from '/public/shopping-bag.png'
import Image from "next/image"

const Header = () => {
  return (
    <div>
        <header className="flex justify-between items-center p-4 bg-white-500 text-black  bg-[#ffffff]">
            <div className="flex items-center">
                <Image src={foodpandalogo} alt="Foodpanda Logo" className="h-10 w-10" />
                <span className=' text-[#ff2b85] text-[24px] font-bold'>foodpanda</span>
            </div>

            {/* <div className="flex items-center space-x-2">
                <input 
                    type="text" 
                    placeholder="Search for restaurants, cuisines..." 
                    className="px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300" 
                />
                <button className="px-3 py-1 rounded-md bg-red-600 hover:bg-red-700">Search</button>
            </div> */}
            {/* <div className="flex space-x-4">
                <a href="/login" className="hover:underline">Login</a>
                <a href="/cart" className="hover:underline">Cart</a>
            </div> */}
                    <div className="flex space-x-4">
            <button className="px-4 py-2   bg-[#ffff] border border-black text-black font-semibold rounded-md transform transition-transform duration-200 hover:scale-105">
                Log In
            </button>
            <button className="px-4 py-2 bg-[#ff2b85] text-white font-semibold rounded-md transform transition-transform duration-200 hover:scale-105">
                Sign Up
            </button>
            <div>
            <button className="font-semibold rounded-md transform transition-transform duration-200 hover:scale-105"><Image src={cart} alt="Foodpanda Logo" className="h-10 w-10" /></button>
            </div>
        </div>
        </header>
    </div>
  )
}

export default Header;