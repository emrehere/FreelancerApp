import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";

interface Props  {
  fullname: String;
  field: String;
}


function FreelancerCard({ fullname, field }: Props)  {
  return (
    <div>
       <div className='flex flex-col bg-blue-50 p-4 shadow-md shadow-[#18202b]
        rounded-2xl h-[20rem] w-[12rem] mx-3 items-center px-4 space-y-2
        text-gray-800 mb-12'>
            
            <div className='relative'>
                <Image width={100} height={100} className='object-cover rounded-full' src="/freelancer12.webp" alt="kadin" />
            </div>
            <p className='pt-2 font-medium'>{fullname}</p>
            <p className='text-[14px]'>{field}</p>
            <div className='flex items-center space-x-1 text-orange-500'>
                <FaStar />
            <p>5.0(2444)</p>
            </div>

            <p className='text-[12px] mb-2 '>1606 Tekrarlanan Sipariş</p>
            <p></p>
            <button className='border-2  border-gray-600 border-opacity-40
            px-4 py-2 rounded-xl '>Profiline Git</button>
        </div>
    </div>
  )
}

export default FreelancerCard
