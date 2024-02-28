import { showFreelancerSetter } from '../../pages/searchPage/searchPageReducer'
import { useDispatch, useSelector } from 'react-redux'
import { FaArrowLeft } from "react-icons/fa6";
import FreelancerDatas from '../../datas/freelancerDatas'
import Reviews from './reviews';
import Image from 'next/image'


export default function ShowFreelancer() {

    const dispatch = useDispatch()

    const freelancerIndex = useSelector((state: any) => state.searchPageReducer.freelancerIndex)



    return (
        <div>
            <div className='flex flex-row min-h-[100vh] h-screen fixed z-50
             bg-gray-700 bg-opacity-70 overflow-y-auto'>
                <div className='sm:w-[30vw]  '> </div>
                <div className=' sm:w-[70vw] w-[100vw] bg-blue-50 overflow-y-auto h-screen rounded-3xl '>
                    <div className='ml-4 mr-8  '>
                        <button className='text-orange-500  ' onClick={() => dispatch(showFreelancerSetter(false))}><FaArrowLeft size={35} /></button>
                        <div className='border-[1px] border-gray-400 border-opacity-50
                             min-h-[150px] rounded-t-2xl flex flex-row p-4 w-[90vw]  '>
                            <Image width={300} height={300} className="rounded-full h-24 w-24" src="/kadin.webp" alt="kadin" />
                            <div className='pl-4 space-y-2'>
                                <p className='text-3xl font-semibold' >{FreelancerDatas[freelancerIndex].freelancer.name}</p>
                                <p className='text-gray-600  text-[15px]'>{FreelancerDatas[freelancerIndex].freelancer.location}</p>
                                <div className='text-gray-800 font-medium text-[17px] flex sm:flex-row flex-col'>
                                    <p>{FreelancerDatas[freelancerIndex].freelancer.jobSuccess} &nbsp;Job Success &nbsp;- &nbsp;</p>
                                    <p>Completed: {FreelancerDatas[freelancerIndex].freelancer.totalJobs} Jobs</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-[1px] border-gray-400 border-opacity-50
                           flex flex-col sm:px-16 px-4 py-8 items-center tracking-wide w-[90vw]'>
                            <p className='text-3xl font-medium mb-8'>Freelancer Title</p>
                            <p className='text-gray-900'>{FreelancerDatas[freelancerIndex].profileDescription}</p>
                        </div>
                        <div className='border-[1px] border-gray-400 border-opacity-50
                           flex flex-col sm:px-16 py-8 items-center tracking-wide rounded-b-2xl w-[90vw]'>
                            <p className='text-2xl text-gray-800 font-semibold mb-4'>Work history</p>
                            <div>
                        <Reviews />
                       </div>
                        </div>
                       
                    </div>

                </div>
            </div>
        </div>
    )
}