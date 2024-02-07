"use client"
import React, { useState } from "react";

export default function SignUp() {

    const [clicked, setClicked] = useState("");

    const hireOn = () => {
        setClicked("hire");
    }

    const freelancerOn = () => {
        setClicked("freelancer");
    }

  return (
    <div style={{backgroundImage: `url("./signupHero.jpg")`,}}
    className="bg-cover h-full w-full " >
        <div className="pt-[15vh] tracking-wide leading-relaxed">
      <div className="w-[50vw] h-[110vh] bg-blue-50 mt-[10vh] flex  mx-auto shadow-xl shadow-gray-800 ">
        <div className="w-[40vw] space-y-4 flex-col flex mx-auto">
        <h1 className="text-4xl font-semibold pt-[10vh] text-gray-900">Start living your work dream</h1>
       
        <p className="text-sm text-gray-600 pt-[5vh]">What do you want to do? (you can edit this later)</p>
        <div className="flex flex-row justify-between ">
        <button onClick={hireOn} style={{backgroundColor: clicked === "hire" ? "#4299e1":"" , color: clicked === "hire" ? "white" : ""  }} className="border-2 rounded-xl border-blue-500 flex items-center text-blue-500
        bg-white px-8 py-4 w-[19vw] h-[15vh] hover:bg-blue-500 hover:text-white font-semibold text-[14px] flex-col">
            I WANT TO <span>HIRE A FREELANCER</span></button>
        <button onClick={freelancerOn} style={{backgroundColor: clicked === "freelancer" ? "#4299e1" : "", color: clicked === "freelancer" ? "white" : ""}} className="border-2 rounded-xl border-blue-500 flex items-center text-blue-500 
         bg-white px-8 py-4 w-[19vw] h-[15vh] hover:bg-blue-500 hover:text-white font-semibold text-[14px] flex-col ">
            I WANT TO <span>WORK AS A FREELANCER</span></button>
        </div>
        <div className="flex flex-row justify-between pt-[5vh]">
        <input className="w-[19vw] h-11 p-2" type="text" placeholder="First Name" />
        <input className="w-[19vw] h-11 p-2"  type="text" placeholder="Last Name" />
        </div>
        <input className="w-[40vw] h-11 p-2"  type="text" placeholder="Email" />
        <input className="w-[40vw] h-11 p-2" type="text" placeholder="Password" />
        <div className="pt-[5vh]">
        <button className="bg-orange-600 py-4 font-bold text-white tracking-widest rounded-xl
        hover:scale-105  w-[40vw]  ">SIGN UP</button>
        <p className="text-sm pt-4 text-gray-400">Already have an account?</p>
        </div>
      </div>
      </div>
      </div>
      <div className="h-[15vh]"></div>
    </div>
  );
}
