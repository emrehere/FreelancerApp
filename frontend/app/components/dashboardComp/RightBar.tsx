import React from 'react'
import SuggestedFriends from './SuggestedFriend'
import SuggestedFriendDatas from '@/app/datas/FriendReqDatas'
import SuggestedGroups from './SuggestedGroups'

function RightBar() {
  return (
    <div className='absolute right-0 top-0 bg-white ' >
      <div className='w-52'>
        <h1 className='text-lg font-thin text-gray-600 pt-4 m-4'>Suggested Friends</h1>
        {
          SuggestedFriendDatas.map((data) => {
            return (
              <SuggestedFriends key={data.fullname} fullname={data.fullname} field={data.field} image={data.image} />
            )
          })
        }
        <h2 className='text-lg font-thin text-gray-600 pt-8 m-4 '>Suggested Groups</h2>
        {
          SuggestedFriendDatas.map((data) => {
            return (
              <SuggestedGroups key={data.fullname} fullname={data.fullname} field={data.field} image={data.image} />
            )
          })
        }
      </div>
    </div>
  )
}

export default RightBar
