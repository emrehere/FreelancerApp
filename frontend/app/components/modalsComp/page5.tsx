import React from 'react'
import NextButton from "@/app/components/modalsComp/NextButton";
import ModalTopElement from './ModalTopElement';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store/RootReducer';

function Page5() {

  const hireInfo = useSelector((state: RootState) => state.modalReducer.hireInfo)

 

  return (
    <div>
      <ModalTopElement />
            <div className="bg-white overflow-hidden sm:w-[70vw] w-[90vw] sm:h-[55vh] h-[25rem]
             min-h-[11rem] rounded-2xl flex flex-col items-center mt-8 sm:mt-0">
                   
                    <div className='flex justify-center  h-full flex-col items-center sm:w-[60vw]
                    w-[80vw] '>
                    <h1 className=' font-semibold text-[#1a1c28] text-2xl'>Email adresini gir</h1>
                    <p className='text-gray-500 sm:text-sm text-md mt-2'>Talebini oluşturmak için email adresine ihtiyacımız var. Email adresin yoksa boş bırakabilirsin.</p>
                    <input className='mt-8 sm:w-[60vw] w-[80vw] border-[#1a1c28] border-2 border-opacity-20
                    sm:h-12 h-16 outline-none p-2' type="text" placeholder='ornek@example.com' />
                    </div>

                <div className="flex flex-grow"></div>
                <NextButton />
            </div>
    </div>
  )
}

export default Page5
