"use client"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/RootReducer';
import SearchBar from '../../components/LandingComp/searchBar';
import { jobOrTalentSetter } from './searchPageReducer';
import dynamic from 'next/dynamic'
import { useEffect } from 'react';





const PageForJobs = dynamic(() => import('../../components/searchPageComp/pageForJobs'), {
    ssr: false
})

const PageForFreelancers = dynamic(() => import('../../components/searchPageComp/pageForFreelancers'), {
    ssr: false
})
const ShowFreelancer = dynamic(() => import('../../components/searchPageComp/showFreelancer'), {
    ssr: false
})

const ShowWork = dynamic(() => import('../../components/searchPageComp/showWork'), {
    ssr: false
})


export default function SearchPage() {

    const dispatch = useDispatch()

    const searchParam = useSelector((state: RootState) => state.searchParamReducer.searchParam)
    const jobOrTalent = useSelector((state: RootState) => state.searchPageReducer.jobOrTalent)
    const showFreelancer = useSelector((state: RootState) => state.searchPageReducer.showFreelancer)
    const showWork = useSelector((state: RootState) => state.searchPageReducer.showWork)
    



    const handleTalent = () => {
        dispatch(jobOrTalentSetter("talent"))
    }

    const handleWork = () => {
        dispatch(jobOrTalentSetter("work"))
    }

    useEffect(() => {

        dispatch(jobOrTalentSetter("talent"))
    }, [])

    console.log("Job or talent: ", jobOrTalent)


    return (
        <div className="min-h-[100vh] w-full bg-blue-100 bg-opacity-80  text-gray-900 ">
            {
                showFreelancer && <ShowFreelancer />

            }
            {
                showWork && <ShowWork />
            }
     
            <div className="pt-[15vh] flex flex-col ">
                <div className=' bg-[#18202b] h-[35vh] min-h-[200px] flex items-center w-full tracking-wide '>
                    <div className='flex -mt-[5vh] flex-col'>
                        <p className='text-3xl font-semibold ml-[3vw] text-blue-50'>{searchParam.toUpperCase()} Offers & Services</p>
                        <p className='text-sm ml-[3vw] text-gray-400'>Looking for {searchParam} offers and services? PeoplePerHour has you covered.</p>
                    </div>
                </div>
                <div className='-mt-10 ml-4 flex justify-center'>
                    <SearchBar hrefFromParent="/pages/searchPage" color="#f97316"  mytoken={true}/>
                </div>
                <div className='sm:space-x-12 space-x-4 flex flex-row ml-[8vw] mt-[10vh] tracking-wider font-bold sm:text-3xl text-2xl '>
                    <div className='hover:text-[#f97316]'>
                        <p className={jobOrTalent === "talent" ? "text-[#f97316]" : "text-gray-600"} onClick={handleTalent}>YETENEK</p>

                    </div>
                    <p className={jobOrTalent === "work" ? "text-[#f97316]" : "text-gray-600"} onClick={handleWork}>ISLER</p>
                </div>

                <div className='h-0.5 ml-[8vw] sm:w-[83vw] w-[13rem] my-4 bg-gray-700 opacity-30 '></div>
                <div className=' ml-[8vw] sm:space-x-8 -mt-5 z-10 flex flex-row sm:w-[83vw] w-[13rem]' >
                    {
                        jobOrTalent === "talent" ? <p className='h-2 sm:w-36 w-[7rem] bg-[#f97316] rounded-xl ' ></p> : <p className='h-2 w-36   bg-[#ffa500] rounded-xl opacity-0 ' ></p>
                    }
                    {
                        jobOrTalent === "work" ? <p className='h-2 sm:w-28 w-[6rem]  bg-[#f97316] rounded-xl ' ></p> : ""
                    }
                </div>
                <div className='h-[20vh]'></div>
                <div>

                </div>

            </div>

            <div>
                {
                    jobOrTalent === "work" ? <PageForJobs /> : <PageForFreelancers />
                }
            </div>

        </div>
    )
}