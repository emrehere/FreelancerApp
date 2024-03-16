import React from 'react'
import LikedFreelancers from '@/app/components/userPanel/LikedFreelancers'
import PhotoPart from '@/app/components/userPanel/photoPart'
import PopularServices from '@/app/components/userPanel/PopularServices'

function Page() {
    return (
        <div>

            <div className='ml-64 space-y-20 '>
                <PhotoPart />
                <div>
                    <LikedFreelancers />
                </div>
                <div>
                    <PopularServices />
                </div>
            </div>
        </div>
    )
}

export default Page
