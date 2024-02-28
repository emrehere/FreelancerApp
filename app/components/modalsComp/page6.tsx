import React from 'react'
import NextButton from "@/app/components/modalsComp/NextButton";
import ModalTopElement from './ModalTopElement';

function Page6() {
  return (
    <div>
        <ModalTopElement />
            <div className="bg-white overflow-hidden sm:w-[70vw] w-[90vw] h-[45vh] min-h-[11rem] 
            rounded-2xl flex flex-col items-center justify-center sm:mt-0 mt-8">
            
               <div className='flex justify-center  h-full flex-col items-center sm:w-[60vw] w-[80vw]'>
               <h1 className='font-semibold -mt-8 text-[#1a1c28]  text-2xl'>Adın ve Soyadın</h1>
                <div className='flex sm:flex-row flex-col sm:space-x-8 sm:w-[60vw] w-[80vw]'>
                <input className='mt-8 sm:w-[60vw]  border-[#1a1c28] border-2 sm:border-opacity-20 
                border-opacity-40 outline-none p-2 h-14 sm:h-12' type="text" />
                <input className='mt-8 sm:w-[60vw]  border-[#1a1c28] border-2 sm:border-opacity-20
                 border-opacity-40 outline-none p-2 h-14 sm:h-12' type="text" />
                  
                </div>
               </div>
                 

             
                <div className="flex flex-grow"></div>
                <NextButton />
            </div>
    </div>
  )
}

export default Page6
