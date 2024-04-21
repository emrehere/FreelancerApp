import React from 'react'
import Image from 'next/image'
import { FaUserFriends } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { LiaHashtagSolid } from "react-icons/lia";
import { AiOutlineTags } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { postOpenSetter } from '../../pages/dashboard/DashboardReducer';
import { RootState } from '../../store/RootReducer';

function OpenPost() {

    const dispatch = useDispatch();

    const closePost = () => {
        dispatch(postOpenSetter(false));
    }

    return (
        <div
            className="flex justify-center items-center"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
                zIndex: 150,
            }}
        >
            <div className='bg-white z-30 h-[26rem] w-[35rem] rounded-xl '>
                <div className='flex justify-end  '>
                    <IoMdClose onClick={closePost} size={35} className='cursor-pointer p-2  bg-red-500
                    rounded-tr-xl rounded-bl-xl text-white ' />
                </div>
                <div className='flex -mt-8 justify-center border-b-2 border-gray-200 mx-4 p-2
                text-gray-600 font-medium tracking-widest text-xl'>
                    <p>Create a post</p>

                </div>

                <div className='p-4'>
                    <div className='flex'>
                        <Image src="/kadin.webp" height={50} width={50} className='rounded-full object-cover' alt="kadin" />
                        <div className='ml-4 ' >
                            <p className='font-medium text-base tracking-widest text-gray-600 ml-1'>Emre Sinan</p>
                            <div className='flex bg-blue-50 rounded-xl py-1 px-2 items-center  '>
                                <FaUserFriends size={15} className='text-gray-500' />
                                <p className='text-sm mx-2'>Friends</p>
                                <FaChevronDown size={15} className='text-gray-500' />
                            </div>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <textarea
                            placeholder="What's on your mind?"
                            className='w-full h-[10rem] outline-none border-gray-200 border-2 
                            resize-none rounded-xl p-2'
                        />
                    </div>
                    <div className='flex border-2 my-1 space-x-2 border-gray-200 p-2 rounded-xl '>
                        <p className='font-medium text-gray-600 tracking-wide '>Add to your post</p>
                        <p className='flex-grow'></p>
                        <FaImages size={25} className='text-green-500 cursor-pointer' />
                        <LiaHashtagSolid size={25} className='text-blue-500 cursor-pointer' />
                        <AiOutlineTags size={25} className='text-yellow-500 cursor-pointer' />
                        <FaLocationDot size={25} className='text-red-500 cursor-pointer' />
                    </div>
                    <button className='bg-blue-500 text-white w-full py-1 rounded-xl
                    font-semibold tracking-widest text-lg mt-4'>Post</button>
                </div>

            </div>

        </div>
    )
}

export default OpenPost
