"use client"
import React, { useState } from "react";

export default function SignUp() {

    const [clicked, setClicked] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [surname , setSurname] = useState("")
    const [signupError, setSignupError] = useState("");
    const [loading, setLoading] = useState(false)
    

    const hireOn = () => {
        setClicked("hire");
    }

    const freelancerOn = () => {
        setClicked("freelancer");
    }

    const saveTheUser = async () => {
        setLoading(true)
        try {
          const res = await fetch('http://localhost:8008/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name,
              surname,
              email,
              password
            })
          })
          console.log(res)
          if (res.ok) {
    
            const data = await res.json();
    
    
            localStorage.setItem('token', JSON.stringify(data.token));
    
            console.log('user saved')
    
          } else {
            const errorData = await res.json();
            setSignupError(errorData.error)
          }
    
        } catch (error) {
          console.log(error)
        }
        finally {
          setLoading(false)
        }
      }
  
  return (
    <div style={{backgroundImage: `url("./signupHero.jpg")`,}}
    className="bg-cover h-full w-full " >
        <div className="pt-[15vh]  tracking-wide leading-relaxed">
      <div className="sm:w-[50vw] w-[90vw] sm:h-[110vh] h-[53rem] bg-blue-50 sm:mt-[10vh] flex  mx-auto shadow-xl shadow-gray-800 ">
        <div className="sm:w-[40vw] w-[80vw] space-y-4 flex-col flex mx-auto">
        <h1 className="text-4xl font-semibold sm:pt-[10vh] pt-[5vh] text-gray-900">Start living your work dream</h1>
       
        <p className="text-sm text-gray-600 sm:pt-[5vh] pt-[2vh]">What do you want to do? (you can edit this later)</p>
        <div className="flex sm:flex-row flex-col justify-between ">
        <button onClick={hireOn} style={{backgroundColor: clicked === "hire" ? "#4299e1":"" ,
         color: clicked === "hire" ? "white" : ""  }} 
        className="border-2 rounded-xl border-blue-500 flex items-center justify-center text-blue-500
        bg-white px-8 py-4 sm:w-[19vw] mb-2 w-full sm:h-[15vh] h-[14vh] hover:bg-blue-500
         hover:text-white  font-semibold text-[14px] flex-col">
            I WANT TO <span>HIRE A FREELANCER</span></button>
        <button onClick={freelancerOn} style={{backgroundColor: clicked === "freelancer" ? "#4299e1" : "", color: clicked === "freelancer" ? "white" : ""}}
         className="border-2 rounded-xl border-blue-500 flex items-center justify-center text-blue-500 
         bg-white px-8 py-4 sm:w-[19vw] w-full sm:h-[15vh] h-[14vh] mb-2 hover:bg-blue-500
          hover:text-white font-semibold text-[14px] flex-col  ">
            I WANT TO <span>WORK AS A FREELANCER</span></button>
        </div>
        <div className="flex flex-row justify-between pt-[5vh]">
        <input value={name} onChange={(e) => setName(e.target.value)} className="sm:w-[19vw] w-[38vw] h-11 p-2" type="text" placeholder="First Name" />
        <input value={surname} onChange={(e) => setSurname(e.target.value)} className="sm:w-[19vw] w-[38vw] h-11 p-2"  type="text" placeholder="Last Name" />
        </div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="sm:w-[40vw] w-[80vw] h-11 p-2"  type="text" placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} className="sm:w-[40vw] w-[80vw] h-11 p-2" type="text" placeholder="Password" />
        <div className="sm:pt-[5vh] pt-[3vh]">
        <button onClick={saveTheUser} className="bg-orange-600 py-4 font-bold text-white tracking-widest rounded-xl
        hover:scale-105  sm:w-[40vw]  w-[80vw] ">SIGN UP</button>
        <p className="text-sm pt-4 text-gray-400">Already have an account?</p>
        </div>
      </div>
      </div>
      </div>
      <div className="sm:h-[15vh] h-[8vh]"></div>
    </div>
  );
}
