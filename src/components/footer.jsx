import React from 'react'
import { FiTwitter } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

import logo from "../assets/Widget 5.svg"

const footer = () => {
  return (
    <div id='contactus' className='h-[60vh] max-w-[1700px] mx-auto text-white px-20 pt-20' style={{background:"#161925"}}>

            <div className='flex justify-between'>
                
                <div className='w-1/2 flex flex-col gap-3'>
                    <div className='flex gap-3 my-2'>
                        <img src={logo} alt="" />
                        <h3> Ziccow General Trading </h3>
                    </div>
                    <p className='text-sm text-gray-400'>
                        At Ziccow, we understand that every individual has unique needs and preferences when it comes to real estate. That's why we offer a personalized approach to our services, taking the time to listen to your goals and requirements, and working tirelessly to find the perfect property for you.
                    </p>
                </div>

                <div className='flex flex-col gap-3'>
                    <h3>Company</h3>
                    <ul className='text-sm flex flex-col gap-2 text-gray-400'>
                        <li className='hover:text-blue-500 cursor-pointer duration-200' onClick={() => location.href = "#home"}>Home</li>
                        <li className='hover:text-blue-500 cursor-pointer duration-200' onClick={() => location.href = "#services"}>Services</li>
                        <li className='hover:text-blue-500 cursor-pointer duration-200' onClick={() => location.href = "#properties"}>Properties</li>
                        <li className='hover:text-blue-500 cursor-pointer duration-200' onClick={() => location.href = "#contactus"}>Contact us</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-3'>
                    <h3>Legal</h3>
                    <ul className='text-sm flex flex-col gap-2 text-gray-400'>
                        <li className='hover:text-blue-500 cursor-pointer duration-200'>Terms of service</li>
                        <li className='hover:text-blue-500 cursor-pointer duration-200'>Privacy policy</li>
                    </ul>
                </div>

            </div>

            <div className='w-full h-[1px] my-10 bg-gray-400'></div>

            <div className='flex justify-between text-sm text-gray-400'>
             
                    <p className=''>Ziccow General Trading © 2024. All Rights Reserved.</p>
                <div className='flex gap-4'>
                    <FiTwitter  className='text-2xl text-blue-500 cursor-pointer hover:text-white duration-200' />
                    <FaInstagram className='text-2xl text-blue-500 cursor-pointer hover:text-white duration-200' />
                    <CiFacebook className='text-2xl text-blue-500 cursor-pointer hover:text-white duration-200' />
                </div>
            </div>

    </div>
  )
}

export default footer
