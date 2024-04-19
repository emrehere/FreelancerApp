import React from 'react'
import Image from 'next/image'

function OpenMenu() {
  return (
    <div className='bg-blue-50 h-96 w-64 shadow-xl shadow-gray-500 mr-8'>
      <div className='flex flex-row items-center space-x-2 mt-4 mx-2'>
        <div className='relative'>
            <Image src="/justApic.webp" width={80} height={80} className='object-cover rounded-full ' alt="kadin" />
            
        </div>
        <div>
        <p>Emre Yıldırım</p>
            <p className='text-gray-500 text-sm' >blablabla@blabla.com</p>
        </div>

      </div>
    </div>
  )
}

export default OpenMenu
