import { GiHamburgerMenu } from "react-icons/gi";

import React, { useState } from 'react'
import HamburgerMenu from './hamburgerMenu';

function mobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    document.documentElement.style.overflow = isOpen ? 'auto' : 'hidden';
    console.log(isOpen)
  }

  return (
    <div>
      <div className="flex justify-between items-center bg-blue-50 h-[8vh] px-[10%]
        font-bold">
        <p>LOGO</p>
        <GiHamburgerMenu onClick={ toggleMobileMenu } size={30} />
        {
          isOpen && <HamburgerMenu toggleMobileMenu={toggleMobileMenu} />
        }
      </div>
    </div>
  )
}

export default mobileNavbar
