import React from 'react'
import img from "../assets/Mask group (2).png"

const difference = () => {
  return (
    <div id='services' className='h-[100vh] max-w-[1700px] mx-auto flex px-32' style={{background: "#F3EFF5"}}>

        <div className='flex flex-col mx-auto my-32 gap-3 w-3/5 '>
            <h4 className='text- text-blue-500 leading-'>What makes us different?</h4>
            <h1 className='text-[53px]  w-10/12' style={{lineHeight:1}}>
                <span className=''>
                    We assist buyers in finding their 
                </span>
                <span className='text-blue-500 ms-2 '>
                    dream homes.
                </span>
            </h1>
            <p className='textsm w-4/5 text-gray-700 mt-5'>
                Our agents will guide you through the entire buying process, from property.
            </p>
        </div>
        <div className='flex m-auto '>
            <img src={img} alt="" className='' />
        </div>
      
    </div>
  )
}

export default difference
