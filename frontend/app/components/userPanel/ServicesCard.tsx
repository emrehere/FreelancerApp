import React from 'react'
import Image from 'next/image'

function ServicesCard({ serviceName }: { serviceName: string }) {
    return (
        <div>
            <div className='flex flex-col bg-blue-50  shadow-md shadow-[#18202b]
        rounded-2xl h-[17rem] w-[12rem] mx-3 items-center  space-y-2
        text-gray-800 mb-12'>

                <div>
                    <div className='relative'>
                        <Image width={200} height={200} className='object-cover rounded-t-2xl ' src="/61.webp" alt="kadin" />
                    </div>
                    <div className='flex flex-col items-center space-y-1 mt-4 text-gray-800'>
                        <p className='text-[18px] font-semibold tracking-wide'>{serviceName}</p>
                        <p className='text-[15px] text-orange-500 font-medium'>469 freelancer</p>
                        <p className='text-[14px] text-gray-600 '>hizmet veriyor</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard
