import React from "react";

export default function SignUp() {
  return (
    <div style={{backgroundImage: `url("./signupHero.jpg")`,}}
    className="bg-cover h-full w-full " >
        <div className="pt-[15vh]">
      <div className="w-[50vw] h-[110vh] bg-blue-50 mt-[10vh] flex  mx-auto ">
        <div className="w-[40vw] space-y-4 flex-col flex mx-auto">
        <h1 className="text-3xl font-semibold pt-[10vh] text-blue-700">Start living your work dream</h1>
       
        <p className="text-sm text-gray-500 ">What do you want to do? (you can edit this later)</p>
        <div className="flex flex-row justify-between">
        <button className="border-2 border-blue-500 flex items-center px-8 py-4 w-[19vw] h-[15vh] ">I WANT TO HIRE A FREELANCER</button>
        <button className="border-2 border-blue-500 flex items-center px-8 py-4 w-[19vw] h-[15vh] ">I WANT TO WORK AS A FREELANCER</button>
        </div>
        <div className="flex flex-row justify-between">
        <input className="w-[19vw]" type="text" placeholder="First Name" />
        <input className="w-[19vw]"  type="text" placeholder="Last Name" />
        </div>
        <input className="w-[40vw]"  type="text" placeholder="Email" />
        <input className="w-[40vw]" type="text" placeholder="Password" />

        <button className="bg-orange-600 py-2 px-4 w-[40vw]">SIGN UP</button>
        <p className="text-sm text-gray-400">Already have an account?</p>
      </div>
      </div>
      </div>
      <div className="h-[15vh]"></div>
    </div>
  );
}
