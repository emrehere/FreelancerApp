import React from 'react'
import FreelancerCard from './FreelancerCard'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function LikedFreelancers() {
  return (
    <div>
        <h1 className='text-2xl font-bold'>En Sevilen Freelancerlar 🥰</h1>
       
       <div className='flex flex-row mt-8  items-center w-[70vw] overflow-x-hidden '>
       <div className=' mx-3'>
        <MdOutlineArrowBackIosNew size={50}  className='p-2 text-3xl bg-orange-500
         text-blue-50 rounded-full '/>
         </div>
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <div className='absolute right-12'>
        <MdOutlineArrowForwardIos size={48} className='p-2  text-3xl  bg-orange-500
         text-blue-50 rounded-full'/>
        </div>
       </div>
       
       
    </div>
  )
}

export default LikedFreelancers


