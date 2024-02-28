import React from 'react'
import NextButton from "@/app/components/modalsComp/NextButton";
import ModalTopElement from './ModalTopElement';

function Page8() {
    return (
        <div>
            <ModalTopElement />
            <div className="bg-white overflow-hidden sm:w-[70vw] sm:h-[70vh] h-[30rem]  
            rounded-2xl flex flex-col items-center sm:justify-center w-[90vw] sm:mt-0 mt-4">

                <div className='flex justify-center  h-full flex-col items-center sm:w-[60vw] w-[80vw]'>
                    <h1 className='font-semibold -mt-8 sm:mb-4 text-[#1a1c28] text-2xl '>Numaranizi dogrulayin</h1>

                    <p className='text-gray-500 text-md sm:w-[60vw] sm:mb-12 mt-2 pl-2 sm:pl-0'>Onay kodunuzu girin. Talebinizi oluşturup ücretsiz teklifler alın.</p>

                    <div className='flex pl-2 sm:pl-0 sm:flex-row flex-col sm:items-center'>
                        <label className='w-40 sm:text-md text-lg sm:mb-0 mb-2'>Numaraniz:</label>
                        <input className=' sm:w-[40vw] w-[80vw] border-[#1a1c28] border-2 h-14 sm:h-12 border-opacity-20 outline-none p-2' type="text" placeholder='555-555-55-55' disabled />
                    </div>
                    <div className='flex sm:flex-row flex-col mt-4  sm:pl-0 pl-2 sm:items-center'>
                        <label className='w-40 sm:text-md text-lg sm:mb-0 mb-2'>Onay kodunuz:</label>
                        <input className=' sm:w-[40vw] w-[80vw] border-[#1a1c28] border-2 h-14 sm:h-12 border-opacity-20 outline-none p-2' type="text" placeholder='123' />
                        <div className='flex justify-end items-center '>
                            <button className='bg-orange-500 absolute text-white w-28 sm:h-12
                            h-14 font-bold text-lg -mt-14 sm:mt-0 '>Yeni kod</button>
                        </div>

                    </div>
                </div>
                <div className="flex flex-grow"></div>
                <NextButton />
            </div>
        </div>
    )
}

export default Page8
