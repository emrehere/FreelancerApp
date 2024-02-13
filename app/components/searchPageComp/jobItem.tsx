export default function jobItem({ item }: any) {



    return (
        <div>
            <div className="bg-orange-50 bg-opacity-50 hover:bg-orange-100 hover:bg-opacity-60 shadow-sm shadow-orange-300
             flex flex-col m-4 w-[80vw] h-[42vh] min-h-[250px] p-8 ">
                <div className="-mt-2">
                    <p className="text-[14px] te">  posted bla bla ago </p>
                    <p className="text-xl font-bold my-1">  {item.projectDetails.title}</p>
                </div>
                <div className="flex flex-row text-[15px]">
                    <p> {item.projectDetails.hourlyRate}  - &nbsp;  </p>
                    <p> {item.projectDetails.experienceLevel} - &nbsp;  Est. Time: &nbsp;  </p>
                    <p> {item.projectDetails.duration}</p>

                </div>
                <p className="mt-4 mb-4 text-gray-900 text-[17px]"> {item.jobDescription}</p>
                <div className="flex flex-row space-x-4 mt-2 font-medium" > {item.skillsAndExpertise.skills.map((item: string) =>
                    <p className="px-4 py-2 bg-gray-600 bg-opacity-10 rounded-2xl">{item}</p>)}</div>
            </div>
        </div>
    )

}