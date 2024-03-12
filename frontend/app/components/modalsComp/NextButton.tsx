"use client"
import React from 'react'
import { m } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { goToNextPage, goToPrevPage, hireInfosetter } from '../../pages/jobNoticeForm/modalReducer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store/RootReducer';
import { FaRegThumbsUp } from "react-icons/fa6";
import Link from 'next/link';


function NextButton() {


    const dispatch = useDispatch()

    const modalPageIndex = useSelector((state: RootState) => state.modalReducer.modalPageIndex)
    const modalDisplayIndex = useSelector((state: RootState) => state.modalReducer.modalDisplayIndex)


  



    const handleBackwards = () => {
        if(modalPageIndex === 1){
            dispatch(hireInfosetter({ soru: "deleted" }))
        } else if(modalPageIndex === 2){
            dispatch(hireInfosetter({ title: "deleted", description: "deleted" }))
        }
        dispatch(goToPrevPage())
    }




    return (
        <div className="w-full flex sm:justify-center bg-[#1a1c28]  text-white ">
            <div className="sm:w-[70vw]  flex justify-end ">
                <div className=' px-2 py-4  flex flex-row justify-between sm:w-[70vw] w-[94vw]' >
                    {
                        modalPageIndex !== 0 && (
                            <div onClick={handleBackwards} className='flex flex-row items-center space-x-2 '>
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
                                <div className='flex flex-row items-center space-x-2 '>                     
                                        <button className="text-lg font-medium tracking-widest" > TAMAM </button>
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
