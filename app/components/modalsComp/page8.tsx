import React from 'react'
import NextButton from "@/app/components/modalsComp/NextButton";
import ModalTopElement from './ModalTopElement';

function Page8() {
    return (
        <div>
            <ModalTopElement />
            <div className="bg-white overflow-hidden w-[70vw] h-[70vh] min-h-[22rem] 
            rounded-2xl flex flex-col items-center justify-center">

                <div className='flex justify-center  h-full flex-col items-center w-[60vw]'>
                    <h1 className='font-semibold -mt-8 mb-4 text-[#1a1c28] text-2xl'>Numaranizi dogrulayin</h1>

                    <p className='text-gray-500 text-md w-[60vw] mb-12 mt-2'>Onay kodunuzu girmek için telefon numaranıza gönderilen doğrulama kodunu kullanın. Talebinizi oluşturun ve anında ücretsiz teklifler alın.</p>

                    <div className='flex flex-row items-center'>
                        <label className='w-40'>Numaraniz:</label>
                        <input className=' w-[40vw] border-[#1a1c28] border-2 h-10 border-opacity-20 outline-none p-2' type="text" placeholder='555-555-55-55' disabled />
                    </div>
                    <div className='flex flex-row mt-4 items-center'>
                        <label className='w-40'>Onay kodunuz:</label>
                        <input className=' w-[40vw] border-[#1a1c28] border-2 h-10 border-opacity-20 outline-none p-2' type="text" placeholder='123' />
                        <div className='flex justify-end items-center '>
                            <button className='bg-orange-500 absolute text-white w-28 h-10   font-bold text-lg'>Yeni kod</button>
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
