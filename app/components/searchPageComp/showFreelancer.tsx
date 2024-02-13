import { showFreelancerSetter } from '../../pages/searchPage/searchPageReducer'
import { useDispatch, useSelector } from 'react-redux'
import { FaArrowLeft } from "react-icons/fa6";
import FreelancerDatas from '../../datas/freelancerDatas'
import Reviews from './reviews';


export default function ShowFreelancer() {

    const dispatch = useDispatch()

    const freelancerIndex = useSelector((state: any) => state.searchPageReducer.freelancerIndex)



    return (
        <div>
            <div className='flex flex-row min-h-[100vh] h-screen fixed z-50
             bg-gray-700 bg-opacity-70 overflow-y-auto'>
                <div className='w-[30vw] '> </div>
                <div className=' w-[70vw] bg-blue-50 overflow-y-auto h-screen rounded-3xl '>
                    <div className='ml-4 mr-8  '>
                        <button className='text-orange-500  ' onClick={() => dispatch(showFreelancerSetter(false))}><FaArrowLeft size={35} /></button>
                        <div className='border-[1px] border-gray-400 border-opacity-50
                             min-h-[150px] rounded-t-2xl flex flex-row p-4  '>
                            <img className="rounded-full h-24 w-24" src="/kadin.jpg" />
                            <div className='pl-4 space-y-2'>
                                <p className='text-3xl font-semibold' >{FreelancerDatas[freelancerIndex].freelancer.name}</p>
                                <p className='text-gray-600  text-[15px]'>{FreelancerDatas[freelancerIndex].freelancer.location}</p>
                                <div className='text-gray-800 font-medium text-[17px] flex flex-row'>
                                    <p>{FreelancerDatas[freelancerIndex].freelancer.jobSuccess} &nbsp;Job Success &nbsp;- &nbsp;</p>
                                    <p>Completed: {FreelancerDatas[freelancerIndex].freelancer.totalJobs} Jobs</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-[1px] border-gray-400 border-opacity-50
                           flex flex-col px-16 py-8 items-center tracking-wide'>
                            <p className='text-3xl font-medium mb-8'>This is Freelancer Title</p>
                            <p className='text-gray-900'>{FreelancerDatas[freelancerIndex].profileDescription}</p>
                        </div>
                        <div className='border-[1px] border-gray-400 border-opacity-50
                           flex flex-col px-16 py-8 items-center tracking-wide rounded-b-2xl'>
                            <p className='text-2xl font-medium mb-8'>Work history</p>
                            
                        </div>
                       <div>
                        <Reviews />
                       </div>
                    </div>

                </div>
            </div>
        </div>
    )
}