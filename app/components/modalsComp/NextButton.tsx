import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { goToNextPage, goToPrevPage } from '../../pages/jobNoticeForm/modalReducer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store/RootReducer';


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
                                <motion.div
                                    className="pl-4"
                                    whileHover={{ x: [0, -8, 0, -8, 0], transition: { duration: 1 } }}
                                >
                                    <FaArrowLeftLong size={20} />
                                </motion.div>
                                <button className="text-lg font-medium tracking-widest" > GERI</button>

                            </div>
                        )
                    }
                    <div className='flex-grow'></div>
                    {
                        modalPageIndex !== 5 && (
                            <div onClick={() => dispatch(goToNextPage())} className='flex flex-row items-center space-x-4 '>
                                <button className="text-lg font-medium tracking-widest" > ILERI</button>
                                <motion.div
                                    className="pr-4"
                                    whileHover={{ x: [0, 8, 0, 8, 0], transition: { duration: 1 } }}
                                >
                                    <FaArrowRightLong size={20} />
                                </motion.div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>

    )
}

export default NextButton
