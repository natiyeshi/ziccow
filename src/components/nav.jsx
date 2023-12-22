import React from 'react'
import img from "../assets/Widget 5.svg"

const nav = () => {
  return (
    <div className='sticky top-0 z-30 bg-transparent' >
        <div className='w-3/4 shadow left-0  bg-white h-fit py-6 mx-auto rounded-b-3xl px-12 flex justify-between' >
                <div className=' my-auto flex gap-2 cursor-pointer' onClick={() => location.href = "#home"}>
                    <img src={img} alt="" />
                    <h1 className='font-semibold text-g'>
                        Ziccow General Trading
                    </h1>
                </div>
                <ul className='flex capitalize my-auto gap-7'>
                    <li className='hover:text-blue-500 cursor-pointer text-sm ' onClick={() => location.href = "#home"}>home</li>
                    <li className='hover:text-blue-500 cursor-pointer text-sm ' onClick={() => location.href = "#services"}>services</li>
                    <li className='hover:text-blue-500 cursor-pointer text-sm ' onClick={() => location.href = "#properties"}>properties</li>
                    <li className='hover:text-blue-500 cursor-pointer text-sm ' onClick={() => location.href = "#contactus"}>contact us</li>
                </ul>
            </div>
    </div>
  )
}

export default nav
