import React from 'react'
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { BiCategoryAlt } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import { PiNotificationFill } from "react-icons/pi";
import { RiFileHistoryLine } from "react-icons/ri";

function DashboardSidebar() {
    return (
        <div className='overflow-y-scroll h-[80vh] w-56 pb-24  bg-white pt-8 text-gray-600 font-medium 
        tracking-wider'>
            <div className='flex flex-col  space-y-2 '>
                <div className='ml-8 text-xl font-thin tracking-widest mb-2'>
                    <p>Profesyonel</p>
                </div>
                <div className='flex flex-row space-x-4 ml-8 items-center '>
                    <FaHandHoldingHeart size={30} className='bg-blue-700 text-white rounded-full p-1' />
                    <p>Sizin Icin</p>
                </div>
                <div className='flex flex-row space-x-4 ml-8 items-center '>
                    <FaUserFriends size={30} className='bg-orange-500 text-white rounded-full p-1' />
                    <p>Arkadaslar</p>
                </div>
                <div className='flex flex-row space-x-4 ml-8 items-center '>
                    <GiWorld size={30} className='bg-yellow-500 text-white rounded-full p-1' />
                    <p>Kesfet</p>
                </div>
                <div className='flex flex-row space-x-4 ml-8 items-center '>
                    <BiCategoryAlt size={30} className='bg-red-500 text-white rounded-full p-1' />
                    <p>Kategoriler</p>
                </div>
            </div>
            <div className='flex flex-col  space-y-2 '>
                <div className='ml-8 mb-2 mt-10 tracking-widest text-xl font-thin '>
                    <p>Profesyonel</p>
                </div>
                <div className='flex flex-row space-x-4 ml-8 items-center '>
                    <GrUserWorker size={30} className='bg-green-500 text-white rounded-full p-1' />
                    <p>Bana Ozel</p>
                </div>
                <div className='flex flex-row space-x-4 ml-8 items-center '>
                    <PiNotificationFill size={30} className='bg-pink-500 text-white rounded-full p-1' />
                    <p>Ilanlarim</p>
                </div>
                <div className='flex flex-row space-x-4 ml-8 items-center '>
                    <RiFileHistoryLine size={30} className='bg-purple-500 text-white rounded-full p-1' />
                    <p>Is Gecmisim</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardSidebar
