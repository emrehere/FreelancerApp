import FreelancerDatas from '../../datas/freelancerDatas'
import { useSelector } from 'react-redux'

export default function Reviews() {

    const freelancerIndex = useSelector((state: any) => state.searchPageReducer.freelancerIndex)
    

    return (
        <div>
            <div>
                {
                    FreelancerDatas[freelancerIndex].reviews.map((item, index) => {
                        return (
                            <div className='border-b-2 hover:bg-orange-50  border-gray-300 p-8' key={index}>
                                <p className='font-semibold text-xl text-gray-800 '>{item.jobTitle}</p>
                                <div className='flex flex-row text-gray-600 mb-4 mt-2'>
                                <p>{item.duration}  &nbsp; - &nbsp;  </p>
                                <p>Earning : {item.earnings}  &nbsp; - &nbsp; </p>
                                <p>Rating : {item.employeeFeedback.rating}</p>
                                </div>
                                <p className='text-gray-600 text-lg font-medium'>{item.employeeFeedback.comments}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}