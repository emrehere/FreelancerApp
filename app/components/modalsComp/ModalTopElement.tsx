import React from 'react'
import { FaRunning } from "react-icons/fa";

function ModalTopElement() {
  return (
    <div>
       <div className="text-white w-[70vw] text-4xl tracking-wider font-extrabold flex  items-center space-x-2 mb-2">
        <div className='mx-auto flex  items-center '>
          <FaRunning size={80} />
          <h1>Ustam Kosuyor</h1>
        </div>
      </div>
    </div>
  )
}

export default ModalTopElement
