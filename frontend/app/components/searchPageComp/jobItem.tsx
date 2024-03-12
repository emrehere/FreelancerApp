export default function jobItem({ item }: any) {

    const slicedSkills = item.skillsAndExpertise.skills.slice(0, 4)

    return (
        <div>
            <div className="bg-orange-50 bg-opacity-50 hover:bg-orange-100 hover:bg-opacity-60 shadow-sm shadow-orange-300
             flex flex-col items-center justify-center sm:m-4 sm:w-[80vw] w-[90vw] mx-auto mb-2 sm:h-[45vh] h-[40rem] p-4 rounded-xl">
                
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
                    <div className="hidden sm:flex flex-wrap items-center justify-center   flex-row  mt-2 font-medium" > {slicedSkills.map((item: string) =>
                        <p key={item} className=" sm:py-2 bg-gray-600 text-sm sm:w-36 w-48 h-12 sm:h-16 flex items-center
                     justify-center bg-opacity-10 rounded-2xl px-2  m-2">{item}</p>)}</div>
                     <div className=" grid sm:grid-cols-2 sm:hidden mt-2 font-medium w-[80vw]" > {slicedSkills.map((item: string) =>
                        <p key={item} className=" col-span-1  bg-gray-600 text-sm  h-12
                      bg-opacity-10 rounded-2xl sm:p-8 flex items-center justify-center m-2">{item}</p>)}</div>
                </div>
            
            </div>
        </div>
    )

}