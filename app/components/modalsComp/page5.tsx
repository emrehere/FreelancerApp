import React from 'react'
import NextButton from "@/app/components/modalsComp/NextButton";
import { FaRunning } from "react-icons/fa";

function page5() {
  return (
    <div>
       <div className="text-white w-[70vw] text-4xl tracking-wider font-extrabold flex  items-center space-x-2 mb-2">
               <div className='mx-auto flex  items-center '>
                <FaRunning size={80} />
                <h1>Ustam Kosuyor</h1>
                </div>
            </div>
            <div className="bg-white overflow-hidden w-[70vw] h-[75vh] rounded-2xl flex flex-col items-center  ">
            


                    Page5

             
                <div className="flex flex-grow"></div>
                <NextButton />
            </div>
    </div>
  )
}

export default page5
