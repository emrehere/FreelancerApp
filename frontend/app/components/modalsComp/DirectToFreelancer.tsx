import React from 'react'

import { GoArrowUpLeft } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';

function DirectToFreelancer({ forFreelancer }: { forFreelancer: boolean }) {
    return (
        <div>
            <div className="w-full rounded-t-2xl flex sm:justify-center bg-[#1a1c28] 
             text-white ">
                <div className="sm:w-[70vw]  flex   ">
                    <div className='    flex flex-row sm:w-[70vw] 
                    w-[94vw]  justify-between' >

                        <div className=' bg-orange-500  h-full rounded-tl-2xl text-white 
                        w-[17rem] font-bold cursor-pointer flex items-center text-[15px]'>
                            <Link href={'/pages/signin'}>
                                <div className='flex hover:scale-105 items-center ml-4'>                                   
                                    <GoArrowUpLeft size={30} className=' ' />
                                    <div className='flex flex-col items-center'>
                                        <p className='ml-1 '> Zaten hesabin varsa</p>
                                        <p className='ml-1'>buraya tıklayin</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className=''>

                            {
                                forFreelancer ? "" : (
                                    <div className=' bg-orange-500 text-[15px] rounded-tr-2xl text-white h-full
                        w-[17rem] font-bold cursor-pointer flex items-center justify-end'>
                                        <Link href={'/pages/freelancerForm'}>
                                            <div className='flex hover:scale-105 items-center mr-4'>
                                                <div className='flex flex-col items-center'>
                                                    <p className='mr-1 '> Eger freelancer olmak </p>
                                                    <p className='mr-1'>istiyorsaniz buraya tıklayin</p>
                                                </div>
                                                <GoArrowUpRight size={30} className=' ' />
                                            </div>
                                        </Link>
                                    </div>)
                            }
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default DirectToFreelancer
