import FreelancerDatas from '../../datas/freelancerDatas'
import FreelancerItem from '../searchPageComp/freelancerItem'
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function PageForFreelancers() {

    const searchParam = useSelector((state: any) => state.searchParamReducer.searchParam)

    const [showProfile, setShowProfile] = useState(false)
    
    

    return (
        <div>
            <div className='ml-[5vw] -mt-[7vh] flex flex-col text-gray-800'>
                <div>

                    <div className='flex justify-center text-2xl font-semibold -ml-[10vw] '>
                        <p>FREELANCERS TO HIRE FOR {searchParam.toUpperCase()}
                        </p>
                    </div>

                    <div className='mt-[10vh] '>
                        {
                            FreelancerDatas.map((item, index) => {
                                return (
                                    <div onClick={() => setShowProfile(!showProfile)} key={index} >
                                        <FreelancerItem item={item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}