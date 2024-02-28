import React from 'react'
import { FaRunning } from "react-icons/fa";

function ModalTopElement() {
  return (
    <div>
       <div className="text-white sm:w-[70vw] w-[90vw] text-4xl tracking-wider font-extrabold flex 
        items-center space-x-2 sm:mb-2 ">
        <div className=' flex items-center mt-12 sm:mt-0 ml-2'>
          <FaRunning size={80} />
          <h1>Ustam Kosuyor</h1>
        </div>
      </div>
    </div>
  )
}

export default ModalTopElement
