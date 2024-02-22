import React from 'react'
import NextButton from "@/app/components/modalsComp/NextButton";
import ModalTopElement from './ModalTopElement';

function Page6() {
  return (
    <div>
        <ModalTopElement />
            <div className="bg-white overflow-hidden w-[70vw] h-[45vh] min-h-[11rem] 
            rounded-2xl flex flex-col items-center justify-center">
            
               <div className='flex justify-center  h-full flex-col items-center w-[60vw]'>
               <h1 className='font-semibold -mt-8 text-[#1a1c28]  text-2xl'>Adın ve Soyadın</h1>
                <div className='flex flex-row space-x-8 w-[60vw]'>
                <input className='mt-8 w-[60vw]  border-[#1a1c28] border-2 border-opacity-20 outline-none p-2' type="text" />
                <input className='mt-8 w-[60vw]  border-[#1a1c28] border-2 border-opacity-20 outline-none p-2' type="text" />
                  
                </div>
               </div>
                 

             
                <div className="flex flex-grow"></div>
                <NextButton />
            </div>
    </div>
  )
}

export default Page6
