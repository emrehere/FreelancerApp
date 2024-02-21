import React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { useState, useEffect } from 'react';
import CitiesData from '../../datas/cities'
import { useDispatch, useSelector } from 'react-redux'; 
import { RootState } from '@/app/store/RootReducer';
import { showCities } from '@/app/pages/jobNoticeForm/modalReducer';

export default function scrollAreaByCity() {
    const cityNames = CitiesData.map((city) => city.name);

    const [citySearchTerm, setCitySearchTerm] = useState("");
    const [filteredDatas, setFilteredDatas] = useState(cityNames);

    const citiesOpen = useSelector((state: RootState) => state.modalReducer.citiesOpen)
 
    const dispatch = useDispatch();
    


    function filterByCitySearchTerm() {
        const filteredCities = CitiesData.filter((data) =>
            data.name.toLowerCase().includes(citySearchTerm.toLowerCase())
        ).map(city => city.name);
        setFilteredDatas(filteredCities);
    }

    useEffect(() => {
        filterByCitySearchTerm();
    }, [citySearchTerm])

    return (
        <ScrollArea.Root className="w-[300px]   rounded overflow-hidden shadow-[0_2px_10px] shadow-blackA4 bg-white">
            <ScrollArea.Viewport className="w-full h-full rounded">
                <div className="py-[15px] px-5">
                    <div onClick={() => dispatch(showCities())} className="text-violet11 text-[15px] h-[40px] leading-[18px] font-medium flex items-center justify-center">
                        <input value={citySearchTerm} onChange={(e) => setCitySearchTerm(e.target.value)} className='h-[30px] w-full px-4' type="text" placeholder='Search' />
                    </div>
                    {
                        citiesOpen && (
                            <div className='h-[180px]'>
                                {filteredDatas.map((city) => (
                        <div
                            className=" text-mauve12 text-sm font-medium hover:bg-[#1a1c28] hover:text-white rounded-lg
                 cursor-pointer leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6 flex justify-center items-center"
                            key={city}
                        >
                            <p className='pb-2'>{city.charAt(0).toUpperCase() + city.slice(1)}</p>
                        </div>
                    ))}
                            </div>
                        )
                    }
                </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
                className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                orientation="vertical"
            >
                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar
                className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                orientation="horizontal"
            >
                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="bg-blackA5" />
        </ScrollArea.Root>
    );


}


