import React from 'react'
import img1 from  "../assets/solar_shield-check-bold-duotone.svg"
import img2 from "../assets/solar_medal-ribbons-star-bold-duotone.png"

const help = () => {
  return (
    <div className='px-20 h-[100vh] max-w-[1700px] mx-auto flex flex-col'  style={{background: "#F3EFF5"}}>
      <h2 className='text-center text-3xl'>How else can <span className='text-blue-600'>we help?</span> </h2>
      <p className='text-center mt-3 px-32 text-gray-500 mb-5'>
        If you’re looking for a property to buy, sell or rent you can be sure that we will be providing you a better service than any other company with such services. 
      </p>

      <div className='flex justify-between mt-12 gap-7'>
        
      <div className='bg-white w-fit px-5 py-8 rounded-3xl flex flex-col gap-4'>
            <img src={img1} className='m-auto' alt="" />
            <h1 className='text-center text-lg font-semibold'>
                Reliability
            </h1>
            <p className='m-auto w-4/5 text-center text-gray-600'>
                We keep our promises, providing upfront timelines and bringing predictability.
            </p>
        </div>

        <div className='bg-white w-fit px-5 py-8 rounded-3xl flex flex-col gap-4'>
            <img src={img2} className='m-auto' alt="" />
            <h1 className='text-center text-lg font-semibold'>
                Quality First
            </h1>
            <p className='m-auto w-4/5 text-center text-gray-600'>
                All projects are backed by our fantastic support and 100% satisfaction guarantee.
            </p>
        </div>

        <div className='bg-white w-fit px-5 py-8 rounded-3xl flex flex-col gap-4'>
            <img src={img1} className='m-auto' alt="" />
            <h1 className='text-center text-lg font-semibold'>
                Competitive Pricing
            </h1>
            <p className='m-auto w-4/5 text-center text-gray-600'>
                Offering you a very competitive price without compromising on quality.
            </p>
        </div>

       

      </div>
    </div>
  )
}

export default help
