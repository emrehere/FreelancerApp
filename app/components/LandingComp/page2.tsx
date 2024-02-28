import React from 'react'
import Image from 'next/image'

function page2() {
    return (
        <div>
           
            <div className='bg-[#0A0F26] sm:h-[110vh] h-[55rem] w-[96vw] mx-auto text-blue-50
             flex sm:flex-row flex-col rounded-xl mt-[1rem] sm:mt-0'>
                 <div className='block sm:hidden sm:w-[48vw] sm:h-[110vh] rounded-r-xl'>
                    <Image width={300} height={300} className='sm:w-[48vw] w-full sm:h-[110vh] rounded-r-xl' src="/kadin.webp" alt="kadin" />
                </div>
                <div className='sm:w-[48vw] flex flex-col sm:px-[7%]   sm:p-[3%] pl-[10%] 
                 tracking-widest leading-loose sm:space-y-8 sm:justify-center mt-[5vh] sm:mt-0 
                 space-y-12'>
                    <p className='text-md font-extrabold text-gray-500'>Işletmenizi büyütün</p>
                    <p className='sm:text-4xl text-3xl font-extrabold' >Küçükten büyüğe, dünya genelinde 1 milyondan fazla işletme tarafından güvenilen</p>
                    
                    <div className='bg-orange-600 sm:w-[25vw] w-[65vw] font-semibold text-lg 
                    flex items-center justify-center  h-12 rounded-xl  '>
                    <button>HEMEN UCRETSIZ BASLAYIN</button>
                    </div>
                </div>
                <div className='sm:block hidden sm:w-[48vw] sm:h-[110vh] rounded-r-xl'>
                <Image width={300} height={300} className='sm:w-[48vw] sm:h-[110vh] rounded-r-xl' src="/kadin.webp" alt="kadin" />
                </div>
            </div>
            <br/>
        </div>
    )
}

export default page2
