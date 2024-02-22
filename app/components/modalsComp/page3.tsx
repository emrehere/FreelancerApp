import React from 'react'
import NextButton from "@/app/components/modalsComp/NextButton";
import { FaRunning } from "react-icons/fa";

function Page3() {
  return (
    <div>
      <div className="text-white w-[70vw] text-4xl tracking-wider font-extrabold flex  items-center space-x-2 mb-2">
        <div className='mx-auto flex  items-center '>
          <FaRunning size={80} />
          <h1>Ustam Kosuyor</h1>
        </div>
      </div>
      <div className="bg-white overflow-hidden w-[70vw] h-[70vh] rounded-2xl flex flex-col
       items-center ">

        <div>
          <div className='pt-8 pb-4 flex items-center flex-col'>
            <h2 className='text-2xl text-gray-700 font-semibold pb-1'>İhtiyacın detayları neler?</h2>
            <p className='text-gray-500 text-md pb-2 '>Aklına gelen başka önemli bir detay var mı?</p>
          </div>
          <textarea className='w-[60vw] mx-auto h-[10rem] border-purple-200 border-2 outline-none p-2' 
          placeholder=' ne ariyorsunuz? '></textarea>

        </div>


        <div className="flex flex-grow"></div>
        <NextButton />
      </div>
    </div>
  )
}

export default Page3
