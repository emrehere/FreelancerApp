"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import { openIndividualChatSetter } from '@/app/components/messageBottomSection/BottomMessageReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/RootReducer';

function OpennedChatList() {

    const dispatch = useDispatch();

    const [keyLetters, setKeyLetters] = useState<string>("")

    const userNameDatas = ["Ahmet", "Mehmet", "John", "Alice", "Bob", "Catherine", "David", "Emma", "Frank", "Grace",
        "Harry", "Ivy", "Jack", "Karen", "Leo", "Maria", "Nathan", "Olivia",
        "Peter", "Quincy", "Rachel", "Sophia"]

    const filteredUserNames = userNameDatas.filter((item) => {
        return item.toLowerCase().includes(keyLetters.toLowerCase())
    })

    const openIndividualChat = () => {
        dispatch(openIndividualChatSetter(true))
    }

    return (
        <div>
            <div className='bg-white w-52 h-[20rem] rounded-tl-xl overflow-y-scroll '>
                <div className='fixed '>
                <div className=' bg-white flex items-center space-x-2 
                 border-gray-300 rounded-tl-xl '>
                    <input onChange={(e) => setKeyLetters(e.target.value)} type="text"
                     className='w-36 h-10 px-2 outline-none rounded-tl-xl' placeholder='Search...' />
                    <FaSearch size={15} />
                </div>
                </div>
                {
                    filteredUserNames.map((item, index) => {
                        return (
                            <div onClick={openIndividualChat} key={index} >
                                <div  className='flex cursor-pointer items-center space-x-2 py-2 ml-2'>
                                    <Image className='rounded-full' src={"/kadin.webp"} width={30} height={30} alt="kadin" />
                                    <div  className='flex items-center '>
                                        <p className=' tracking-wide'>{item}</p>
                                    </div>

                                </div>
                                {
                                    index < filteredUserNames.length - 1 && <hr className='border-gray-300
                                border-1 h-1 w-[90%] mx-2' />
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OpennedChatList
