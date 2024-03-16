import React from 'react'
import ServicesCard from './ServicesCard'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function PopularServices() {
    return (
        <div>
            <h1 className='text-2xl font-bold mb-8'>En popüler Hizmetler 🤩</h1>

            <div className='flex flex-row mt-8  items-center w-[70vw] overflow-x-hidden '>
                <div className=' mx-3'>
                    <MdOutlineArrowBackIosNew size={50} className='p-2 text-3xl bg-orange-500
         text-blue-50 rounded-full '/>
                </div>
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
                <div className='absolute right-12'>
                    <MdOutlineArrowForwardIos size={48} className='p-2  text-3xl  bg-orange-500
         text-blue-50 rounded-full'/>
                </div>
            </div>

        </div>
    )
}

export default PopularServices
