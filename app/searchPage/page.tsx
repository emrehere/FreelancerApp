"use client"
import { useDispatch, useSelector } from 'react-redux';
import { searchParamSetter } from "../components/LandingComp/searchReducer"
import { RootState } from '../store/RootReducer';
import SearchBar from '../components/LandingComp/searchBar';
export default function JobsPage(){

    const dispatch = useDispatch()

    const  searchParam  = useSelector((state: RootState) => state.searchParamReducer.searchParam)

    console.log(searchParam)

    return(
        <div className="min-h-[100vh] w-full bg-blue-100  text-gray-900 ">

            <div className="pt-[15vh] flex flex-col">
                <div className='flex flex-col'>
                    {searchParam}
                </div>
                <div className='ml-12'>
                    <SearchBar color="orange" />
                </div>
            <div>
                this is a page to seee freelancers
            </div>
            <div>
                this is a page to search JobsPage
            </div>
            </div>
        </div>
    )
}