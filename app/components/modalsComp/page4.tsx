import React,{useState, useEffect} from 'react'
import NextButton from "@/app/components/modalsComp/NextButton";
import ScrollAreaByCity from '../radixUI/scrollAreaByCity';
import ScrollAreaByCounty from '../radixUI/scrollAreaByCounty';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/RootReducer';
import { CityType } from '../../types';
import ModalTopElement from './ModalTopElement';




function Page4() {



  const citiesOpen = useSelector((state: RootState) => state.modalReducer.citiesOpen)
  const countyOpen = useSelector((state: RootState) => state.modalReducer.countyOpen)
  const chosenCity = useSelector((state: RootState) => state.modalReducer.chosenCity as unknown as CityType)
  const citySearchTerm = useSelector((state: RootState) => state.modalReducer.citySearchTerm)


  

  return (
    <div>
      <ModalTopElement />
      <div style={{ height: countyOpen || citiesOpen ? "28rem" : "18rem" }} className="bg-white overflow-hidden w-[70vw]  rounded-2xl flex flex-col items-center  ">

        

        <div className='mt-8'>
          <ScrollAreaByCity />
        </div>
        {
          chosenCity  && citySearchTerm === chosenCity?.name  && (
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

export default Page4
