import React from 'react'
import NextButton from "@/app/components/modalsComp/NextButton";
import ModalTopElement from './ModalTopElement';

function Page3() {
  return (
    <div>
      <ModalTopElement />
      <div className="bg-white overflow-hidden w-[70vw] h-[78vh] rounded-2xl flex flex-col
       items-center ">

        <div>
          <div className='pt-8 pb-4 flex items-center flex-col'>
            <h2 className='text-2xl text-[#1a1c28] font-semibold pb-1'>İhtiyacın detayları neler?</h2>
            <p className='text-gray-500 text-md pb-2 '>Aklına gelen başka önemli bir detay var mı?</p>
          </div>
          <div className='w-[60vw] mx-auto'>
            <input className='w-[100%] border-purple-200 border-2 outline-none p-2 mb-2' type="text" placeholder='Tam olarak ne aradiginizi basliga yaziniz' />
            <textarea className=' h-[10rem] w-[100%] border-purple-200 border-2 outline-none p-2'
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
