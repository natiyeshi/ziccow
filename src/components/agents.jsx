import React from 'react'
import img1 from "../assets/Rectangle 15.png"
import img2 from "../assets/Rectangle 14.png"
import img3 from "../assets/Rectangle 16.png"
import { MdOutlineArrowForwardIos } from "react-icons/md";
const agents = () => {
  return (
    <div className='h-[100vh] flex  px-20 max-w-[1700px] mx-auto '>
      
        <div className='w-2/3 flex p-20 '>
            <div className=''>
                <img src={img2} alt="" className='relative left-[15px] mt-10' />
            </div>
            <div className='flex flex-col '>
                <img src={img1} alt="" className='relative right-[15px]' />
                <img src={img3} alt="" className='relative right-[15px] bottom-[25px]'/>
            </div>
        </div>

        <div className='w-5/12 my-auto mb-12 flex gap-2 flex-col text-left'>
            <h3 className='text-blue-500'>Our Agents</h3>
            <h1 className='text-[40px]  my-2 ' style={{lineHeight: 1 }}>
                <span className='text-blue-500 me-3'>
                    Trusted agents 
                </span>
                <span>
                 in the <br /> real estate business.
                </span>
            </h1>
            <p className='w-4/5 text-gray-500 '>
                Whether you are looking to rent, buy or sell your home, Ziccow's directory of local real estate agents and brokers connects you with professionals who can help meet your needs. Our directory helps you find real estate professionals who specialize in buying, selling, foreclosures, or relocation - among many other options. Alternatively, you could work with a local agent or real estate broker who provides an entire suite of buying and selling services.
            </p>
            <button className='w-fit px-5 bg-blue-500 hover:bg-blue-400 duration-200 py-2 rounded-lg flex justify-center text-white gap-3 mt-2'>
                <p>
                    Join our agents
                </p>
                <div className='border  rounded-lg p-1 my-auto'>
                    <MdOutlineArrowForwardIos />
                </div>

            </button>
        </div>

    </div>
  )
}

export default agents
