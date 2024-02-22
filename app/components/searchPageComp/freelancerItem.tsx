import Image from "next/image"

export default function FreelancerItem({ item }: any) {
    return (
        <div>
            <div className="overflow-x-hidden bg-orange-50 bg-opacity-50 hover:bg-orange-100 hover:bg-opacity-60 shadow-sm shadow-orange-300
             flex flex-col m-4 sm:w-[80vw] w-[95vw] h-[44vh] min-h-[200px] py-4 sm:px-8 space-y-4 rounded-xl">
                <div className="flex flex-row">
                <Image width={300} height={300} className="rounded-full h-24 w-24" src="/kadin.webp" alt="kadin" />
                    <div className="ml-8 space-y-1 ">
                        <div className="flex flex-row items-center space-x-4 w-[64vw]">
                            <p className="font-bold text-[18px]">{item.freelancer.name}</p>
                            <p className="text-[14px] text-gray-600 ">{item.freelancer.location}</p>
                            <p className="flex flex-grow"></p>
                            <button className="hidden sm:block border-2 hover:shadow-orange-200 hover:shadow-md rounded-3xl font-medium border-orange-500 text-orange-500 px-8 tracking-wide py-2 ">View Profile</button>

                        </div>

                        <p className="text-[16px] text-gray-600 ">
                            {item.freelancer.jobSuccess} &nbsp;Job Success
                        </p>


                        <p className="text-[20px] font-semibold">This is freelancer Job Title </p>
                    </div>

                </div>
                <div className="flex flex-wrap sm:space-x-8 space-x-2  ml-2">
                    {item.skills.map((item: string, index: number) => (
                        <p key={index} className="sm:px-4 sm:py-2 px-2 py-2 bg-gray-300 bg-opacity-25 rounded-2xl ">{item}</p>
                    ))}
                </div>

                <div className="sm:p-2 p-4">
                    {
                        item.profileDescription.length > 250 ?
                            `${item.profileDescription.slice(0, 250)}...`
                            : item.profileDescription
                    }
                </div>
                <button className="m-4 border-2 hover:shadow-orange-200 hover:shadow-md rounded-3xl font-medium border-orange-500 text-orange-500  tracking-wide py-2 ">View Profile</button>
            </div>
        </div>
    )
}