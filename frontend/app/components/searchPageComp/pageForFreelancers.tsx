import FreelancerDatas from '../../datas/freelancerDatas'
import FreelancerItem from '../searchPageComp/freelancerItem'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { showFreelancerSetter, freelancerIndexSetter } from '../../pages/searchPage/searchPageReducer'

export default function PageForFreelancers() {

    const searchParam = useSelector((state: any) => state.searchParamReducer.searchParam)
    const ShowFreelancer = useSelector((state: any) => state.searchPageReducer.showFreelancer)

    

    const dispatch = useDispatch()
    
    
    const handleFreelancerClick = ( index: any ) => {

        dispatch(showFreelancerSetter(true))
        dispatch(freelancerIndexSetter(index))
       

    }

    useEffect(() => {
        // Disable scroll when ShowFreelancer is true
        if (ShowFreelancer) {
          document.body.style.overflow = 'hidden';
        } else {
          // Re-enable scroll when ShowFreelancer is false
          document.body.style.overflow = 'auto';
        }
    
        // Cleanup the effect on component unmount
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [ShowFreelancer]);

    return (
        <>
       
        <div>
            
            <div  className='sm:ml-[5vw] -mt-[7vh] flex flex-col text-gray-800'>
                <div>

                    <div className='flex justify-center text-2xl font-semibold mx-2 sm:-ml-[10vw]  '>
                        <p>FREELANCERS TO HIRE FOR {searchParam.toUpperCase()}
                        </p>
                    </div>

                    <div className='mt-[10vh] '>
                        {
                            FreelancerDatas.map((item, index) => {
                                return (
                                    <div onClick={ () => handleFreelancerClick(index) } key={index} >
                                        <FreelancerItem item={item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}