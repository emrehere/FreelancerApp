import React from "react";

export default function SignUp() {
  return (
    <div style={{backgroundImage: `url("./signupHero.jpg")`,}}
    className="bg-cover h-full w-full " >
        <div className="pt-[15vh]">
      <div className="w-[50vw] h-[110vh] bg-blue-50 mt-[10vh] flex  mx-auto
      space-y-4 flex-col px-[5%] ">
    
        <h1 className="text-3xl font-semibold pt-[10vh] text-blue-700">Start living your work dream</h1>
       
        <p className="text-sm text-gray-500 ">What do you want to do? (you can edit this later)</p>
        <button className="border-2 border-blue-500 flex items-center px-8 py-4 w-[15vw] h-[15vh] ">I WANT TO HIRE A FREELANCER</button>
   
      </div>
      </div>
      <div className="h-[15vh]"></div>
    </div>
  );
}
