"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import { clickedIndividualChatSetter } from '@/app/components/messageBottomSection/BottomMessageReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/RootReducer';
import { IoMdClose } from "react-icons/io";
import { openChatBoxSetter } from '@/app/components/messageBottomSection/BottomMessageReducer';
import  userNameDatas  from '@/app/datas/chatDatas';


function OpennedChatList() {

    const dispatch = useDispatch();

    const [keyLetters, setKeyLetters] = useState<string>("")

    const messageArrayFromRedux = useSelector((state: RootState) => state.BottomMessageReducer.messageStates);

    console.log(messageArrayFromRedux,"haydasdsadfs")
    


    const filteredUserNames = userNameDatas.filter((item) => {
        return item.name.toLowerCase().includes(keyLetters.toLowerCase())
    })

    const clickedIndividualChat = ( item : any ) => {
        
        dispatch(clickedIndividualChatSetter(item));
        console.log("step1")
    }

    return (
        <div>
            <div className='bg-white w-52 h-[20rem] rounded-tl-xl overflow-y-scroll '>
                <div className='fixed '>
                <IoMdClose onClick={() => dispatch(openChatBoxSetter(false))} size={24} className='absolute top-0 left-0 -ml-3 -mt-3 bg-orange-500
                text-white rounded-full p-1 cursor-pointer ' />    
                <div className=' bg-white flex items-center space-x-2 
                 border-gray-300 rounded-tl-xl '>
                    <input onChange={(e) => setKeyLetters(e.target.value)} type="text"
                     className='w-36 h-10 px-2 outline-none rounded-tl-xl' placeholder='Search...' />
                    <FaSearch size={15} />
                </div>
                </div>
                <div className='mt-12 mb-4'> 
                {
                    filteredUserNames?.map((item, index) => {
                        return (
                            <div onClick={() => clickedIndividualChat(item)} key={index} >
                                <div  className='flex cursor-pointer items-center space-x-2 py-2 ml-2'>
                                    <Image className='rounded-full' src={"/kadin.webp"} width={30} height={30} alt="kadin" />
                                    <div  className='flex items-center '>
                                        <p className=' tracking-wide'>{item.name}</p>
                                    </div>

                                </div>
                                {
                                    index < filteredUserNames?.length - 1 && <hr className='border-gray-300
                                border-1 h-1 w-[90%] mx-2' />
                                }
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default OpennedChatList
