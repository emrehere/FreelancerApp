import FreelancerDatas from '../../datas/freelancerDatas'

export default function PageForFreelancers() {

    return (
        <div>
            <div className='flex flex-col text-gray-800'>
                <div>
                <div>FREELANCERS</div>
                <div>
                    {
                        FreelancerDatas.map((item: any) => {
                            return (
                                <div>
                                    <p>{item.freelancer.name}</p>
                                    <p>{item.freelancer.location}</p>
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