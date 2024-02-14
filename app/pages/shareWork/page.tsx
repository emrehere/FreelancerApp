export default function Page() {

    return (
        <div className="min-h-[100vh] pt-[15vh] pb-[10vh] text-gray-800 tracking-wide">
            <div className="flex flex-col w-[95vw] min-h-screen mx-auto bg-gradient-to-br from-blue-100 to-white bg-opacity-5
             rounded-t-3xl shadow-lg shadow-gray-300 pb-[20vh]  ">
                <div className="w-[90vw] ">
                    <p className="text-4xl font-semibold flex items-center justify-center mx-auto mt-12 ">Get Your Work Done </p>
                    </div>
                <div className="flex  mt-4 flex-row space-x-[2vw] mx-auto">
                    


                    <div className="border-2 border-gray-300 border-opacity-70 w-[35vw] mt-[5vh] p-4">
                        <p className="text-xl font-medium mb-2">Work Details</p>
                        <div className="mt-[5vh] text-lg py-2 flex justify-between" >
                            <label> Title : &nbsp; </label>
                            <input className="outline-blue-200 h-10 w-[80%] px-2" type="text" placeholder="Web Developer" />
                        </div>
                        <div className=" text-lg py-2 flex justify-between" >
                            <label> Hourly Rate : &nbsp; </label>
                            <input className="outline-blue-200 h-10 w-[70%] px-2" type="text" placeholder="Web Developer" />
                        </div>
                        <div className=" text-lg py-2 flex justify-between" >
                            <label> Duration : &nbsp; </label>
                            <input className="outline-blue-200 h-10 w-[70%] px-2" type="text" placeholder="Web Developer" />
                        </div>
                        <div className="text-lg py-2 flex justify-between" >
                            <label> Experince Level : &nbsp; </label>

                            <select className="outline-blue-200 h-10 w-[60%] px-2">
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="expert">Expert</option>
                            </select>
                        </div>
                        <div className="text-lg py-2 flex justify-between" >
                            <label> Remote : &nbsp; </label>

                            <select className="outline-blue-200 h-10 w-[80%] px-2">
                                <option value="onsite">Onsite</option>
                                <option value="remote">Remote</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                        </div>




                    </div>
                    <div className="border-2 border-gray-300 border-opacity-70 w-[55vw] mt-[5vh] p-4">

                     </div>
                </div>
            
            </div>
            
        </div>
    )
}