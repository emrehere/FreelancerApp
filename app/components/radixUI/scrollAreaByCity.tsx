import React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { useState, useEffect, useRef } from 'react';
import CitiesData from '../../datas/cities'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/RootReducer';
import { showCities, getChosenCity } from '@/app/pages/jobNoticeForm/modalReducer';


type City = {
    name: string;
    plate: string;
};

export default function scrollAreaByCity() {


    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const [citySearchTerm, setCitySearchTerm] = useState("");
    const [filteredDatas, setFilteredDatas] = useState([]);
    

    const citiesOpen = useSelector((state: RootState) => state.modalReducer.citiesOpen)
    const chosenCity = useSelector((state: RootState) => state.modalReducer.chosenCity)

    const dispatch = useDispatch();


    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCitySearchTerm(event.target.value);
    }

    useEffect(() => {       
        if (chosenCity) {
            setCitySearchTerm(chosenCity.name);
        }
        dispatch(showCities(false))
    }, [chosenCity])



    function filterByCitySearchTerm() {
        const filteredCities = CitiesData.filter((data) =>
            data.name.toLowerCase().includes(citySearchTerm.toLowerCase())
        ).map(city => city);
        setFilteredDatas(filteredCities);
    }

    useEffect(() => {
        filterByCitySearchTerm();
    }, [citySearchTerm])


    const handleClickOutside = (event: MouseEvent) => {
        if ( scrollAreaRef.current && event.target && !scrollAreaRef.current.contains(event.target as Node)) {
            
                dispatch(showCities(false))
        
        }
    };

    console.log(citiesOpen)

    useEffect(() => {
        if (citiesOpen) {
          document.addEventListener("mousedown", handleClickOutside);
        }
      
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      
      }, [citiesOpen, dispatch, scrollAreaRef]);

    return (
        <ScrollArea.Root ref={scrollAreaRef} className="w-[300px]   rounded overflow-hidden shadow-[0_2px_10px] shadow-blackA4 bg-white">
            <ScrollArea.Viewport className="w-full h-full rounded">
                <div className="py-[15px] px-5">
                    <div onClick={() => dispatch(showCities())} className="text-violet11 text-[15px] h-[40px] leading-[18px] font-medium flex items-center justify-center">
                        <input value={citySearchTerm} onChange={handleSearchChange} className='h-[30px] w-full px-4' type="text" placeholder='Search' />
                    </div>
                    {
                        citiesOpen && (
                            <div className='h-[180px]'>
                                {filteredDatas.map((city: City) => (
                                    <div
                                        onClick={() => dispatch(getChosenCity(city))}
                                        className=" text-mauve12 text-sm font-medium hover:bg-[#1a1c28] hover:text-white rounded-lg
                 cursor-pointer leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6 flex justify-center items-center"
                                        key={city.plate}
                                    >
                                        <p className='pb-2'>{city.name.charAt(0).toUpperCase() + city.name.slice(1)}</p>
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


