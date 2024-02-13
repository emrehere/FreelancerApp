import { GiHamburgerMenu } from "react-icons/gi";

import React, { useState } from 'react'
import HamburgerMenu from './hamburgerMenu';
import { useRouter } from "next/navigation"; 

function mobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    document.documentElement.style.overflow = isOpen ? 'auto' : 'hidden';
    console.log(isOpen)
  }


  const router = useRouter()

  return (
    <div>
      <div className="flex justify-between items-center bg-blue-50 h-[8vh] px-[10%]
        font-bold">
        <p onClick={() => router.push('/')} className="cursor-pointer" >LOGO</p>
        <GiHamburgerMenu onClick={ toggleMobileMenu } size={30} />
        {
          isOpen && <HamburgerMenu toggleMobileMenu={toggleMobileMenu} />
        }
      </div>
    </div>
  )
}

export default mobileNavbar
