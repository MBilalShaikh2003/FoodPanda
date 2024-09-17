import React from 'react';
import bigpanda from '/public/bigpanda.png';
import vendor from '/public/vendor.png';

import CitiesCard from '@/components/CitiesCard';
import Karachi from '/public/Karachi.png'
import Lahore from '/public/Lahore.png'
import Islamabad from '/public/Islamabad.png'
import Faisalabad from '/public/Faisalabad.png'
import Rawalpindi from '/public/Rawalpindi.jpg'
import Abbottabad from '/public/Abbottabad.png'

import Office from '/public/office.png'


import Image from "next/legacy/image";

const Body = () => {
    return (
        <>
            <div className="bg-[#f7f7f7] flex flex-col md:flex-row items-center justify-between min-h-screen p-4">
                <div className="text-center md:text-left max-w-md mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        It's the food and groceries you love, delivered
                    </h2>
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Your street and street number"
                            className="px-4 py-2 w-full rounded-md border text-black border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none pr-20"
                        />
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black px-4 py-1 rounded-md hover:bg-[#c21760]"
                        >
                            Locate me
                        </button>
                    </div>
                    <button className="mt-4 px-4 py-2 w-full md:w-auto bg-[#ff2b85] text-white rounded-md hover:bg-[#c21760] hover:scale-105 transition-transform duration-200">
                        Find Food
                    </button>
                </div>
                <div className="w-full md:w-auto md:ml-8">
                    <Image
                        src={bigpanda}
                        alt="Big Panda"
                        width={800}
                        height={500}
                        className="mx-auto"
                    />
                </div>
            </div>
            <div className="bg-white py-8">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
                    You prepare the food, we handle the rest
                </h1>
            </div>

            <div className="relative w-full h-64 md:h-96 lg:h-[500px]">
                <Image
                    src={vendor}
                    alt="Vendor"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                />
            </div>

            <div className="bg-white py-8">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
                    Find us in theses cities and many more!
                </h1>
            </div>


            {/* Cards of cities */}

            <div className="p-4 bg-gray-100">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    <CitiesCard src={Karachi} alt="Karachi City" cityName="Karachi" />
                    <CitiesCard src={Islamabad} alt="Islamabad City" cityName="Islamabad" />
                    <CitiesCard src={Lahore} alt="Lahore City" cityName="Lahore" />
                    <CitiesCard src={Faisalabad} alt="Faisalabad City" cityName="Faisalabad" />
                    <CitiesCard src={Rawalpindi} alt="Karachi City" cityName="Rawalpindi" />
                    <CitiesCard src={Abbottabad} alt="Islamabad City" cityName="Abbottabad" />
                    <CitiesCard src={Lahore} alt="Lahore City" cityName="Lahore" />
                    <CitiesCard src={Faisalabad} alt="Faisalabad City" cityName="Faisalabad" />
                    <CitiesCard src={Karachi} alt="Karachi City" cityName="Karachi" />
                    <CitiesCard src={Islamabad} alt="Islamabad City" cityName="Islamabad" />
                    <CitiesCard src={Lahore} alt="Lahore City" cityName="Lahore" />
                    <CitiesCard src={Faisalabad} alt="Faisalabad City" cityName="Faisalabad" />
                    <CitiesCard src={Karachi} alt="Karachi City" cityName="Karachi" />
                    <CitiesCard src={Islamabad} alt="Islamabad City" cityName="Islamabad" />
                    <CitiesCard src={Lahore} alt="Lahore City" cityName="Lahore" />
                    <CitiesCard src={Faisalabad} alt="Faisalabad City" cityName="Faisalabad" />
                </div>
            </div>



            <div className="bg-white py-8">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
                    Take Your Office out for Lunch
                </h1>
            </div>

            <div className="relative w-full h-64 md:h-96 lg:h-[500px]">
                <Image
                    src={Office}
                    alt="offices"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                />
            </div>
        </>
    );
}

export default Body;
