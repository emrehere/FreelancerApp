"use client"
import React, { useState } from 'react'
import ServicesCard from './ServicesCard'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import ModalDatas from '@/app/datas/modalDatas';
import { goToNextPage } from '@/app/pages/jobNoticeForm/modalReducer';

function PopularServices() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextService = () => {
        setCurrentIndex(currentIndex + 1)
    }

    const goToPrevService = () => {
        setCurrentIndex(currentIndex - 1)
    }

    const tryme  = (index : any) => {
            console.log("tryme", index)
    }

    return (
        <div>
            <h1 className='text-2xl font-bold mb-8'>En popüler Hizmetler 🤩</h1>

            <div className='flex flex-row mt-8  items-center w-[70vw] overflow-x-hidden '>
                <div className=' mx-3'>
                    {
                        currentIndex !== 0 && <MdOutlineArrowBackIosNew onClick={goToPrevService} size={50} className='p-2 text-3xl bg-orange-500
                        text-blue-50 rounded-full '/>
                    }
                </div>
                {
                    ModalDatas.map((data, index) =>
                        <div onClick={() => tryme(index)} className={currentIndex === index || currentIndex + 1  === index || currentIndex + 2  === index || currentIndex + 3 === index   ? 'flex' : 'hidden' }>
                            <ServicesCard key={data.modalPageIndex} serviceName={data.unvan} />
                        </div>)
                }
                <div className='absolute right-12'>
                    {
                        currentIndex !== ModalDatas.length - 4 && <MdOutlineArrowForwardIos onClick={goToNextService} size={48} className='p-2  text-3xl  bg-orange-500
                        text-blue-50 rounded-full'/>
                    }
                </div>
            </div>

        </div>
    )
}

export default PopularServices
