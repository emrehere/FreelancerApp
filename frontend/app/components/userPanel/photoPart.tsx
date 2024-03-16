import React from 'react'
import Image from 'next/image'
import { IoMdAdd } from "react-icons/io";
import SearchBar from '../LandingComp/searchBar';

function PhotoPart() {
    return (
        <div className='mb-24'>
            <div className='flex flex-row items-center'>
                <div className=' flex '>
                    <div className='relative '>
                        <Image width={150} height={150} className='object-cover ' src="/No_Avatar.webp" alt="kadin" />
                    </div>

                    <IoMdAdd className=' -ml-12 z-10 text-4xl font-bold text-white p-2 bg-red-500 rounded-full' />
                </div>
                <div className='ml-12 text-gray-800'>
                    <p className=' text-4xl mb-2'> Merhaba <span className='font-extrabold'>Emrah 👋</span> </p>
                    <p className='text-lg'> Bionluk'a tekrar hoş geldin!</p>
                </div>

            </div>

            <div className='mt-16 ml-20' >
                <SearchBar color="#f97316" hrefFromParent="/pages/searchPage" />
            </div>
        </div>
    )
}

export default PhotoPart
