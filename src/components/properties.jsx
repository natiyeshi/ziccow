import React from 'react'
import Box from "./box"
import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from "../assets/image (2).png"
import img2 from "../assets/image (3).png"
import img3 from "../assets/image (4).png"

const properties = () => {
  return (
    <div id='properties' className='h-[100vh] max-w-[1700px] mx-auto text-white px-20' style={{background:"#161925"}}>
      <div className='py-5 flex justify-between'>
        <h1 className='text-3xl my-auto'>
          Properties in <span className='text-blue-500'>your area</span> 
        </h1>
        <p className='my-auto text-blue-500 flex gap-3 group duration-200 cursor-pointer'>
          <span>
            View more properties
          </span>
          <FaLongArrowAltRight className='my-auto relative left-0 duration-200  group-hover:left-3' />
        </p>
      </div>

      <div className='mt-12 flex gap-16 overflow-x-scroll '>
          <Box img={img1}/>
          <Box img={img2}/>
          <Box img={img1}/>
          <Box img={img2}/>
      </div>
      
    </div>
  )
}

export default properties
