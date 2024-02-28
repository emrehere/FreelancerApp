import React from 'react'
import NextButton from "@/app/components/modalsComp/NextButton";
import ModalTopElement from './ModalTopElement';

function Page3() {
  return (
    <div>
      <ModalTopElement />
      <div className="bg-white overflow-hidden sm:w-[70vw] sm:h-[78vh] w-[90vw] h-[60vh] 
      rounded-2xl flex flex-col items-center mt-8 sm:mt-0">

        <div>
          <div className='pt-8 pb-4 flex items-center flex-col'>
            <h2 className='text-2xl text-[#1a1c28] font-semibold pb-1'>İhtiyacın detayları neler?</h2>
            <p className='text-gray-500 sm:text-md text-lg pb-2 sm:pt-0 pt-2'>Aklına gelen başka önemli bir detay var mı?</p>
          </div>
          <div className='sm:w-[60vw] w-[80vw] mx-auto'>
            <input className='w-[100%] border-purple-200 border-2 outline-none p-2 sm:mb-2 mb-4 sm:h-12 h-16'
             type="text" placeholder='Tam olarak ne aradiginizi basliga yaziniz' />
            <textarea className=' sm:h-[10rem] h-[15rem] w-[100%] border-purple-200 border-2 outline-none p-2'
              placeholder=' detaylari belirtiniz lutfen'></textarea>
          </div>

        </div>


        <div className="flex flex-grow"></div>
        <NextButton />
      </div>
    </div>
  )
}

export default Page3
