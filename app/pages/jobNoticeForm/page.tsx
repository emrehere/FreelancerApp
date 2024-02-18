"use client"
import { FaRunning } from "react-icons/fa";
import modalDatas from "@/app/datas/modalDatas";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";


// modalDatas.slice(0, 6) : []

export default function YourSpecificPage() {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDatas, setFilteredDatas] = useState(modalDatas);
  
    useEffect(() => {
      // Filter the modalDatas based on the search term
      const filtered = Object.keys(modalDatas)
        .filter(key => key.toLowerCase().includes(searchTerm.toLowerCase()))
        .reduce((obj, key) => {
          obj[key] = modalDatas[key];
          return obj;
        }, {});
  
      setFilteredDatas(filtered);
    }, [searchTerm]);
        


    return (

        <div className="min-h-[100vh] bg-[#4d4e6c]  flex justify-center items-center flex-col">
            <div className="text-white text-4xl tracking-wider font-extrabold flex flex-row items-center space-x-2 mb-4">
                <FaRunning size={80} />
                <h1>Ustam Kosuyor</h1>
            </div>
            <div className="bg-white w-[70vw] h-[70vh] rounded-2xl flex flex-col items-center justify-center p-4 ">
                <h2 className="text-2xl font-medium text-gray-700" >Hangi hizmete ihtiyacın var?</h2>
                <div className="flex flex-row w-full m-2 items-center ">
                <IoSearch className="absolute text-gray-400 ml-4" size={20} />
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="outline-none text-sm w-full h-10 px-8 font-medium m-2 text-gray-600 border-2 border-opacity-50 border-gray-400 " placeholder="Hizmete ihtiyacınız varsa buraya yazın" />
                    
                </div>

                <h3 className="text-xl font-medium text-gray-700 m-2">POPÜLER HİZMETLER</h3>
                {
                    Object.keys(modalDatas).slice(0, 6).map((key) => {
                        const item = modalDatas[key];
                        return (
                            <div className="flex m-2 flex-row space-x-2 items-center text-gray-600" key={key}>

                                <p>{key}</p>
                            </div>
                        );
                    })
                }

            </div>
        </div>

    );
}
