import * as ScrollArea from '@radix-ui/react-scroll-area';
import { useState, useEffect, useRef } from 'react';
import CitiesData from '../../datas/cities'
import { useDispatch, useSelector } from 'react-redux'; 
import { RootState } from '@/app/store/RootReducer';
import { showCounty, hireInfosetter } from '@/app/pages/jobNoticeForm/modalReducer';
import { CityType } from '../../types';

export default function ScrollAreaByCounty() {
    const  [chosenCounty, setChosenCounty] = useState<string>("");
    const [countySearch, setCountySearch] = useState<string>("");
   
    
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    

    const countyOpen = useSelector((state: RootState) => state.modalReducer.countyOpen)
    const chosenCity = useSelector((state: RootState) => state.modalReducer.chosenCity as unknown as CityType)
    const hireInfo = useSelector((state: RootState) => state.modalReducer.hireInfo)
 
    const dispatch = useDispatch();
    
    const handleCountyOpen = () => {
        dispatch(showCounty(!countyOpen))
    }
    


    

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (scrollAreaRef.current && event.target && !scrollAreaRef.current.contains(event.target as Node)) {
                dispatch(showCounty(false));
            }
        };
    
        if (countyOpen ) {
            document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        }
    }, [countyOpen, dispatch, scrollAreaRef]);

    
    const handleChosenCounty = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        dispatch(hireInfosetter({ chosenCountyToDB: event.currentTarget.textContent as string}));
        setChosenCounty(event.currentTarget.textContent as string);
        dispatch(showCounty(false))
        setCountySearch(event.currentTarget.textContent as string)
    }

    console.log("info", hireInfo)
    

    return (
        <ScrollArea.Root ref={scrollAreaRef}  className="rounded overflow-hidden shadow-[0_2px_10px] shadow-blackA4
         bg-white ">
            <ScrollArea.Viewport className="h-full rounded">
                <div className="py-[15px] px-5">
                    <div onClick={handleCountyOpen} className="text-violet11 text-[15px] h-[40px] leading-[18px] font-medium flex items-center justify-center">
                        <input value={countySearch} onChange={ (e) => setCountySearch(e.target.value) }  className='h-[30px] sm:w-[13.5rem] px-4' type="text" placeholder='Search' />
                    </div>
                    {
                        countyOpen && (
                            <div   className='h-[120px]'>
                              {   chosenCity.counties.map((county) => (
                        <div onClick={handleChosenCounty}
                            className=" text-mauve12 text-sm font-medium hover:bg-[#1a1c28] hover:text-white rounded-lg
                 cursor-pointer leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6 flex justify-center items-center"
                            key={county}
                        >
                            <p className='pb-2'>{county.charAt(0).toUpperCase() + county.slice(1)}</p>
                        </div>
                    ))}
                            </div>
                        )
                    }
                </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
                className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors  ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                orientation="vertical"
            >
                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar
                className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors  ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                orientation="horizontal"
            >
                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="bg-blackA5" />
        </ScrollArea.Root>
    );


}


