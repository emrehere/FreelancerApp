import React from 'react'

function page2() {
    return (
        <div>
             <br/>
            <div className='bg-[#0A0F26] sm:h-[110vh] h-[95vh] w-[96vw] mx-auto text-blue-50
             flex sm:flex-row flex-col rounded-xl'>
                 <div className='block sm:hidden sm:w-[48vw] sm:h-[110vh] rounded-r-xl'>
                    <img className='sm:w-[48vw] sm:h-[110vh] rounded-r-xl' src="/kadin.jpg" alt="kadin" />
                </div>
                <div className='sm:w-[48vw] flex flex-col px-[7%]   p-[3%] 
                 tracking-widest leading-loose sm:space-y-8 justify-center mt-[5vh] sm:mt-0 
                 space-y-12'>
                    <p className='text-md font-extrabold text-gray-500'>Işletmenizi büyütün</p>
                    <p className='sm:text-4xl text-3xl font-extrabold' >Küçükten büyüğe, dünya genelinde 1 milyondan fazla işletme tarafından güvenilen</p>
                    
                    <div className='bg-orange-600 sm:w-[25vw] w-[65vw] font-semibold text-lg 
                    flex items-center justify-center  h-12 rounded-xl mx-auto sm:mx-0 '>
                    <button>HEMEN UCRETSIZ BASLAYIN</button>
                    </div>
                </div>
                <div className='sm:block hidden sm:w-[48vw] sm:h-[110vh] rounded-r-xl'>
                    <img className='sm:w-[48vw] sm:h-[110vh] rounded-r-xl' src="/kadin.jpg" alt="kadin" />
                </div>
            </div>
            <br/>
        </div>
    )
}

export default page2
