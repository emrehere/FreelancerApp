"use client"
import { useDispatch, useSelector } from 'react-redux';
import { searchParamSetter } from "../../components/LandingComp/searchReducer"
import { RootState } from '../../store/RootReducer';
import SearchBar from '../../components/LandingComp/searchBar';
import { jobOrTalentSetter } from './searchPageReducer';
import PageForJobs from '../../components/searchPageComp/pageForJobs';
import PageForFreelancers from '../../components/searchPageComp/pageForFreelancers';
import ShowFreelancer from '../../components/searchPageComp/showFreelancer';
import ShowWork from '../../components/searchPageComp/showWork';


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
                    <SearchBar hrefFromParent="/pages/searchPage" color="orange" />
                </div>
                <div className='space-x-12 flex flex-row ml-[8vw] mt-[10vh] tracking-wider font-bold text-3xl '>
                    <div className='hover:text-[#ffa500]'>
                        <p className={jobOrTalent === "talent" ? "text-[#ffa500]" : "text-gray-600"} onClick={handleTalent}>YETENEK</p>

                    </div>
                    <p className={jobOrTalent === "work" ? "text-[#ffa500]" : "text-gray-600"} onClick={handleWork}>ISLER</p>
                </div>

                <div className='h-0.5 ml-[8vw] w-[83vw] my-4 bg-gray-700 opacity-30 '></div>
                <div className=' ml-[8vw] space-x-8 -mt-5 z-10 flex flex-row ' >
                    {
                        jobOrTalent === "talent" ? <p className='h-2 w-36   bg-[#ffa500] rounded-xl ' ></p> : <p className='h-2 w-36   bg-[#ffa500] rounded-xl opacity-0 ' ></p>
                    }
                    {
                        jobOrTalent === "work" ? <p className='h-2 w-28   bg-[#ffa500] rounded-xl ' ></p> : ""
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