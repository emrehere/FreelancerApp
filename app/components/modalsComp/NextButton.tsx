"use client"
import React from 'react'
import { m } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { goToNextPage, goToPrevPage } from '../../pages/jobNoticeForm/modalReducer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store/RootReducer';
import { FaRegThumbsUp } from "react-icons/fa6";
import Link from 'next/link';


function NextButton() {


    const dispatch = useDispatch()

    const modalPageIndex = useSelector((state: RootState) => state.modalReducer.modalPageIndex)






    return (
        <div className="w-full flex justify-center bg-[#1a1c28]  text-white ">
            <div className="w-[70vw]  flex justify-end ">
                <div className=' px-4 py-4  flex flex-row justify-between w-[70vw]' >
                    {
                        modalPageIndex !== 0 && (
                            <div onClick={() => dispatch(goToPrevPage())} className='flex flex-row items-center space-x-4 '>
                                <m.div
                                    className="pl-4"
                                    whileHover={{ x: [0, -8, 0, -8, 0], transition: { duration: 1 } }}
                                >
                                    <FaArrowLeftLong size={20} />
                                </m.div>
                                <button className="text-lg font-medium tracking-widest" > GERI</button>

                            </div>
                        )
                    }
                    <div className='flex-grow'></div>
                    {
                        modalPageIndex === 7 ? (
                            (   
                                <Link href="/pages/searchPage">
                                <div className='flex flex-row items-center space-x-4 '>                     
                                        <button className="text-lg font-medium tracking-widest" > TAMAMLA </button>
                                        <m.div
                                            className="pr-4"
                                            whileHover={{ y: [0, -4, 0, -4, 0], transition: { duration: 1 } }}
                                        >
                                            <FaRegThumbsUp size={20} />
                                        </m.div>                                
                                </div>
                                </Link>
                            )
                        ) : (
                            (
                                <div onClick={() => dispatch(goToNextPage())} className='flex flex-row items-center space-x-4 '>
                                    <button className="text-lg font-medium tracking-widest" > ILERI</button>
                                    <m.div
                                        className="pr-4"
                                        whileHover={{ x: [0, 8, 0, 8, 0], transition: { duration: 1 } }}
                                    >
                                        <FaArrowRightLong size={20} />
                                    </m.div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>

        </div>

    )
}

export default NextButton
