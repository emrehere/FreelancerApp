import React from 'react'
import NextButton from "@/app/components/modalsComp/NextButton";
import ModalTopElement from './ModalTopElement';

function Page5() {
  return (
    <div>
      <ModalTopElement />
            <div className="bg-white overflow-hidden w-[70vw] h-[55vh] min-h-[11rem] rounded-2xl
              flex flex-col items-center">
            


                   
                    <div className='flex justify-center  h-full flex-col items-center w-[60vw] '>
                    <h1 className=' font-semibold text-[#1a1c28] text-2xl'>Email adresini gir</h1>
                    <p className='text-gray-500 text-sm  mt-2'>Talebini oluşturmak için email adresine ihtiyacımız var. Email adresin yoksa boş bırakabilirsin.</p>
                    <input className='mt-8 w-[60vw] border-[#1a1c28] border-2 border-opacity-20 outline-none p-2' type="text" placeholder='ornek@example.com' />
                    </div>
                   

             
                <div className="flex flex-grow"></div>
                <NextButton />
            </div>
    </div>
  )
}

export default Page5
