"use client"
import React from 'react'
import { IoSearch } from "react-icons/io5";
import NextButton from "@/app/components/modalsComp/NextButton";
import ModalTopElement from './ModalTopElement';
import modalDatas from "@/app/datas/modalDatas";
import { useEffect, useState } from "react";
import { displayIndexFunc, goToNextPage, hireInfosetter } from '@/app/pages/jobNoticeForm/modalReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/RootReducer';
import DirectToFreelancer from './DirectToFreelancer';



interface filteredDatas {
    unvan: string
    soru: string
    secenekler: string[]
    modalPageIndex: string
}

function Page1({forFreelancer} : {forFreelancer : boolean}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDatas, setFilteredDatas] = useState<filteredDatas[]>([]);
    const dispatch = useDispatch();
    const modalPageIndex = useSelector((state: RootState) => state.modalReducer.modalPageIndex)
    const hireInfo = useSelector((state: RootState) => state.modalReducer.hireInfo)


    const slicedDatas = modalDatas.slice(0, 6)


    useEffect(() => {
        function filterBySearchTerm() {
            const filtered: filteredDatas[] = modalDatas
                .filter((data) =>
                    data.unvan.toLowerCase().includes(searchTerm.toLowerCase())
                )
            setFilteredDatas(filtered);
        }
        filterBySearchTerm();
    }, [searchTerm])



    const handleIndexClick = ( item :any) => {
        dispatch(hireInfosetter({ unvan: item.unvan }))
        console.log(item.modalPageIndex)
        dispatch(goToNextPage())
        dispatch(displayIndexFunc( item.modalPageIndex ))

    }

    console.log("searchTerm",searchTerm)

    return (
        <div>
            <ModalTopElement />
            <DirectToFreelancer forFreelancer={forFreelancer} />
            <div className={`bg-white  overflow-hidden sm:w-[70vw] w-[90vw] mx-auto
             sm:h-[75vh] h-[30rem] min-h-[25rem] rounded-b-2xl flex flex-col items-center`}>
                <h2 className="text-2xl font-medium text-[#1a1c28] pt-2 ml-4 " >
                    {
                        forFreelancer ? ' Vereceginiz Hizmet' : 'Hangi hizmete ihtiyacın var?'
                    }
                    </h2>
                <div className="flex flex-col w-full  ">
                    <div className="flex flex-row w-full m-2 items-center p-2 pr-4">
                        <IoSearch className="absolute text-gray-400 ml-4" size={20} />
                        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                            className="outline-none sm:text-sm text-md w-full sm:h-10 h-12 px-8
                         font-medium m-2 text-gray-600 border-2 border-opacity-50
                          border-gray-400 " placeholder="Hizmete ihtiyacınız varsa buraya yazın" />
                    </div>
                    {
                        searchTerm.length > 0 && filteredDatas.length > 0 && (
                            <div className="max-h-[200px] overflow-y-auto">
                                <ul>
                                    {filteredDatas.map((item, index) => (
                                        <li
                                            onClick={() => handleIndexClick(item)}
                                            key={item.modalPageIndex}
                                            className="hover:bg-gray-100 w-full p-2 sm:text-sm 
                                            text-md cursor-pointer
                                         flex justify-center tracking-wide text-gray-600"
                                        >
                                            {item.unvan}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                </div>



                {
                    filteredDatas.length === 0 || searchTerm.length > 0 || (
                        <div className="w-full flex flex-col items-center">
                            <h3 className="sm:text-lg text-xl font-medium text-gray-500  mb-2">POPÜLER HİZMETLER</h3>

                            {
                                slicedDatas.map((item: any) => {
                                    return (
                                        <p key={item.modalPageIndex}
                                            onClick={() => handleIndexClick(item)}
                                            className="hover:bg-gray-100 w-full cursor-pointer p-1 text-md sm:text-sm flex 
                                         justify-center tracking-wide text-gray-600">{item.unvan}</p>

                                    )
                                }
                                )
                            }
                        </div>
                    )
                }
                <div className="flex flex-grow"></div>
                <NextButton />
            </div>
        </div>
    )
}

export default Page1
