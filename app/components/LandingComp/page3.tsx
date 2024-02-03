import React from 'react'

function page3() {
    return (
        <div>
             <br/>
            <div className='bg-[#5ac0dc] h-[110vh] w-[96vw] mx-auto text-blue-50 flex flex-row rounded-xl'>
                <div className='w-[48vw] flex flex-col  p-[3%]
                 tracking-widest leading-loose space-y-8 justify-center'>
                    <p className='text-md font-extrabold text-gray-800' >Serbest Çalışanlar</p>
                    <p className='text-3xl font-bold text-gray-800'>Serbest çalışan devrimine katılın</p>
                    <p className='text-lg font-semibold text-gray-900' >Çevrimiçi bir varlık olmak ve kendi özel beceri setinizden para kazanmaya başlamak için daha iyi bir zaman hiç olmamıştı.</p>
                    <p className='text-lg font-semibold text-gray-900'>Nerede çalışacağınıza siz karar verin, tam zamanlı, yarı zamanlı veya esnek zamanlı seçenekleri arasından seçim yapın. PeoplePerHour'da her şey, fiyatınız dahil olmak üzere tamamen sizin kontrolünüz altında.</p>
                    <div className='bg-white w-[30vw] font-bold text-lg 
                    flex items-center justify-center h-12 rounded-xl text-[#5ac0dc]
                    hover:shadow-xl  shadow-gray-600'>
                    <button>SERBEST ÇALIŞAN OLARAK KATILIN</button>
                    </div>
                </div>
                <div className=' w-[48vw] h-[110vh] rounded-r-xl'>
                    <img className='w-[48vw] h-[110vh] rounded-r-xl' src="/adam.jpg" alt="kadin" />
                </div>
            </div>
            <br/>
        </div>
    )
}

export default page3