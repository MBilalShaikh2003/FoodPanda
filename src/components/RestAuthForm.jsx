"use client";
import React from "react";
import foodpandaLogo from "../../public/foodbear.png";
import Image from "next/image";
import pandabear from "../../public/pandabear.png";
import { GrDocumentText } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa";

const RestAuthForm = () => {
  return (
    <div className="bg-gray-100">
      <header className="w-full flex justify-between items-center mx-auto px-4 bg-gray-200">
        <div className="flex items-center gap-3 py-5 px-4">
          <Image src={foodpandaLogo} alt="Foodpanda Logo" className="h-8 w-8" />
          <span className="text-black text-[24px] font-medium">
            <b>foodpanda</b> for business
          </span>
        </div>
        <button className=" p-3 bg-transparent btnBusAuth">
          Login to company portal
        </button>
      </header>


      <div className="container mx-auto px-4 pb-20 flex justify-center items-center">
        <div className="sign-up-text text-center ">

        <h1 className="font-bold text-[34px]  pt-[3rem]">Sign up for foodpanda for business</h1>
        <p>Want access to corporate food delivery, dine-in, allowances and gift cards? You're in the right place!</p>
        <div className="flex flex-col justify-center items-center py-3">
            <div>

            <p className="flex items-center gap-2 py-3"><GrDocumentText /> Take 5 mins to fill out our form</p>
            <p className="flex items-center gap-2"><FaRegClock /> Get a response within 1-2 business days</p>
            </div>
        </div>
        </div>
        <div>
            <Image src={pandabear} alt="foodBear"  />
        </div>

      </div>

      <div className="container mx-auto px-8 mb-8 bg-white w-[80%] border rounded-xl ">
        <div className="formRestSign">

        
        <h1 className="text-2xl py-12 font-bold">Company Name</h1>
        <form className="flex flex-col gap-y-6  ">
            <input type="text" className="border-gray-300 py-2 px-3 border rounded-lg" name="name" placeholder="Company Name"/>
            <input type="text" className="border-gray-300 py-2 px-3 border rounded-lg" name="business name" placeholder="Business registration number"/>
            <select  name="industry"  id="" className="border-gray-300 py-2 px-3 border rounded-lg" >
                <option value="selected">industry</option>
                <option value="">Consulting & Professional Services</option>
                <option value="">Energy & Utilities</option>
                <option value="">Events and Entertainment</option>
                <option value="">Financial Services</option>
                <option value="">Government & Non-profit</option>
                <option value="">Healthcare</option>
                <option value="">Hospitality & Real Estate</option>
                <option value="">Transportation, Shipping & Logistics</option>
                <option value="">Manufacturing</option>
                <option value="">Media</option>
                <option value="">Oil & Gas, Mining</option>
                <option value="">Pharmaceuticals</option>
                <option value="">Retail & eCommerce</option>
                <option value="">Technology</option>

            </select>

            <select name="" id="" className="border-gray-300 py-2 px-3 border rounded-lg">
                <option value="selected">No of employees</option>
                <option value="">1-50</option>
                <option value="">50-100</option>
                <option value="">100-200 </option>
                <option value="">200-500</option>
                <option value="">More than 500</option>

            </select>
            <input type="text" className="border-gray-300 py-2 px-3 border rounded-lg" placeholder="Street name"/>
           
            <div className="flex justify-between">
              <input type="text" className="border-gray-300 py-2 px-3 border rounded-lg w-[45%]" placeholder="Postal Code"/>
              <select name="" id="" className="border-gray-300 py-2 px-3 border rounded-lg w-[45%]">
                <option value="selected">City</option>
              </select>
            </div>
            <hr />
            <h1 className="text-2xl py-12 font-bold">Your Details</h1>
            <div className="flex justify-between">
              <input type="text" className="border-gray-300 py-2 px-3 border rounded-lg w-[45%]" placeholder="Postal Code"/>
              <select name="" id="" className="border-gray-300 py-2 px-3 border rounded-lg w-[45%]">
                <option value="selected">City</option>
              </select>
            </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default RestAuthForm;
