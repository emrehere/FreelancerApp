"use client"
import React from 'react'
import Post from '@/app/components/dashboardComp/Post'
import SharedPost from '@/app/components/dashboardComp/SharedPost'
import { postOpenSetter } from '@/app/pages/dashboard/DashboardReducer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store/RootReducer'
import OpenPost from '@/app/components/dashboardComp/OpenPost'

function Page() {

  const dispatch = useDispatch();

  const postOpen = useSelector((state: RootState) => state.DashboardReducer.postOpen);

  return (
    <div className=''>
      <div className='min-h-[200vh] '>
        <Post />
        {
          postOpen && <OpenPost />
        }
        <div className='my-12 '>
        <SharedPost />
        </div>
      </div>
    </div>
  )
}

export default Page
