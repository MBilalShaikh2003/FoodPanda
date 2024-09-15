import React from 'react'
import foodpandalogo from '../../public/foodbear.png'
import cart from '/public/shopping-bag.png'
import Image from "next/image"
import Link from 'next/link'

const Header = () => {
    return (
      <div>
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white-500 text-black bg-[#ffffff] z-50">
          <div className="flex items-center gap-2">
            <Image src={foodpandalogo} alt="Foodpanda Logo" className="h-8 w-8" />
            <span className="text-[#ff2b85] text-[24px] font-bold">foodpanda</span>
          </div>
  
          <div className="flex space-x-4">
            <Link href={"/Signin"}>
              <button className="px-4 py-2 bg-[#ffff] border border-black text-black font-semibold rounded-md transform transition-transform duration-200 hover:scale-105">
                Log In
              </button>
            </Link>
            <Link href={"/Signup"}>
              <button className="px-4 py-2 bg-[#ff2b85] text-white font-semibold rounded-md transform transition-transform duration-200 hover:scale-105">
                Sign Up
              </button>
            </Link>
            <button className="font-semibold rounded-md transform transition-transform duration-200 hover:scale-105">
              <Image src={cart} alt="Cart" className="h-10 w-10" />
            </button>
          </div>
        </header>
        <div className="pt-[72px]"> 
      
        </div>
      </div>
    );
  }
  

export default Header;