"use client";
import React, { useState } from "react";
import foodpandaLogo from "../../public/foodbear.png";
import Image from "next/image";
import pandabear from "../../public/pandabear.png";
import { GrDocumentText } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { FaBuilding } from "react-icons/fa6";
import { VscListSelection } from "react-icons/vsc";
import { GiKnifeFork } from "react-icons/gi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import GooglePlay from "../../public/googleplay1.png";
import AppStore from "../../public/appstore1.png";

const RestAuthForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-gray-100">
      <header className="w-full flex flex-wrap justify-between items-center mx-auto px-4 bg-gray-200">
        <div className="flex items-center gap-3 py-5 px-4">
          <Image src={foodpandaLogo} alt="Foodpanda Logo" className="h-8 w-8" />
          <span className="hidden text-black text-[24px] font-medium sm:block md:block lg:block xl:block 2xl:block">
            <b>foodpanda</b> for business
          </span>
        </div>
        <button
          onClick={toggleBtn}
          className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        {isOpen && (
          <div className="flex basis-full flex-col items center justify-center">
            <Link href={"/restaurant-login"}> Login to company portal</Link>
          </div>
        )}
        <Link href={"/restaurant-login"}>
          <button className=" hidden sm:block md:block lg:block xl:block 2xl:block p-3 bg-transparent btnBusAuth">
            Login to company portal
          </button>
        </Link>
      </header>

      <div className="container mx-auto px-4 pb-20 flex justify-center items-center">
        <div className="sign-up-text  sm:text-center md:text-center lg:text-center xl:text-center 2xl:text-center">
          <h1 className="font-bold text-[34px]  pt-[3rem] ">
            Sign up for foodpanda for business
          </h1>
          <p>
            Want access to corporate food delivery, dine-in, allowances and gift
            cards? You're in the right place!
          </p>
          <div className="flex flex-col justify-center items-center py-3">
            <div>
              <p className="flex items-center gap-2 py-3">
                <GrDocumentText /> Take 5 mins to fill out our form
              </p>
              <p className="flex items-center gap-2">
                <FaRegClock /> Get a response within 1-2 business days
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="hidden sm:block md:block lg:block xl:block 2xl:block"
            src={pandabear}
            alt="foodBear"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 2xl:px-8 mb-4 bg-white w-[80%] border rounded-xl ">
        <div className="block w-full sm:mx-auto sm:w-[80%] md:mx-auto md:w-[80%] lg:mx-auto lg:w-[80%] xl:mx-auto xl:w-[80%] 2xl:mx-auto 2xl:w-[80%]">
          <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl py-12 font-bold">
            Company Name
          </h1>
          <form className="flex flex-col gap-y-6  ">
            <input
              type="text"
              className="border-gray-300 py-2 px-3 border rounded-lg"
              name="name"
              placeholder="Company Name"
            />
            <input
              type="text"
              className="border-gray-300 py-2 px-3 border rounded-lg"
              name="business name"
              placeholder="Business registration number"
            />
            <select
              name="industry"
              id=""
              className="border-gray-300 py-2 px-3 border rounded-lg"
            >
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

            <select
              name=""
              id=""
              className="border-gray-300 py-2 px-3 border rounded-lg"
            >
              <option value="selected">No of employees</option>
              <option value="">1-50</option>
              <option value="">50-100</option>
              <option value="">100-200 </option>
              <option value="">200-500</option>
              <option value="">More than 500</option>
            </select>
            <input
              type="text"
              className="border-gray-300 py-2 px-3 border rounded-lg"
              placeholder="Street name"
            />

            <div className="flex flex-col gap-6 sm:justify-between sm:flex-row md:justify-between md:flex-row lg:justify-between lg:flex-row xl:justify-between xl:flex-row 2xl:justify-between 2xl:flex-row">
              <input
                type="text"
                className="border-gray-300 py-2 px-3 border rounded-lg w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%]"
                placeholder="Postal Code"
              />

              <select
                name=""
                value="city"
                id=""
                className="border-gray-300 py-2 px-3 border rounded-lg w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%]"
              >
                <option value="">Karachi</option>
                <option value="">Islamabad</option>
                <option value="">Lahore</option>
                <option value="">Multan</option>
                <option value="">Hyderabad</option>
                <option value="">Faisalabad</option>
                <option value="">Rawalpindi</option>
                <option value="">Quetta</option>
                <option value="">Peshawar</option>
              </select>
            </div>
            <hr />
<<<<<<< HEAD
            <h1 className="text-2xl py-12 font-bold">Your Details</h1>
            <div className="flex justify-between">
              <input type="text" className="border-gray-300 py-2 px-3 border rounded-lg w-[45%]" placeholder="First Name"/>
              <input type="text" className="border-gray-300 py-2 px-3 border rounded-lg w-[45%]" placeholder="Last Name"/>
            </div>
            <input type="text" placeholder="Corporate Email" className="border-gray-300 py-2 px-3 border rounded-lg"/>
            <div className="flex justify-between">
              <select name="" id="" className="border-gray-300 py-2 px-3 border rounded-lg  w-[15%]">
                <option value="selected"><sub>PK</sub> +92</option>
                <option value=""><sub>PK</sub> +92</option>
                <option value=""><sub>IN</sub> +91</option>
                <option value=""><sub>PK</sub> +92</option>
                <option value=""><sub>PK</sub> +92</option>
                <option value=""><sub>PK</sub> +92</option>
                <option value=""><sub>PK</sub> +92</option>
                <option value=""><sub>PK</sub> +92</option>
                <option value=""><sub>PK</sub> +92</option>
                <option value=""><sub>PK</sub> +92</option>
                <option value=""><sub>PK</sub> +92</option>
                <option value=""><sub>PK</sub> +92</option>
                <option value=""><sub>PK</sub> +92</option>
                <option value=""><sub>PK</sub> +92</option>
                <option value=""><sub>PK</sub> +92</option>
                <option value=""><sub>PK</sub> +92</option>
                <option value=""><sub>PK</sub> +92</option>
              </select>
              <input type="number" placeholder="Phone" className="border-gray-300 py-2 px-3 border rounded-lg w-[80%]" name="number" />
            </div>

            <select name="" id="" className="border-gray-300 py-2 px-3 border rounded-lg">
              <option value="selected">Reason for showing us </option>
              <option value="">Reason for choosing us </option>
              <option value="">Employee Meal Programs (e.g: Overtime, Weekly or Monthly Allowance)  </option>
              <option value="">Events, Catering & Large orders </option>
              <option value="">Rewards, Recognition & Gifts </option>
              <option value="">Pantry % Suppliees </option>
            </select>
       
        </form>
=======
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl pt-12 pb-3 font-bold">
              Your Details
            </h1>
            <div className="flex flex-col gap-6 sm:justify-between sm:flex-row md:justify-between md:flex-row lg:justify-between lg:flex-row xl:justify-between xl:flex-row 2xl:justify-between 2xl:flex-row">
              <input
                type="text"
                className="border-gray-300 py-2 px-3 border rounded-lg  w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%]"
                placeholder="First Name"
              />
              <input
                type="text"
                className="border-gray-300 py-2 px-3 border rounded-lg  w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%]"
                placeholder="Last Name"
              />
            </div>
            <input
              type="text"
              className="border-gray-300 py-2 px-3 border rounded-lg"
              placeholder="Corporate Email"
            />
            <select
              name="Reason"
              className="border-gray-300 py-2 px-3 border rounded-lg"
              id=""
            >
              <option value="selected">Reason for choosing us</option>
              <option value="">
                Employee Meal Programs (e.g. Overtime, Weekly or Monthly
                Allowances)
              </option>
              <option value="">Events, Catering & Large Orders</option>
              <option value="">Rewards, Recognition & Gifts</option>
              <option value="">Pantry & Supplies</option>
              <option value="">Employee Perks</option>
            </select>
            <button
              className="border-gray-300 py-4 px-3 border rounded-lg my-4  btnSign bg-pink-600 font-bold text-white"
              type="submit"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
      <div className="contact mt-14 container mx-auto px-5 bg-transparent">
        <h1 className="font-bold text-[30px] ">Contact Us</h1>
        <div className="mt-9 media flex flex-col gap-6 sm:justify-between sm:flex-row  md:justify-between md:flex-row lg:justify-between lg:flex-row xl:justify-between xl:flex-row 2xl:justify-between 2xl:flex-row  ">
          <div className="flex flex-col gap-4">
            <FaBuilding className="h-7 w-7" />
            <h1 className="font-bold text-xl">
              Become a foodpanda for business client
            </h1>
            <div>
              <p className="text-black text-lg">Contact</p>
              <a
                href="corporate.sales@foodpanda.pk"
                className="text-black text-lg underline"
              >
                corporate.sales@foodpanda.pk
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <GiKnifeFork className="h-7 w-7" />
            <h1 className="font-bold text-xl">Order-related queries</h1>
            <div>
              <p className="text-black text-lg">Contact</p>
              <a
                href="corporate.sales@foodpanda.pk"
                className="text-black text-lg underline"
              >
                corporate@foodpanda.pk
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <VscListSelection className="h-7 w-7" />
            <h1 className="font-bold text-xl">List your restaurant</h1>
            <div>
              <p className="text-black text-lg">Contact</p>
              <a
                href="corporate.sales@foodpanda.pk"
                className="text-black text-lg underline"
              >
                partner.foodpanda.pk
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer bg-black  pt-6  mt-[5rem] ">
        <div className="container mx-auto px-4 mt-4 ">
          <div className="flex items-center gap-3 py-5 px-4">
            <Image
              src={foodpandaLogo}
              alt="Foodpanda Logo"
              className="h-8 w-8"
            />
            <span className=" text-[24px] text-pink-600 font-medium sm:block md:block lg:block xl:block 2xl:block">
              <b>foodpanda</b> for business
            </span>
          </div>
          <div className="footer-ul text-white flex flex-col gap-3 py-8 text-sm ">
            <p>About Us</p>

            <p>Company Login</p>
          </div>

          <div className="flex flex-col gap-4 items-center sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row py-14">
            <div className="flex gap-5 w-full items-center justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
              <FaFacebookSquare className="social " />
              <FaTwitter className="social" />
              <FaLinkedin className="social " />
              <FaInstagram className="social " />
            </div>
            <div className="flex gap-3 w-full justify-center sm:justify-end md:justify-end  lg:justify-end  xl:justify-end 2xl:justify-end">
              <Image
                src={GooglePlay}
                alt="google play button"
                className="w-[25%]"
              />
              <Image src={AppStore} alt="App store" className="w-[25%]" />
            </div>
          </div>
>>>>>>> 9546cb45d27b1d4abc88b4774feea06e3ca6bf11
        </div>
      </div>
    </div>
  );
};

export default RestAuthForm;
