import React from 'react'

function page2() {
    return (
        <div>
             <br/>
            <div className='bg-[#0A0F26] h-[110vh] w-[96vw] mx-auto text-blue-50 flex flex-row rounded-xl'>
                <div className='w-[48vw] flex flex-col  p-[3%]
                 tracking-widest leading-loose space-y-8 justify-center'>
                    <p className='text-md font-extrabold text-gray-500'>Işletmenizi büyütün</p>
                    <p className='text-4xl font-extrabold' >Küçükten büyüğe, dünya genelinde 1 milyondan fazla işletme tarafından güvenilen</p>
                    <div className='bg-orange-600 w-[25vw] font-semibold text-lg 
                    flex items-center justify-center h-12 rounded-xl'>
                    <button>HEMEN UCRETSIZ BASLAYIN</button>
                    </div>
                </div>
                <div className=' w-[48vw] h-[110vh] rounded-r-xl'>
                    <img className='w-[48vw] h-[110vh] rounded-r-xl' src="/kadin.jpg" alt="kadin" />
                </div>
            </div>
            <br/>
        </div>
    )
}

export default page2
