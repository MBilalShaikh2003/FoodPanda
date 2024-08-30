import React from 'react'
import mobile from '/public/mobile.png'
import frame from '/public/frame.png'
import appstore from '/public/appstore1.png'
import googleplay from '/public/googleplay1.png'
import gallery from '/public/gallery.png'
import foodpandalogo from '/public/logo.png'
import hero from '/public/hero.jpg'
import Image from 'next/image'
const footer = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6 mt-4">
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

      <h1 className="text-[black] font-bold mt-8 text-center md:text-left text-[29px]  ml-8" >
        Order food and groceries online from the best restaurants and shops on <br /> foodpanda
      </h1>
      <p className="text-[#333333] text-center md:text-left ml-8 mt-3">
        Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then <br /> foodpanda Pakistan is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your <br /> every day easier.
      </p>

      <h1 className="text-[black] font-bold mt-8 text-center md:text-left text-[29px]  ml-8" >
        What's new ? </h1>
      <p className="text-[#333333] text-center md:text-left ml-8 mt-3">
        <span className="text-pink-500">✓</span> Wide variety of restaurants and shops, an abundance of cuisines & products.<br />
        <span className="text-pink-500">✓</span> High quality delivery service.<br />
        <span className="text-pink-500">✓</span> Live chat feature to give App users instant help when they need it.<br />
        <span className="text-pink-500">✓</span> NEW: foodpanda grocery delivery! Discover the best shops, pharmacies, bakeries, and more near you.
      </p>

      <hr class="border-t border-gray-300 my-4" />

      <h1 className="text-[black] font-bold mt-8 text-center md:text-left text-[29px]  ml-8" >
        Frequently asked questions </h1>

      <h1 className="text-[black] font-bold mt-8 text-center md:text-left text-[20px]  ml-8" >
        How can I get food panda delivery ? </h1>
      <p className="text-[#333333] text-center md:text-left ml-8 mt-3">
        To get foodpanda delivery, simply locate the restaurants and shops near you by typing in your address, browse through a variety of restaurants and cuisines, <br /> check menus and prices, choose your dishes and add them to the basket. Now you only need to checkout and make the payment. Soon your delicious food will <br /> arrive at your doorstep!
      </p>

      <h1 className="text-[black] font-bold mt-8 text-center md:text-left text-[20px]  ml-8" >
        Which takeout restaurant open near out me ? </h1>

      <p className="text-[#333333] text-center md:text-left ml-8 mt-3">
        You can check which takeout restaurants are open now near you by simply typing your address in the location bar on foodpanda and pressing search. You will  <br />see all the available restaurants and shops that deliver to your area.
      </p>

      <h1 className="text-[black] font-bold mt-8 text-center md:text-left text-[20px]  ml-8" >
        Does food panda delivers 24 hours ? </h1>

      <p className="text-[#333333] text-center md:text-left ml-8 mt-3">
        |
        Yes, foodpanda in Pakistan delivers 24 hours. However, many restaurants may be unavailable for a late-night delivery. Please check which places in Pakistan <br /> deliver to you within 24 hours by using your address. You can also order groceries 24 hours a day via pandamart.   </p>


      <h1 className="text-[black] font-bold mt-8 text-center md:text-left text-[20px]  ml-8" >
        Can you pay cash for food panda ? </h1>

      <p className="text-[#333333] text-center md:text-left ml-8 mt-3">
        |
        Yes, you can pay cash on delivery for foodpanda in Pakistan.
      </p>


      <h1 className="text-[black] font-bold mt-8 text-center md:text-left text-[20px]  ml-8" >
        How can I pay Online ? </h1>

      <p className="text-[#333333] text-center md:text-left ml-8 mt-3">
        You can pay online while ordering at foodpanda Pakistan by using a credit or debit card or PayPal.
      </p>


      <h1 className="text-[black] font-bold mt-8 text-center md:text-left text-[20px]  ml-8" >
        Can I order food food for some one else ? </h1>

      <p className="text-[#333333] text-center md:text-left ml-8 mt-3">
        |
        Yes, foodpanda Pakistan allows you to place an order for someone else. During checkout, just update the name and delivery address of the person you're <br /> ordering for. Please keep in mind that if the delivery details are not correct and the order cannot be delivered, we won't be able to process a refund.
      </p>


      <h1 className="text-[black] font-bold mt-8 text-center md:text-left text-[20px]  ml-8" >
        What restaurants can you order from food panda ? </h1>

      <p className="text-[#333333] text-center md:text-left ml-8 mt-3">
        There are hundreds of restaurants on foodpanda Pakistan that let you order online. For example,
        <a href="https://www.kfcpakistan.com/" target='_blank' className="text-pink-500 hover:underline">KFC</a>,
        <a href="https://www.mcdonalds.com.pk/" target='_blank' className="text-pink-500 hover:underline">McDonald's</a>,
        <a href="https://www.pizzahut.com.pk/" target='_blank' className="text-pink-500 hover:underline">Pizza Hut</a>,
        <a href="https://www.optp.biz/" target='_blank' className="text-pink-500 hover:underline">OPTP</a>,
        <a href="https://www.hardeespakistan.com/" target='_blank' className="text-pink-500 hover:underline">Hardee's</a>,
        <a href="https://www.dominos.com.pk/" target='_blank' className="text-pink-500 hover:underline">Domino's</a>,<br />
        <a href="https://www.kababjees.com.pk/" target='_blank' className="text-pink-500 hover:underline">Kababjees</a>
        and many-many more! In order to check all the restaurants near you that deliver, just type in your address and discover all the available places.
      </p>


      <h1 className="text-[black] font-bold mt-8 text-center md:text-left text-[20px]  ml-8" >
        Can I order food food for some one else ? </h1>

      <p className="text-[#333333] text-center md:text-left ml-8 mt-3">
        |
        Yes, foodpanda Pakistan allows you to place an order for someone else. During checkout, just update the name and delivery address of the person you're <br /> ordering for. Please keep in mind that if the delivery details are not correct and the order cannot be delivered, we won't be able to process a refund.
      </p>

      <h1 className="text-[black] font-bold mt-8 text-center md:text-left text-[20px]  ml-8" >
        What is the difference between delivery and pickup ? </h1>

      <p className="text-[#333333] text-center md:text-left ml-8 mt-3">
        |
        If you choose delivery, a foodpanda rider will collect your order from the restaurant and take it to your chosen delivery address. If you choose Pick-Up, you can <br /> takeaway your food directly from the restaurant for extra savings – and to jump to the front of the queue. Pick-Up orders are available for restaurants only.</p>

      <h1 className="text-[black] font-bold mt-8 text-center md:text-left text-[20px] mb-11  ml-8" >
        Order food and groceries online with foodpanda now and enjoy a great dining experience!
      </h1>



      <hr class="border-t border-gray-300 my-4 mt-10" />
      <p className="text-center">
        <a href="https://www.foodpanda.la/" target="_blank" className="font-bold text-black hover:underline">Laos</a> |
        <a href="https://www.foodpanda.com.kh/" target="_blank" className="font-bold text-black hover:underline">Cambodia</a> |
        <a href="https://www.foodpanda.my/" target="_blank" className="font-bold text-black hover:underline">Myanmar</a> |
        <a href="https://www.foodpanda.com.kh/" target="_blank" className="font-bold text-black hover:underline">Thailand</a> |
        <a href="https://www.foodpanda.com.tw/" target="_blank" className="font-bold text-black hover:underline">Hong Kong</a> |
        <a href="https://www.foodpanda.com.tw/" target="_blank" className="font-bold text-black hover:underline">Taiwan</a> |
        <a href="https://www.foodpanda.my/" target="_blank" className="font-bold text-black hover:underline">Malaysia</a> |
        <a href="https://www.foodpanda.ph/" target="_blank" className="font-bold text-black hover:underline">Philippines</a> |
        <a href="https://www.foodpanda.sg/" target="_blank" className="font-bold text-black hover:underline">Singapore</a> |
        <a href="https://www.foodpanda.com.bd/" target="_blank" className="font-bold text-black hover:underline">Bangladesh</a>
      </p>
      <hr class="border-t border-gray-300 my-4 " />

      <div className='flex flex-row justify-between ml-4 mr-8 mt-3'>
        <div><p className='text-[#333333]'>&copy; food panda</p></div>
        <div>
          <a href="link-to-press" class="underline">
            <p class="mt-2">Press</p>
          </a>
          <a href="link-to-pandapay-terms" class="underline">
            <p class="mt-2">Pandapay Terms and Conditions</p>
          </a>
          <a href="link-to-security" class="underline">
            <p class="mt-2">Security</p>
          </a>
          <a href="link-to-careers" class="underline">
            <p class="mt-2">Careers</p>
          </a>
          <a href="link-to-cashback-terms" class="underline">
            <p class="mt-2">Cashback Terms and Conditions</p>
          </a>
          <a href="link-to-partner-with-us" class="underline">
            <p class="mt-2">Partner with Us</p>
          </a>
          <a href="link-to-all-cities" class="underline">
            <p class="mt-2">All Cities</p>
          </a>
          <a href="link-to-pandapro" class="underline">
            <p class="mt-2">Pandapro - Monthly Subscription Programme</p>
          </a>
          <a href="link-to-ramzan-deals" class="underline">
            <p class="mt-2">Ramzan Deals</p>
          </a>
          <a href="link-to-lahore-areas" class="underline">
            <p class="mt-2">Areas Delivered in Lahore</p>
          </a>
        </div>

        <div>
          <a href="link-to-press" class="underline">
            <p class="mt-2">Press</p>
          </a>
          <a href="link-to-pandapay-terms" class="underline">
            <p class="mt-2">Pandapay Terms and Conditions</p>
          </a>
          <a href="link-to-security" class="underline">
            <p class="mt-2">Security</p>
          </a>
          <a href="link-to-careers" class="underline">
            <p class="mt-2">Careers</p>
          </a>
          <a href="link-to-cashback-terms" class="underline">
            <p class="mt-2">Cashback Terms and Conditions</p>
          </a>
          <a href="link-to-partner-with-us" class="underline">
            <p class="mt-2">Partner with Us</p>
          </a>
          <a href="link-to-all-cities" class="underline">
            <p class="mt-2">All Cities</p>
          </a>
          <a href="link-to-pandapro" class="underline">
            <p class="mt-2">Pandapro - Monthly Subscription Programme</p>
          </a>
          <a href="link-to-ramzan-deals" class="underline">
            <p class="mt-2">Ramzan Deals</p>
          </a>
          <a href="link-to-lahore-areas" class="underline">
            <p class="mt-2">Areas Delivered in Lahore</p>
          </a>
        </div>


        <div>
          <a href="link-to-press" class="underline">
            <p class="mt-2">Press</p>
          </a>
          <a href="link-to-pandapay-terms" class="underline">
            <p class="mt-2">Pandapay Terms and Conditions</p>
          </a>
          <a href="link-to-security" class="underline">
            <p class="mt-2">Security</p>
          </a>
          <a href="link-to-careers" class="underline">
            <p class="mt-2">Careers</p>
          </a>
          <a href="link-to-cashback-terms" class="underline">
            <p class="mt-2">Cashback Terms and Conditions</p>
          </a>
          <a href="link-to-partner-with-us" class="underline">
            <p class="mt-2">Partner with Us</p>
          </a>
          <a href="link-to-all-cities" class="underline">
            <p class="mt-2">All Cities</p>
          </a>
          <a href="link-to-pandapro" class="underline">
            <p class="mt-2">Pandapro - Monthly Subscription Programme</p>
          </a>
          <a href="link-to-ramzan-deals" class="underline">
            <p class="mt-2">Ramzan Deals</p>
          </a>
          <a href="link-to-lahore-areas" class="underline">
            <p class="mt-2">Areas Delivered in Lahore</p>
          </a>
        </div>

      </div>

      <hr class="border-t border-gray-300 my-4" />

      <div className='flex justify-between items-center p-4'>
  
  <div className="flex items-center space-x-4">
    <div className="flex items-center">
      <Image src={foodpandalogo} alt="Foodpanda Logo" className="h-10 w-10" />
      <span className="text-[#ff2b85] text-[24px]">foodpanda</span>
    </div>
    <div>
      <p>|</p>
    </div>
    <div className="flex items-center">
      <Image src={hero} alt="Hero Logo" className="h-36 w-24" />
    </div>
  </div>
  
  
  <div className='flex items-center gap-4'>
    <div>fa</div>
    <div>twitter</div>
  </div>
</div>

    </>
  )
}

export default footer
