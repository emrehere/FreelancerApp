import React from 'react'
import NextButton from "@/app/components/modalsComp/NextButton";
import { FaRunning } from "react-icons/fa";
import ModalDatas from '@/app/datas/modalDatas';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store/RootReducer';
import { goToNextPage, goToPrevPage } from '@/app/pages/jobNoticeForm/modalReducer';

function Page2() {


    const displayIndex = useSelector((state: RootState) => state.modalReducer.modalDisplayIndex)

    const dispatch = useDispatch()

    return (
        <div>
            <div className="text-white w-[70vw] text-4xl tracking-wider font-extrabold flex  items-center space-x-2 mb-2">
                <div className='mx-auto flex  items-center '>
                    <FaRunning size={80} />
                    <h1>Ustam Kosuyor</h1>
                </div>
            </div>
            <div className="bg-white overflow-hidden w-[70vw] h-[60vh] min-h-[20rem] rounded-2xl flex flex-col items-center  ">



                <div>
                    <p className='text-2xl font-medium text-gray-700 pt-4 pb-12'>{ModalDatas[displayIndex].soru}</p>
                    <div className='grid grid-cols-2 '>
                        {
                            ModalDatas[displayIndex].secenekler.map((data, index) =>
                                <ul className='border-2 border-opacity-30 hover:bg-purple-100 hover:bg-opacity-50
                                 m-2 col-span-1 border-gray-300 p-2 cursor-pointer' key={index}>
                                    <li onClick={ () => dispatch(goToNextPage()) }>{data}</li>
                                    </ul>)
                        }
                    </div>

                </div>


                <div className="flex flex-grow"></div>
                <NextButton />
            </div>
        </div>
    )
}

export default Page2
