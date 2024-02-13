import jobsData from '../../datas/jobsData'
import JobItem from './jobItem'
import { RootState } from '../../store/RootReducer';
import { showWorkSetter, workIndexSetter } from '../../pages/searchPage/searchPageReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'



export default function PageForJobs() {
   
    const workIndex = useSelector((state: any) => state.searchPageReducer.workIndex)
    const showWork = useSelector((state: any) => state.searchPageReducer.showWork)
    const searchParam = useSelector((state: RootState) => state.searchPageReducer.jobOrTalent)

    const dispatch = useDispatch()

    const handleShowWork = (index : any) => {

        dispatch(showWorkSetter(true))
        dispatch(workIndexSetter(index))
        
    }

    useEffect(() => {
     
        if ( showWork ) {
          document.body.style.overflow = 'hidden';
        } else {
      
          document.body.style.overflow = 'auto';
        }
    
       
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [ showWork ]);


    return (
        <div>
            <div className='flex flex-col text-gray-800 ml-[5vw] -mt-[7vh]  '>
                <div className='flex justify-center text-2xl font-semibold -ml-[10vw] '>
                    <p>THE LATEST JOBS TO APPLY FOR {searchParam.toUpperCase()}
                    </p>
                </div>
                <div className='mt-[10vh]'>
                {
                    jobsData.map((item, index) => {
                        return (
                            <div onClick={() => handleShowWork(index) } key={index}>
                                <JobItem  item={item} />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    );
}