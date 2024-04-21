import React from 'react'
import Post from '@/app/components/dashboardComp/Post'
import SharedPost from '@/app/components/dashboardComp/SharedPost'

function Page() {
  return (
    <div className=''>
      <div className='min-h-screen '>
        <Post />
        <div className='my-12 '>
        <SharedPost />
        </div>
      </div>
    </div>
  )
}

export default Page
