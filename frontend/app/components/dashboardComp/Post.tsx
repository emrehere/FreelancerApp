"use client"
import React from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/RootReducer'
import { postOpenSetter } from '../../pages/dashboard/DashboardReducer'

function Post() {

  const dispatch = useDispatch();

  const postOpen = useSelector((state: RootState) => state.DashboardReducer.postOpen);

  const openPostFunc = () => {
    dispatch(postOpenSetter(true));
  }

  console.log("postOpen", postOpen)

  return (
    <div>
      <div className='bg-white rounded-xl h-28 w-[38rem] flex items-center justify-center  '>
       <div className='relative'>
       <Image src="/kadin.webp" height={60} width={60} className='rounded-full object-cover' alt="kadin" />
       </div>
       <div>
        <input onClick={openPostFunc} type="text" placeholder="What's on your mind?" 
        className='w-[30rem] outline-none h-16 rounded-xl ml-4 p-2 border-blue-100 border-2
          border-opacity-25' />
       </div>
      </div>
    </div>
  )
}

export default Post
