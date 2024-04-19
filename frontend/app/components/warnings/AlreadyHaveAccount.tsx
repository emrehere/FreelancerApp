
import Link from 'next/link'
import React, { useState } from 'react'
import Backdrop from './BackDrop'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/RootReducer'
import { warningModalOpen } from '../../components/NavbarComp/NavReducer';
import { IoMdClose } from "react-icons/io";

function AlreadyHaveAccount({ savedLink }: { savedLink: string }) {

    const dispatch = useDispatch();

    const revertToDefault = () => {
        document.body.style.overflow = '';
        dispatch(warningModalOpen(false));
    }

    return (
        <div>
            <div className='flex justify-end mr-[10vw] mt-[5rem]'>
               
                <div className='h-[13rem] w:[80vw] sm:w-[25rem] bg-blue-50 flex flex-col 
            justify-center items-center space-y-8 rounded-2xl'>
                    <p className='text-2xl font-semibold mt-4'>Already have an account?</p>

                    <div className='flex space-x-8'>
                        <Link href="/pages/signin">
                            <div onClick={revertToDefault}
                              className='cursor-pointer bg-orange-500 w-[8rem] py-2
                        rounded-2xl text-blue-50 flex justify-center items-center '>
                                <button className='text-xl font-medium'> Of course</button>
                            </div>
                        </Link>
                        <Link href={savedLink}>
                            <div onClick={revertToDefault} className='cursor-pointer bg-orange-500 w-[8rem] py-2
                        rounded-2xl text-blue-50 flex justify-center items-center '>
                                <button className='text-xl font-medium'>  Not yet </button>
                            </div>
                        </Link>
                    </div>
                </div>
                <IoMdClose size={10} onClick={revertToDefault} className='text-xl cursor-pointer -ml-10 
                bg-orange-500 w-10 h-8 rounded-tr-2xl text-blue-50' />    
            </div>
        </div>
    )
}

export default AlreadyHaveAccount
