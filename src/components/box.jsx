import React from 'react'

import img2 from "../assets/Group.png"
import img3 from "../assets/Group (1).png"
import img4 from "../assets/Group (2).png"
import img5 from "../assets/Group (3).png"

const box = ({img}) => {
  return (
    <div className='bg-rd-300 w-fit shrink-0 rounded-xl overflow-hidden'>
          <div className='rounded-xl'>
            <img src={img} className='cursor-pointer duration-300 hover:scale-105' alt="" />
          </div>
          <div className='flex flex-col'>

            <div className='flex justify-between mt-2'>
              <h1>Modernica Apartment</h1>
              <div className='px-2 text-xs my-auto text-black rounded-xl' style={{background:"#CCE3FC"}}>appartment</div>
            </div>

            <div className='flex mt-2 gap-2 text-gray-400'>
              <img src={img2} alt="" />
              <span className='text-xs my-auto'>2 km away from current location</span>
            </div>

            <div className='flex justify-between'>
              <div className='flex mt-2 gap-2 text-gray-400'>
                <img src={img5} alt="" />
                <span className='text-xs my-auto'>1 Bathroom</span>
              </div>
              <div className='flex mt-2 gap-2 text-gray-400'>
                <img src={img3} className='m-auto' alt="" />
                <span className='text-xs my-auto'>1 Bathroom</span>
              </div>
              <div className='flex mt-2 gap-2 text-gray-400'>
                <img src={img4} alt="" />
                <span className='text-xs my-auto'>1 Bathroom</span>
              </div>

            </div>

          </div>
        </div>
  )
}

export default box
