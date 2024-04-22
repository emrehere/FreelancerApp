"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { VscChromeMinimize } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { LuFiles } from "react-icons/lu";
import { IoIosImages } from "react-icons/io";
import { FaRegSmileBeam } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { openIndividualChatSetter } from '@/app/components/messageBottomSection/BottomMessageReducer';
import { useDispatch, useSelector } from 'react-redux';


function IndividualChat() {
    const [content, setContent] = useState<string>("")
    const textareaRef= useRef<HTMLTextAreaElement>(null);

    const dispatch = useDispatch();

    const adjustHeight = () => {
        if(textareaRef.current && textareaRef.current.scrollHeight < 48) {
            textareaRef.current.style.marginTop = "8px";
            textareaRef.current.style.height = "32px";
            console.log("must work")
        }
        else if(textareaRef.current && textareaRef.current.scrollHeight < 140  ) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            textareaRef.current.style.marginBottom = `${textareaRef.current.scrollHeight-28}px`;
            textareaRef.current.style.marginTop = "8px";
        }
        
    }

    const handleChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent( e.target.value)
        adjustHeight()
    }

    useEffect(() => {
        adjustHeight()
    },[])

    useEffect(() => {
        console.log("textareaRef.current.scrollHeight", textareaRef.current?.scrollHeight)
    },[content])

    return (
        <div>
            <div className='bg-gradient-to-tl from-orange-50 to-blue-50  w-[18rem]
         shadow-lg shadow-gray-500 h-80 rounded-t-xl flex flex-col ml-1'>
                <div className='h-12  flex border-gray-500 border-opacity-10
            rounded-t-xl border-2 w-[18rem] '>
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
                        <VscChromeMinimize size={20} className='text-gray-500 pl-1  ' />
                        <IoMdClose onClick={ () => dispatch(openIndividualChatSetter(false))}
                         size={25} className='text-gray-500 px-1 cursor-pointer' />
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
                <div className='flex-grow'></div>
                <div className='border-t-2 border-gray-500 border-opacity-10 h-12
                 flex items-center '>

                    <LuFiles size={27} className='ml-1 text-blue-500 ' />
                    <IoIosImages size={27} className='mx-2 text-red-500 ' />
                    <textarea
                        className="w-full h-8 resize-none py-1  px-2  outline-none border-2 border-orange-500 
          border-opacity-20 rounded-[10px] text-sm"
                        onChange={handleChange}
                        ref={textareaRef}
                        value={content}
                        placeholder="Type here..."
                    />
                    <FaRegSmileBeam className='mx-1 text-orange-500' size={30} />
                    <MdKeyboardVoice size={27} className='mx-1 text-green-500 ' />

                </div>
            </div>
        </div>
    )
}

export default IndividualChat
