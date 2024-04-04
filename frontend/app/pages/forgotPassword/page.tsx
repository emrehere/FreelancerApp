"use client"
import CheckboxComp from "@/app/components/radixUI/checkboxComp"
export default function Page() {

    return (
        <div className="min-h-[78vh] bg-blue-100  pt-[18vh] pb-[10vh] flex ">
            <div className=" flex flex-col bg-white bg-opacity-50 rounded-xl shadow-lg shadow-gray-300 w-[80vw] p-8 mx-auto  items-center">
                
                    <h1 className="text-4xl font-medium text-gray-800 p-4">Forgot your Password?</h1>
          
                <div className="flex flex-col mt-12">
                    <label className="mb-2 font-semibold text-gray-700 text-lg">Email</label>
                    <input className="h-10 sm:w-[25vw] w-[60vw] border-2 border-orange-500 bg-orange-300 bg-opacity-10 outline-orange-500" type="text" />
                </div>
                <div className="mt-8 mb-4">
                    <CheckboxComp NamedByParent="I'm not a robot" />
                </div>
                <div>
                    <button className="bg-orange-500 text-white w-64 py-4 rounded-xl font-bold text-lg">RESET</button>
                </div>
            </div>
        </div>
    )
}