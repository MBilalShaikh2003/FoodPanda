import React from 'react'
import mobile from '/public/mobile.png' 
import frame from '/public/frame.png'
import appstore from '/public/appstore1.png'
import googleplay from '/public/googleplay1.png'
import gallery from '/public/gallery.png'
import Image from 'next/image'
const footer = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6 mt-1">
        Put us in your Pocket
      </h1>
      <div className="bg-[#ff2b85] flex flex-col md:flex-row  md:max-h-[300px] ">
  <div className="flex-1 p-4">
    <h1 className="text-[#ffff] font-bold mt-4 text-center md:text-left text-[24px]" >
      Download the food and groceries you love
    </h1>
    <div className="flex flex-col md:flex-row items-center md:items-start mt-8">
      <Image
        src={frame}
        alt="QR Code"
        width={100}
        height={100}
        className="mr-0 md:mr-4 mb-4 md:mb-0"
      />
      <p className="text-[#ffff] text-center md:text-left">
        It's all at your fingertips – the restaurants and <br /> shops you love.
        Find the right food and <br /> groceries to suit your mood, and make
        the <br /> first bite last. Go ahead, download us.
      </p>
    </div>
    <div className="flex justify-center md:justify-start mt-4 space-x-4">
      <a
        href="https://apps.apple.com/us/app/foodpanda-food-groceries/id758103884"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={appstore}
          alt="App Store"
          width={150}
          height={50}
          className="object-contain"
        />
      </a>
      <a
        href="https://play.google.com/store/search?q=foodpanda&c=apps"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={googleplay}
          alt="Google Play"
          width={150}
          height={50}
          className="object-contain"
        />
      </a>
      <a
        href="https://appgallery.huawei.com/app/C101812091"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={gallery}
          alt="Gallery"
          width={150}
          height={50}
          className="object-contain"
        />
      </a>
    </div>
  </div>
  <div className="flex-1 p-4 flex md:relative md:h-[390px] md:bottom-10 justify-center items-center">
    <Image
      src={mobile}
      alt="Mobile Image"
      className="object-contain md:absolute md:max-h-full max-w-full"
    />
  </div>
</div>



    </>
  )
}

export default footer
