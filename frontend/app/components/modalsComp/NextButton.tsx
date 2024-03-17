"use client"
import React from 'react'
import { m } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { goToNextPage, goToPrevPage, hireInfosetter, sendHireInfo } from '../../pages/jobNoticeForm/modalReducer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store/RootReducer';
import { FaRegThumbsUp } from "react-icons/fa6";
import Link from 'next/link';


function NextButton() {


    const dispatch = useDispatch()

    const modalPageIndex = useSelector((state: RootState) => state.modalReducer.modalPageIndex)
    const modalDisplayIndex = useSelector((state: RootState) => state.modalReducer.modalDisplayIndex)

    const hireInfo = useSelector((state: RootState) => state.modalReducer.hireInfo)
    const skills = useSelector((state: RootState) => state.freelancerModalsReducer.skills)
  



    const handleBackwards = () => {
        const empty = " " // you will trim it later so does not matter
        if(modalPageIndex === 1){
            dispatch(hireInfosetter({ soru: empty }))
        } if (modalPageIndex === 3) {
            dispatch(hireInfosetter({ chosenCountyToDB: empty }))
        } if (modalPageIndex === 4) {
            dispatch(hireInfosetter({ chosenCountyToDB: empty }))          
        } 
        dispatch(goToPrevPage())
    }

    const postHireInfo = () => {
        console.log("postHireInfo", hireInfo)
        dispatch(sendHireInfo({hireInfo : hireInfo}))
    }


    const postFreelancerInfo = () => {
        const freelancerInfo = {
            hireInfo,
            skills
        }
        console.log("postFreelancerInfo", freelancerInfo)
        dispatch(sendHireInfo({ hireInfo: freelancerInfo }))
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
                        modalPageIndex === 4 ? (
                            (   
                                <Link href="/pages/searchPage">
                                <div className='flex flex-row items-center space-x-2 '>                     
                                        <button onClick={postFreelancerInfo} className="text-lg font-medium tracking-widest" >
                                             TAMAM </button>
                                        <m.div
                                            className="pr-4"
                                            whileHover={{ y: [0, -4, 0, -4, 0], 
                                                transition: { duration: 1 } }}
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
