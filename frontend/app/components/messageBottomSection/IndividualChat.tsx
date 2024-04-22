import React from 'react'
import Image from 'next/image'
import { VscChromeMinimize } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { LuFiles } from "react-icons/lu";
import { IoIosImages } from "react-icons/io";
import { FaRegSmileBeam } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";

function IndividualChat() {
  return (
    <div>
        <div className='bg-gradient-to-tl from-orange-50 to-blue-50  w-60
         shadow-lg shadow-gray-500 h-80 rounded-t-xl '>
            <div className='h-12  flex border-gray-500 border-opacity-10
            rounded-t-xl border-2 w-60 '>
            <div className='flex items-center space-x-2 '>
                <div className='relative'>
                <Image src={"/kadin.webp"} width={30} height={30} alt="kadin"
                className='rounded-full object-cover' />
                </div>
                <div>
                <p className='text-sm font-medium'>Mehmet Yıldız Hakan </p>
                <p className='text-xs text-gray-500'>Online</p>
                </div>
            </div>
            <div className='flex-grow'></div>
            <div className='flex items-center '>
                <VscChromeMinimize size={22} />
                <IoMdClose size={22} />
            </div>
            </div>
            <div>
                <div className='flex flex-col space-y-2 mt-8 items-center space-x-2 '>
                    <div className='relative'>
                    <Image src={"/kadin.webp"} width={50} height={50} alt="kadin"
                    className='rounded-full object-cover' />
                    </div>
                    <p className='text-[14px] font-medium'>Mehmet Yıldız Hakan</p>
                </div>
            </div>
            <div>
                <div>
                    <LuFiles size={22} />
                    <IoIosImages size={22} />
                    <FaRegSmileBeam size={22} />
                    <MdKeyboardVoice size={22} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default IndividualChat
