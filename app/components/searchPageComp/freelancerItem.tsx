export default function FreelancerItem({ item }: any) {
    return (
        <div>
            <div className="bg-orange-50 bg-opacity-50 hover:bg-orange-100 hover:bg-opacity-60 shadow-sm shadow-orange-300
             flex flex-col m-4 w-[80vw] h-[44vh] min-h-[250px] py-4 px-8 space-y-4 rounded-xl">
                <div className="flex flex-row">
                    <img className="rounded-full h-24 w-24" src="/kadin.jpg" />
                    <div className="ml-8 space-y-1 ">
                        <div className="flex flex-row items-center space-x-4 w-[64vw]">
                            <p className="font-bold text-[18px]">{item.freelancer.name}</p>
                            <p className="text-[14px] text-gray-600 ">{item.freelancer.location}</p>
                            <p className="flex flex-grow"></p>
                            <button className="border-2 hover:shadow-orange-200 hover:shadow-md rounded-3xl font-medium border-orange-500 text-orange-500 px-8 tracking-wide py-2 ">View Profile</button>
                            
                        </div>

                        <p className="text-[16px] text-gray-600 ">
                            {item.freelancer.jobSuccess} &nbsp;Job Success
                        </p>


                        <p className="text-[20px] font-semibold">This is freelancer Job Title </p>
                    </div>

                </div>
                <div className="flex flex-row space-x-8">
                    {
                        item.skills.map((item: string) => {
                            return (
                                <p className="px-4 py-2 bg-gray-300 bg-opacity-25 rounded-2xl">{item}</p>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        item.profileDescription.length > 250 ?
                            `${item.profileDescription.slice(0, 250)}...`
                            : item.profileDescription
                    }
                </div>
            </div>
        </div>
    )
}