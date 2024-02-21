import React from 'react'
import { IoSearch } from "react-icons/io5";
import NextButton from "@/app/components/modalsComp/NextButton";
import { FaRunning } from "react-icons/fa";
import modalDatas from "@/app/datas/modalDatas";
import { useEffect, useState } from "react";
import { displayIndexFunc, goToNextPage } from '@/app/pages/jobNoticeForm/modalReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/RootReducer';



interface filteredDatas {
    unvan: string
    soru: string
    secenekler: string
    modalPageIndex: string
}

function page1() {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDatas, setFilteredDatas] = useState<filteredDatas[]>([]);
    const dispatch = useDispatch();
    const modalPageIndex = useSelector((state: RootState) => state.modalReducer.modalPageIndex)
    

    const slicedDatas = modalDatas.slice(0, 6)

    function filterBySearchTerm  () {
        const filtered = modalDatas.filter((data) =>
            data.unvan.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDatas(filtered);
    }

    useEffect(() => {
        filterBySearchTerm();
    }, [searchTerm])


    const handleIndexClick = (displayId: string) => {
      dispatch(goToNextPage())
      dispatch(displayIndexFunc(displayId))
              
    }

    

  return (
    <div>
      <div className="text-white w-[70vw]  text-4xl tracking-wider font-extrabold flex flex-row items-center space-x-2 mb-2">
               <div className='mx-auto flex items-center '>
                <FaRunning size={80} />
                <h1>Ustam Kosuyor</h1>
                </div>
            </div>
            <div className="bg-white overflow-hidden w-[70vw] h-[75vh] min-h-[25rem] rounded-2xl flex flex-col items-center  ">
                <h2 className="text-2xl font-medium text-gray-700 pt-2" >Hangi hizmete ihtiyacın var?</h2>
                <div className="flex flex-col w-full  ">
                    <div className="flex flex-row w-full m-2 items-center p-2 pr-4">
                        <IoSearch className="absolute text-gray-400 ml-4" size={20} />
                        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="outline-none text-sm w-full h-10 px-8 font-medium m-2 text-gray-600 border-2 border-opacity-50 border-gray-400 " placeholder="Hizmete ihtiyacınız varsa buraya yazın" />
                    </div>
                    {
                        searchTerm.length > 0 && filteredDatas.length > 0 && (
                            <div className="max-h-[200px] overflow-y-auto">
                            <ul>
                                {filteredDatas.map((item, index) => (
                                    <li
                                        onClick={ () => handleIndexClick(item.modalPageIndex) }
                                        key={item.modalPageIndex}
                                        className="hover:bg-gray-100 w-full p-2 text-sm flex justify-center tracking-wide text-gray-600"
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
                            <h3 className="text-lg font-medium text-gray-500  mb-2">POPÜLER HİZMETLER</h3>

                            {
                                slicedDatas.map((item: any) => {
                                    return (
                                        <p key={item.modalPageIndex} onClick={ () => handleIndexClick(item.modalPageIndex)} className="hover:bg-gray-100 w-full p-1 text-sm flex justify-center tracking-wide text-gray-600">{item.unvan}</p>

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

export default page1
