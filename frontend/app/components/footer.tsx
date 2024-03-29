import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function footer() {
  return (
    <div className='bg-[#18202b] sm:h-[25vh] h-[10rem]  pt-[1rem] w-full text-white  px-[6vw] '>
      <div>
        <div className='flex flex-row space-x-[10%] '>

          <p className='text-xl font-semibold z-10'>Follow us</p>
          <div className='flex flex-row space-x-4 ml-4'>
          <RiInstagramFill size={30} />
          <FaFacebookSquare size={30} />
          <FaLinkedin size={30} />
          </div>
        </div>
        <div className='h-0.5 w-[88vw] my-4 bg-blue-50 opacity-20'></div>
        <p className='text-sm flex justify-end ' >© 2015 - 2024 Upwork® Global Inc.</p>
      </div>
    </div>
  )
}

export default footer
