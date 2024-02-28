import React from 'react'
import { FaRunning } from "react-icons/fa";

function ModalTopElement() {
  return (
    <div>
       <div className="text-white sm:w-[70vw] text-4xl tracking-wider font-extrabold flex 
        items-center space-x-2 sm:mb-2 ">
        <div className='mx-auto flex  items-center mt-8 sm:mt-0'>
          <FaRunning size={80} />
          <h1>Ustam Kosuyor</h1>
        </div>
      </div>
    </div>
  )
}

export default ModalTopElement
