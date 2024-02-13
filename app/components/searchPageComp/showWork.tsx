"use client"
import JobsData from "../../datas/jobsData"
import { useSelector, useDispatch } from 'react-redux'
import { FaArrowLeft } from "react-icons/fa6";
import { showWorkSetter } from '../../pages/searchPage/searchPageReducer'
import jobsData from "../../datas/jobsData";

export default function ShowWork() {

    const workIndex = useSelector((state: any) => state.searchPageReducer.workIndex)

    const dispatch = useDispatch()
   
    const handleArrow = () =>{
      
        dispatch(showWorkSetter(false))
    }


    return (
        <div>
            <div className='flex flex-row min-h-[100vh] h-screen fixed z-50
         bg-gray-700 bg-opacity-70 overflow-y-auto space-y-8'>
                <div className='sm:w-[30vw] '> </div>
                <div className=' sm:w-[70vw] w-[100vw] bg-blue-50 overflow-y-auto h-screen 
            rounded-3xl px-8 py-4'>
                    <div onClick={ handleArrow} className="text-orange-500"><FaArrowLeft  size={35} /></div>
                    <h1 className="text-3xl mt-8 font-semibold text-gray-700">{JobsData[workIndex].projectDetails.title}</h1>
                    <div className="flex flex-row my-2 space-x-12">
                        <p className="text-gray-600 text-sm "> Posted bla bla minutes ago </p>
                        <p className="text-gray-500 text-sm font-medium">bla bla Location</p>
                    </div>
                    <div className="mt-8">
                        {JobsData[workIndex].jobDescription}
                    </div>
                    <div className="flex mt-8 sm:w-[50vw] flex-col">
                       <div className="flex flex-row justify-between mb-2">
                       <p className="flex flex-col"> <b>Hourly Rate</b> {JobsData[workIndex].projectDetails.hourlyRate}</p>
                       <p className="flex flex-col mr-8"> <b>Duration</b> {JobsData[workIndex].projectDetails.duration}</p>
                       <p className="flex flex-col"> <b>Experience Level</b> {JobsData[workIndex].projectDetails.experienceLevel}</p>
                       </div>
                        <div className="flex flex-row justify-between mt-4 sm:w-[32vw] w-[66vw] ">
                        <p className="flex flex-col"> <b>Job Type</b> {JobsData[workIndex].projectDetails.remoteJob ? "Remote" : "On-site"}</p>
                        <p className="flex flex-col mr-4"> <b>Project Type</b> {JobsData[workIndex].projectDetails.projectType}</p>
                       
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">Skills and Expertise</h2>
                        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
                            {
                                JobsData[workIndex].skillsAndExpertise.skills.map((item: string) =>
                                 <button className="bg-gray-700 bg-opacity-5 rounded-2xl px-4 py-2 col-span-1 ">{item}</button>)
                            }
                        </div>
                    </div>
                    <div className=" my-12">
                        <h3 className="text-xl font-semibold text-gray-700  mt-8">Activity on this job</h3>
                       <div className="flex flex-row space-x-12 my-2">
                       <p> <b>Last Viewed By Client: </b> { JobsData[workIndex].activity.lastViewedByClient }</p>
                        <p> <b>Proposals: </b> { JobsData[workIndex].activity.proposals }</p>
                       </div>
                    </div>
                </div>


            </div>
        </div>
    )
}