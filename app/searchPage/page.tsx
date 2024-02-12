"use client"
import { useDispatch, useSelector } from 'react-redux';
import { searchParamSetter } from "../components/LandingComp/searchReducer"
import { RootState } from '../store/RootReducer';
import SearchBar from '../components/LandingComp/searchBar';
import { jobOrTalentSetter } from './searchPageReducer';

export default function JobsPage(){

    const dispatch = useDispatch()

    const  searchParam  = useSelector((state: RootState) => state.searchParamReducer.searchParam)
    const jobOrTalent = useSelector((state: RootState) => state.searchPageReducer.jobOrTalent)

    console.log(searchParam)
    console.log(jobOrTalent)

    const handleTalent = () =>{
        dispatch(jobOrTalentSetter("talent"))
    }

    const handleWork = () =>{
        dispatch(jobOrTalentSetter("work"))
    }


    return(
        <div className="min-h-[100vh] w-full bg-blue-100  text-gray-900 ">

            <div className="pt-[15vh] flex flex-col ">
                <div className=' bg-[#18202b] h-[35vh] min-h-[200px] flex items-center w-full tracking-wide '>
                   <div className='flex -mt-[5vh] flex-col'>
                   <p className='text-3xl font-semibold ml-[3vw] text-blue-50'>{searchParam.toUpperCase()} Offers & Services</p>
                    <p className='text-sm ml-[3vw] text-gray-400'>Looking for Web Developer offers and services? PeoplePerHour has you covered.</p>
                   </div>
                </div>
                <div className='-mt-10 flex justify-center'>
                    <SearchBar color="orange" />
                </div>
                <div>
                    <p onClick={handleTalent}>YETENEK</p>
                    <p onClick={handleWork}>ISLER</p>
                </div>
            <div>
                
            </div>
               
            </div>
        </div>
    )
}