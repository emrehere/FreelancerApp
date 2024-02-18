"use client"
import { FaRunning } from "react-icons/fa";
import modalDatas from "@/app/datas/modalDatas";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";



// modalDatas.slice(0, 6) : []

export default function YourSpecificPage() {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDatas, setFilteredDatas] = useState([]);

    const slicedDatas = modalDatas.slice(0, 6)

    function filterBySearchTerm() {
        const filtered = slicedDatas.filter((data) =>
            data.unvan.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDatas(filtered);
    }

    useEffect(() => {
        filterBySearchTerm();
    }, [searchTerm])



    return (

        <div className="min-h-[100vh] bg-[#4d4e6c]  flex justify-center items-center flex-col">
            <div className="text-white text-4xl tracking-wider font-extrabold flex flex-row items-center space-x-2 mb-4">
                <FaRunning size={80} />
                <h1>Ustam Kosuyor</h1>
            </div>
            <div className="bg-white w-[70vw] h-[70vh] rounded-2xl flex flex-col items-center  p-4 ">
                <h2 className="text-2xl font-medium text-gray-700" >Hangi hizmete ihtiyacın var?</h2>
                <div className="flex flex-col w-full m-2  ">
                    <div className="flex flex-row w-full m-2 items-center ">
                        <IoSearch className="absolute text-gray-400 ml-4" size={20} />
                        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="outline-none text-sm w-full h-10 px-8 font-medium m-2 text-gray-600 border-2 border-opacity-50 border-gray-400 " placeholder="Hizmete ihtiyacınız varsa buraya yazın" />
                    </div>
                    {
                        searchTerm.length > 0 && filteredDatas.length > 0 && (
                            <ul>
                                {filteredDatas.map((item: any) => (
                                    <li
                                        key={item.unvan}
                                        className="hover:bg-gray-100 w-full p-2 text-sm flex justify-center tracking-wide text-gray-600"
                                    >
                                        {item.unvan}
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                </div>



                {
                    filteredDatas.length === 0 || searchTerm.length > 0 || (
                        <div className="w-full flex flex-col items-center">
                            <h3 className="text-lg font-medium text-gray-500 mb-2">POPÜLER HİZMETLER</h3>

                            {
                                slicedDatas.map((item: any) => {
                                    return (
                                        <p className="hover:bg-gray-100 w-full p-2 text-sm flex justify-center tracking-wide text-gray-600">{item.unvan}</p>

                                    )
                                }
                                )
                            }
                        </div>
                    )
                }

            </div>
        </div>

    );
}
