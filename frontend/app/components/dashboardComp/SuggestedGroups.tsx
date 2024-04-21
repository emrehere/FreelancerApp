import React from 'react'
import Image from 'next/image'
import { FaChevronRight } from "react-icons/fa";

interface FriendReq {
    fullname: string;  
    field: string;     
    image: string;    
}

function SuggestedGroups({ fullname, field, image }: FriendReq) {
    return (
        <div>
            <div className='bg-blue-50 bg-opacity-70 w-44 h-28 my-4 rounded-xl mx-auto flex flex-col 
                 justify-center'>
                <div className='flex items-center space-x-2 pl-2 pr-1'>
                    <div className='flex items-center w-full'>
                        <div className='pr-1'>
                            <p className='text-[14px] font-medium text-gray-600'>{field}</p>
                            <p className='text-[11px] text-gray-500'>114 Members</p>
                        </div>
                        <div className=" flex flex-grow"></div> 
                        <FaChevronRight size={25} className="text-gray-500 p-1 mr-1 bg-white rounded-full" />
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default SuggestedGroups
