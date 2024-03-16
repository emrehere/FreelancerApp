import React from 'react'
import { FaArrowTurnUp } from "react-icons/fa6";
import Link from 'next/link';

function DirectToFreelancer({ forFreelancer }: { forFreelancer: boolean }) {
    return (
        <div>
            <div className="w-full rounded-t-2xl flex sm:justify-center bg-[#1a1c28] 
             text-white ">
                <div className="sm:w-[70vw]  flex   ">
                    <div className='    flex flex-row sm:w-[70vw] 
                    w-[94vw]  justify-end' >

                        {
                            forFreelancer ? "" : (
                                <div className=' bg-orange-500  pt-5 rounded-tr-2xl text-white py-2
                        px-4 font-bold cursor-pointer'>
                                    <Link href={'/pages/freelancerForm'}>
                                        <div className='flex hover:scale-105 '>
                                            <p className='mr-1 '> Eger freelancer olmak istiyorsaniz buraya tıklayin</p>
                                            <FaArrowTurnUp size={30} className='-mt-3 ' />
                                        </div>
                                    </Link>
                                </div>)
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}

export default DirectToFreelancer
