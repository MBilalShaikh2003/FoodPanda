"use client";
import { useState } from "react";
import React from "react";
import foodpandaLogo from "../../public/foodbear.png";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import pandagift from "../../public/pandagift.png";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { PiCrownSimpleFill } from "react-icons/pi";
import laptop from "/public/pandalaptop.png";
import { GiKnifeFork } from "react-icons/gi";

const Business = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className=" bg-gray-200">
        <header className="container mx-auto px-2 w-full flex flex-wrap justify-between items-center">
          <div className="flex items-center gap-3 py-5 px-4">
            <Image
              src={foodpandaLogo}
              alt="Foodpanda Logo"
              className="h-8 w-8"
            />
            <span className="hidden  text-black text-[24px] font-medium  md:block lg:block xl:block 2xl:block">
              <b>foodpanda</b> for business
            </span>
          </div>
          <button
            onClick={toggleBtn}
            className="block   md:hidden lg:hidden xl:hidden 2xl:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
          {isOpen && (
            <div className="flex basis-full flex-col items center justify-center">
              <Link href={"/restaurant-login"}> Login to company portal</Link>
              <Link href={"/restaurant-login"}> Get Started</Link>
            </div>
          )}
          <div className="hidden md:flex md:gap-2 lg:flex lg:gap-2 xl:flex xl:gap-2 2xl:flex 2xl:gap-2">
            <Link href={"/restaurant-login"}>
              <button className=" hidden sm:block md:block lg:block xl:block 2xl:block p-3 bg-transparent btnBusAuth">
                Login to company portal
              </button>
            </Link>
            <Link href={"/restaurant-signup"}>
              <button className=" hidden sm:block md:block lg:block xl:block 2xl:block py-3 px-10 text-white font-bold rounded-lg bg-pink-600 ">
                Get Started
              </button>
            </Link>
          </div>
        </header>
      </div>
      <div className="container mx-auto px-4 flex flex-col-reverse sm:flex-row sm:justify-around md:flex-row md:justify-around lg:flex-row lg:justify-around xl:flex-row xl:justify-around 2xl:flex-row 2xl:justify-around     items-center py-10">
        <div className=" flex flex-col gap-9 pt-5">
          <h1 className="text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] font-bold">
            Food worth working for
          </h1>
          <p>
            Treat your co-workers and clients to great food from the best
            restaurants. Fuel work-from-home sessions, late nights in the
            office, corporate events, client meetings, and much more.
          </p>
          <Link href={"/restaurant-signup"}>
            <button className="text-white font-bold rounded-lg py-3 px-10 bg-pink-600">
              Get Started
            </button>
          </Link>
        </div>
        <div className="image flex justify-center sm:justify-end md:justify-end lg:justify-end xl:justify-end 2xl:justify-end ">
          <Image src={pandagift} alt="panda-bear-gift" className="w-[60%] " />
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <h1 className="text-[20px] mb-10 sm:text-[35px] md:text-[35px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] font-bold text-gray-800">
          foodpanda for business perks
        </h1>

        <div className="flex flex-col gap-10 pb-10 sm:flex-row  md:flex-row lg:flex-row  xl:flex-row 2xl:flex-row ">
          <div>
            <FaRegEnvelopeOpen className="w-10 h-10" />
            <br />
            <h1 className="font-bold text-[20px]">Corporate allowance</h1>
            <br />
            <div>
              <p>
                Provide meal allowances to employees directly from our
                dashboard. Time and money = saved.
              </p>
              <button className="bg-transparent border border-black text-black p-2 mt-3  rounded-lg">
                Learn more
              </button>
            </div>
          </div>

          <div>
            <PiCrownSimpleFill className=" w-10 h-10" />
            <br />

            <h1 className="font-bold text-[20px]">pandapro subscription</h1>
            <br />
            <div>
              <p>
                Give your team access to exclusive pandapro perks, like 25% off
                dine-in.
              </p>
              <button className="bg-transparent border border-black text-black p-2 mt-3  rounded-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* foodpandaLaptop */}
      <div className="bg-gray-100 flex items-center flex-col-reverse md:flex-row md:justify-between lg:flex-row lg:justify-between  xl:flex-row xl:justify-between  2xl:flex-row 2xl:justify-between  ">
        <div className="container mx-auto px-4 py-12 ">
          <h1 className="text-[24px] pb-6 sm:text-[34px] md:text-[34px] lg:text-[34px] xl:text-[34px] 2xl:text-[34px] font-bold text-gray-800">Why foodpanda for business?</h1>
          <div className="py-4">
            <h1 className="font-bold text-[20px] pb-3">Pay only what employees use</h1>
            <p>No more money wasted on food allowances that employees don't touch.</p>
          </div>
          <div className="py-4">
            <h1 className="font-bold text-[20px] pb-3">In-depth tracking</h1>
            <p>The foodpanda for business company dashboard makes it easy to keep track of employee activities.</p>
          </div>
          <div className="py-4">
            <h1 className="font-bold text-[20px] pb-3">Save time & money = increase productivity</h1>
            <p>We bend to your rules. Create custom allowances for different departments, and deliver food anywhere – whether it's the office, or employees’ homes.
            </p>
          </div>
          <button className="bg-pink-600 px-44 py-4 font-bold text-white border rounded-xl mt-4 hidden  md:block lg:block xl:block 2xl:block">Take a sneak peek at the dashboard</button>
        </div>
          <Image src={laptop} alt="foodpandaLaptop" className="w-[30%] h-[30%]"/>
      </div>
      <div className="">
        <h1 className="text-center text-[24px] py-6 sm:text-[34px] md:text-[34px] lg:text-[34px] xl:text-[34px] 2xl:text-[34px] font-bold text-gray-800`">Keep your team happy & fed with foodpanda</h1>
        <div>
          <div>
          <GiKnifeFork className=""/>
          <p className="font-bold text-[20px]">Save time and money with foodpanda for business allowances</p>
          </div>
        </div>
      </div>




    </div>
  );
};

export default Business;
