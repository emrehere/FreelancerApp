import { GiHamburgerMenu } from "react-icons/gi";

import React from 'react'

function mobileNavbar() {
  return (
    <div>
      <div className="flex justify-between items-center bg-blue-50 h-[8vh] px-[10%]
        font-bold">
        <p>LOGO</p>
        <GiHamburgerMenu size={30} />
      </div>
    </div>
  )
}

export default mobileNavbar
