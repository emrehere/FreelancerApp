import jobsData from '../../datas/jobsData'
import JobItem from './jobItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/RootReducer';



export default function PageForJobs() {
    const searchParam = useSelector((state: RootState) => state.searchParamReducer.searchParam)

    console.log(jobsData)

    return (
        <div>
            <div className='flex flex-col text-gray-800 ml-[5vw] -mt-[7vh] '>
                <div className='flex justify-center text-2xl font-semibold -ml-[10vw] '>
                    <p>THE LATEST JOBS TO APPLY FOR {searchParam.toUpperCase()}
                    </p>
                </div>
                <div className='mt-[10vh]'>
                {
                    jobsData.map((item, index) => {
                        return (
                            <div  key={index}>
                                <JobItem item={item} />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    );
}