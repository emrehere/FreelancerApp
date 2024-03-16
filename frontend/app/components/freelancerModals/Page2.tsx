import React from 'react';
import { useState } from 'react';
import NextButton from "@/app/components/modalsComp/NextButton";
import ModalTopElement from '../modalsComp/ModalTopElement' ;
import { hireInfosetter } from '@/app/pages/jobNoticeForm/modalReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/RootReducer';
import ScrollSkills from './scrollSkills'; 
import { addSkill, removeSkill } from './freelancerModalsReducer';

function SkillsPage() {
  const dispatch = useDispatch();

  const skills = useSelector((state: RootState) => state.freelancerModalsReducer.skills);

  return (
    <div>
      <ModalTopElement />
      <div className="bg-white overflow-hidden sm:w-[70vw] sm:h-[78vh] w-[90vw] h-[30rem] 
        rounded-2xl flex flex-col items-center mt-8 sm:mt-0">

        <div>
          <div className='pt-6 pb-4 flex items-center flex-col mx-4'>
            <h2 className='text-2xl text-[#1a1c28] font-semibold pb-1 '>
              Yetenekler
            </h2>
            <p className='text-gray-500 sm:text-md text-lg  sm:pt-0 pt-2'>Eklemek istediğiniz yetenekleri giriniz.</p>
          </div>
          <div className='sm:w-[60vw] w-[80vw] mx-auto'>
            <ScrollSkills  />   
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-100 rounded-full px-3 py-1 m-1">
                  <span className="text-gray-700">{skill}</span>
                  <button
                    className="ml-2 text-red-500 focus:outline-none"
                    onClick={() => dispatch(removeSkill(index))}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-grow"></div>
        <NextButton />
      </div>
    </div>
  );
}

export default SkillsPage;
