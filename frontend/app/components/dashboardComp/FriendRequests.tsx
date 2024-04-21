import React from 'react'
import Image from 'next/image'
import { FaChevronRight } from "react-icons/fa";

interface FriendReq {
    fullname: string;  
    field: string;     
    image: string;    
}

function FriendRequests({ fullname, field, image }: FriendReq) {
    return (
        <div>
            <div className='bg-blue-50 bg-opacity-70 w-64 h-28 my-4 rounded-xl mx-auto flex flex-col 
                 justify-center'>
                <div className='flex items-center space-x-2 pl-2 pr-1'>
                    <div className='relative'>
                        <Image src={image} height={60} width={60} alt="kadin"
                            className=' rounded-full ' />
                    </div>
                    <div className='flex items-center w-full'>
                        <div className='pr-1'>
                            <p className='text-[13.5px] object-cover'>{fullname}</p>
                            <p className='text-[11px] text-gray-500'>{field}</p>
                        </div>
                        <div className=" flex flex-grow"></div> 
                        <FaChevronRight size={25} className="text-gray-500 p-1 mr-1 bg-white rounded-full" />
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default FriendRequests
