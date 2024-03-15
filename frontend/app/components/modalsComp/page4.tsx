import React, { useState, useEffect } from 'react'
import NextButton from "@/app/components/modalsComp/NextButton";
import ScrollAreaByCity from '../radixUI/scrollAreaByCity';
import ScrollAreaByCounty from '../radixUI/scrollAreaByCounty';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/RootReducer';
import { CityType } from '../../types';
import ModalTopElement from './ModalTopElement';
import { useDispatch } from 'react-redux';
import { hireInfosetter } from '@/app/pages/jobNoticeForm/modalReducer';





function Page4() {



  const citiesOpen = useSelector((state: RootState) => state.modalReducer.citiesOpen)
  const countyOpen = useSelector((state: RootState) => state.modalReducer.countyOpen)
  const chosenCity = useSelector((state: RootState) => state.modalReducer.chosenCity as unknown as CityType)
  const citySearchTerm = useSelector((state: RootState) => state.modalReducer.citySearchTerm)

  const hireInfo = useSelector((state: RootState) => state.modalReducer.hireInfo)

  const dispatch = useDispatch()







  return (
    <div>
      <ModalTopElement />
      <div style={{ height: countyOpen || citiesOpen ? "28rem" : "18rem" }} className="bg-white
       overflow-hidden sm:w-[80vw] w-[90vw] rounded-2xl flex flex-col items-center justify-between mt-8 sm:mt-0 
       font-medium text-[#1a1c28] ">

<div className=' flex flex-row  space-x-10 justify-between w-[60vw] mt-8 text-[15px] font-medium text-[#1a1c28]'>
          <div className='flex flex-row space-x-2 items-center '>
            <p className='mr-6'>Adınız</p>
            <input value={hireInfo.name} onChange={(e) => dispatch(hireInfosetter({ name: e.target.value }))}
              className=' sm:w-[16rem]  border-[#1a1c28] border-2 sm:border-opacity-20 
                border-opacity-40 outline-none  shadow-[0_2px_10px] shadow-blackA4
                py-[20px] px-5 ' type="text" />
          </div>
          <div className='flex flex-row items-center justify-center '>
            <p className='mr-6' >Soyadınız</p>
            <input value={hireInfo.surname} onChange={(e) => dispatch(hireInfosetter({ surname: e.target.value }))}
              className=' w-[16rem] border-[#1a1c28] border-2 sm:border-opacity-20
                 border-opacity-40 outline-none  shadow-[0_2px_10px] shadow-blackA4
                 py-[20px] px-5 ' type="text" />
          </div>

        </div>

        <div className='flex flex-row w-[60vw] justify-between'>
          <div className='mt-4 flex items-center flex-start '>
            <p className='mr-4'>Şehir</p>
            <ScrollAreaByCity />
          </div>
          {
            chosenCity && citySearchTerm === chosenCity?.name && (
              <div className='mt-4 flex items-center '>
                <p className='mr-6'>Ilçe</p>
                <ScrollAreaByCounty />
              </div>
            )
          }

        </div>




     




        <div className="flex flex-grow"></div>
        <NextButton />
      </div>
      <br />
    </div>
  )
}

export default Page4
