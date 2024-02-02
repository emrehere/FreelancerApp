// Navbar.js
import React, { useEffect } from 'react';
import NavDatas from '../../datas/navDatas'
import NavItem from '../NavbarComp/NavItem'
import SearchComp from '../NavbarComp/searchComp'

function Navbar() {
  const buttonName = "SEARCH"



  return (
    <div className='flex flex-row px-[2%] py-[2%] font-bold items-center bg-blue-50 '>
      <div className='w-[35vw]'>
        LOGO
      </div>
     <SearchComp buttonName={buttonName} />
      <div className='flex-grow' >

      </div>
      <div className='flex flex-row w-[50vw] justify-evenly text-sm  ' >
        {
          NavDatas.map((item: any) => {
            return (
              <NavItem  key={item.title} title={item.title} href={item.href} />
            )
          })
        }
      </div>
      
      {/* other content */}
    </div>
  );
}

export default Navbar;
