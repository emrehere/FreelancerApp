import React,{useState, useEffect} from 'react'
import NextButton from "@/app/components/modalsComp/NextButton";
import { FaRunning } from "react-icons/fa";
import ScrollAreaByCity from '../radixUI/scrollAreaByCity';
import ScrollAreaByCounty from '../radixUI/scrollAreaByCounty';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/RootReducer';

function page4() {



  const citiesOpen = useSelector((state: RootState) => state.modalReducer.citiesOpen)
  const countyOpen = useSelector((state: RootState) => state.modalReducer.countyOpen)
  const chosenCity = useSelector((state: RootState) => state.modalReducer.chosenCity)
  const citySearchTerm = useSelector((state: RootState) => state.modalReducer.citySearchTerm)


  

  return (
    <div>
      <div className="text-white p-4 w-[70vw] text-4xl tracking-wider font-extrabold flex  items-center space-x-2 mb-2">
        <div className='mx-auto flex  items-center '>
          <FaRunning size={80} />
          <h1>Ustam Kosuyor</h1>
        </div>
      </div>
      <div style={{ height: countyOpen || citiesOpen ? "28rem" : "18rem" }} className="bg-white overflow-hidden w-[70vw]  rounded-2xl flex flex-col items-center  ">

        

        <div className='mt-8'>
          <ScrollAreaByCity />
        </div>
        {
          chosenCity && citySearchTerm === chosenCity.name && (
            <div className='mt-4'>
              <ScrollAreaByCounty />
            </div>
          )
        }


        <div className="flex flex-grow"></div>
        <NextButton />
      </div>
      <br/>
    </div>
  )
}

export default page4
