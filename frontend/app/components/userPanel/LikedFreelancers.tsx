"use client"
import React from 'react'
import FreelancerCard from './FreelancerCard'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { getAllFreelancers } from '@/app/store/actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function LikedFreelancers() {


  const allFrelancers = useSelector((state: any) => state.searchPageReducer.allFrelancers)
  const [currentIndex, setCurrentIndex] = useState(0)



  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getAllFreelancers())
  }, [])


  const goToNextFreelancer = () => {
      setCurrentIndex(currentIndex + 1)
  }

  const goToPrevFreelancer = () => {
      setCurrentIndex(currentIndex - 1)
  }



  return (
    <div>
      <h1 className='text-2xl font-bold'>En Sevilen Freelancerlar 🥰</h1>

      <div className='flex flex-row mt-8  items-center w-[70vw] overflow-x-hidden '>
        <div className=' mx-3'>
         {
          currentIndex > 0 &&  <MdOutlineArrowBackIosNew onClick={goToPrevFreelancer} size={50} className='p-2 text-3xl bg-orange-500
          text-blue-50 rounded-full '/>
         }
        </div>
        {
          allFrelancers.map((item: any, index: number) => (
            <div key={index} className={currentIndex === index || currentIndex === index -1 || currentIndex === index - 2 || currentIndex === index - 3 ? "block" : "hidden"}>
              <FreelancerCard key={index} fullname={item.freelancerInfo.name + " " + item.freelancerInfo.surname}
                field={item.freelancerInfo.freelancerUnvan} />
            </div>

          ))
        }

        <div className='absolute right-12 '>
         {
          currentIndex < allFrelancers.length - 4 &&  <MdOutlineArrowForwardIos onClick={goToNextFreelancer} size={48} className='p-2  text-3xl  bg-orange-500
          text-blue-50 rounded-full'/>
         }
        </div>
      </div>


    </div>
  )
}

export default LikedFreelancers


