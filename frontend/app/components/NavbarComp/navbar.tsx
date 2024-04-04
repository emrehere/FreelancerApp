// Navbar.js
import React, { useEffect } from 'react';
import NavDatas from '../../datas/navDatas'
import NavItem from '../NavbarComp/NavItem'
import SearchComp from '../NavbarComp/searchComp'
import { useRouter} from 'next/navigation'

function Navbar() {
  const buttonName = "SEARCH"

  const router = useRouter()



  return (
    <div className='flex flex-row px-[1%] py-[1%] font-bold  bg-blue-50 h-[5rem] '>
      <div className='w-[60vw]'>
        
        <p className='text-2xl pl-[5%]' onClick={ () => router.push("/") } ></p>
      </div>
     <SearchComp buttonName={buttonName} />
      
      <div className='flex flex-row  text-md flex-grow justify-end items-center mr-[2%] space-x-4 ' >
        {
          NavDatas.map((item: any) => {
            return (
              <NavItem icon={item.icon} key={item.title} title={item.title} href={item.href} />
            )
          })
        }
      </div>
      
      {/* other content */}
    </div>
  );
}

export default Navbar;
