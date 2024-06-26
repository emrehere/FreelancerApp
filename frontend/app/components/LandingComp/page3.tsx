import React,{useState, useEffect} from 'react'
import Image from 'next/image'

function Page3() {
    
    const [tokenExists, setTokenExists] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setTokenExists(true);
        }
    }, []);

    return (
        <div>
            <br />
            <div className='bg-[#5ac0dc] sm:h-[40rem] h-[70rem] w-[96vw] mx-auto text-blue-50 
            flex sm:flex-row flex-col rounded-xl'>
                <div className='sm:w-[48vw] flex flex-col  p-[3%]
                 tracking-widest leading-loose space-y-8 justify-center'>
                    <div className='block sm:hidden w-[90vw]  rounded-r-xl'>
                    <Image width={300} height={300} className='w-[90vw] h-full  rounded-r-xl' src="/adam.webp" alt="kadin" />
                    </div>
                    <p className='text-md font-extrabold text-gray-800' >Serbest Çalışanlar</p>
                    <p className='text-3xl font-bold text-gray-800'>Serbest çalışan devrimine katılın</p>
                    <p className='text-lg font-semibold text-gray-900' >Çevrimiçi bir varlık olmak ve kendi özel beceri setinizden para kazanmaya başlamak için daha iyi bir zaman hiç olmamıştı.</p>
                    <p className='text-lg font-semibold text-gray-900'>Nerede çalışacağınıza siz karar verin, tam zamanlı, yarı zamanlı veya esnek zamanlı seçenekleri arasından seçim yapın. PeoplePerHour&apos;da her şey, fiyatınız dahil olmak üzere tamamen sizin kontrolünüz altında.</p>
                    {
                        !tokenExists && <div className='bg-white sm:w-[30vw] w-[65vw] font-bold text-lg 
                        flex items-center justify-center sm:h-12 h-20  rounded-xl text-[#5ac0dc]
                        hover:shadow-xl  shadow-gray-600 mx-auto sm:mx-0'>
                            <button className='flex flex-col sm:flex-row'>SERBEST ÇALIŞAN  <span> &nbsp;OLARAK KATILIN</span> </button>
                        </div>
                    }
                </div>
                <div className='sm:block hidden  rounded-r-xl'>
                <Image width={300} height={300} className='w-[48vw] object-cover h-full  rounded-r-xl' src="/adam.webp" alt="kadin" />
                </div>
            </div>
            <br />
        </div>
    )
}

export default Page3