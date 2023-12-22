import React from 'react'
import logo from "../assets/unsplash_B0aCvAVSX8E.png"
import { CiSearch } from "react-icons/ci";
import img2 from "../assets/a.svg"
import "../style/header.css"

const index = () => {
  return (
      <div id='home' className='h-[100vh] w-full  bg-red-300 relative px-12 flex flex-col max-w-[1700px] mx-auto' style={{background:"#CCE3FC"}}>
        <img src={logo} alt="" className='absolute bottom-0 right-0 w-6/12' />
        <div className='h-fit bg--300 flex flex-col py-16 max-lg:w-2/3 max-md:w-full w-1/2 ps-20'>
            <h2 className='text-[53px] font-semibold flex flex-col gap-0  fadeIn' >
               <span className=''>
                    Find a home 
               </span>
               <span className='leading-3'>
                    that suits you.
               </span>
            </h2>
            <p className='mt-12 w-8/12 ms-0 text-gray-700 fadeIn'>
                Want to find a suitable home? We are ready to help you find one that suits your lifestyle and needs.
            </p>
            <div className='flex justify-between w-8/12 max-lg:w-full mt-10'>
                <div className='flex flex-col gap-1'>
                    <h4 className='text-xl'>12 years <span className='text-xl text-blue-500'>+</span> </h4>
                    <p className='text-xs text-gray-600'>Experience</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h4 className='text-xl'>1200 <span className='text-xl text-blue-500'>+</span> </h4>
                    <p className='text-xs text-gray-600'>Listed Properties</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h4 className='text-xl'>220 <span className='text-xl text-blue-500'>+</span> </h4>
                    <p className='text-xs text-gray-600'>Happy Customers</p>
                </div>
                
            </div>
        </div>
        <div className='w-3/4 mx-auto z-10 mb bg-white py-2 flex justify-between rounded-2xl px-2'>
            <div className='flex gap-2 px-2'>
                <img src={img2} className='w-[25px]' alt="" />
                <p className='my-auto'>Enter a location, property type or budget</p>
            </div>
            <button className='flex gap-2 bg-blue-600 text-white px-6 justify-center hover:bg-blue-500 py-3 rounded-lg'>
                <CiSearch className='my-auto text-xl'/>
                <span className=''>Search</span>
            </button>
        </div>
        
    </div>
  )
}

export default index
