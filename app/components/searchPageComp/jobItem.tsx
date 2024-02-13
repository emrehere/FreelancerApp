export default function jobItem({ item }: any) {

    const slicedSkills = item.skillsAndExpertise.skills.slice(0, 4)

    return (
        <div>
            <div className="bg-orange-50 bg-opacity-50 hover:bg-orange-100 hover:bg-opacity-60 shadow-sm shadow-orange-300
             flex flex-col m-4 sm:w-[80vw] w-[95vw] sm:h-[45vh] h-[50vh] min-h-[230px] p-8 sm:p-4 rounded-xl">
                <div className="-mt-2">
                    <p className="text-[14px] te">  posted bla bla ago </p>
                    <p className="text-xl font-bold my-1">  {item.projectDetails.title}</p>
                </div>
                <div className="flex flex-row text-[15px]">
                    <p> {item.projectDetails.hourlyRate}  - &nbsp;  </p>
                    <p> {item.projectDetails.experienceLevel} - &nbsp;  Est. Time: &nbsp;  </p>
                    <p> {item.projectDetails.duration}</p>

                </div>
                <p className="mt-4 mb-4 text-gray-900 text-[17px]">
                    {item.jobDescription.length > 250
                        ? `${item.jobDescription.slice(0, 250)}...`
                        : item.jobDescription}
                </p>
                <div>
                    <div className="flex flex-wrap items-center justify-center   flex-row  mt-2 font-medium" > {slicedSkills.map((item: string) =>
                        <p className=" sm:py-2 bg-gray-600 text-sm sm:w-36 w-48 h-12 sm:h-16 flex items-center
                     justify-center bg-opacity-10 rounded-2xl px-2  m-2"><p>{item}</p></p>)}</div>
                </div>
            </div>
        </div>
    )

}