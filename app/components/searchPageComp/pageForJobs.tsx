import jobsData from '../../datas/jobsData'

export default function PageForJobs() {

    console.log(jobsData)

    return (
        <div>
            <div className='flex flex-col text-gray-800'>
                <div>JOBS</div>
                {
                    jobsData.map((item: any) => {
                        return (
                            <div>
                                <p>{item.projectDetails.title}</p>
                                <p>{item.jobDescription}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}