import { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import OpenUpMenu from './openUpMenu';  



export default function SearchComp({buttonName}: any) {

  const [searchClick, setSearchClick] = useState(false);
  

    return (
        <>
        <div className='flex flex-col '>
        <div onClick={() => setSearchClick(!searchClick)} className='flex flex-row 
        items-center px-4 py-2 border-b-2 border-gray-400 border-opacity-40
          space-x-2 text-blue-500 ' >
            <IoMdSearch size={27} />
            <div className='text-md pl-4 tracking-widest'>
                {buttonName}
            </div>
            <div className='flex flex-grow'></div>
            <div className='right-0'>
            <FaChevronDown size={20} />
            </div>
           
        </div>
         <div>
         {
           searchClick ? <OpenUpMenu styleParent={{ color: '#4299e1' }} /> : null
         }
         </div>
         </div>
         </>
    )
}