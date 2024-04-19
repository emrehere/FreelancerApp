import React,{useState} from 'react'
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import SearchComp from '../NavbarComp/searchComp';
import { MdOutlinePostAdd } from "react-icons/md";
import Image from 'next/image';
import Categories from './Categories';
import Link from 'next/link';
import OpenMenu from './OpenMenu';


function UserNavbar() {
    const [openMenu, setOpenMenu] = useState(false);

 

    return (
        <div>
            <div className='flex flex-row px-[1%] py-[1%] font-bold  bg-blue-50 h-[5rem] w-full text-[#18202b]'>

                <div className='flex-grow'></div>
                <Link href={"/pages/jobNoticeForm"}>
                    <button className=' text-blue-600 shadow-md shadow-blue-400 font-bold h-12 w-48 mx-8
       rounded-xl  hover:bg-blue-600 hover:text-blue-50 tracking-widest text-md flex items-center
       justify-center space-x-4 border-blue-600 border-2 border-opacity-30'>
                        <MdOutlinePostAdd size={25} />
                        <span>POST JOB</span>
                    </button>
                </Link>
                <SearchComp buttonName="SEARCH" />
                <div className='mt-2 flex flex-row ml-16 space-x-4 text-[#18202b] '>
                    <BiMessageDetail size={35} />
                    <MdOutlineNotificationsActive size={35} />
                </div>
                <div className='relative'>             
                        <Image onClick={() => setOpenMenu(!openMenu)} src="/blank_profile_pic.webp" width={50} height={50} className='rounded-full ml-4'
                        alt="blank" />
                </div>
                
            </div>
            
            <div>
                <Categories />
                
            </div>
            <div className='flex -mt-12'>
                <div className='flex-grow'></div>
                {
                    openMenu && (
                        <OpenMenu />
                    )
                }
            </div>
        </div>
    )
}

export default UserNavbar
