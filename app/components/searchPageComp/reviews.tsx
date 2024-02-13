import FreelancerDatas from '../../datas/freelancerDatas'

export default function Reviews() {
    return (
        <div>
            <div>
                {
                    FreelancerDatas.map((freelancer) => (
                        
                        freelancer.reviews.map((review) => (
                            <div>
                                <p>{review.jobTitle}</p>
                                <p>{review.duration}</p>
                                <p>{review.earnings}</p>
                                <p>{review.employeeFeedback.rating}</p>
                                <p>{review.employeeFeedback.comments}</p>
                            </div>
                        ))

                    ))
                }
            </div>
        </div>
    )
}