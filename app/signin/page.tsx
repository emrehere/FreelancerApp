"use client"
import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import CheckboxComp from '../components/radixUI/checkboxComp';
import { FaDotCircle } from "react-icons/fa";

export default function SingIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordType, setPasswordType] = useState("password")
    const [warning, setWarning] = useState(false)

    const signIn = () => {
        if(email.includes("@") && password.length >= 6) {
            console.log(email, password)
        } else {
            setWarning(true)
            setTimeout(() => {
                setWarning(false)
            }, 1500)
        }
    }

    const changePasswordType = () => {
        setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
        setTimeout(() => {
          setPasswordType("password");
        }, 750);
      };

    return (       
        <div className='bg-blue-50 sm:pb-[20vh] pb-[5vh] pt-[5vh] '>
            <div className="flex flex-col items-center justify-center
            sm:h-[115vh] h-[90vh] w-[90vw] sm:mt-[10vh] mt-[5vh] bg-white mx-auto  " >
                <h1 className='text-3xl font-bold text-gray-800 mb-2 '>Log In</h1>
                <p className='font-thin text-gray-500 text-md mb-8'>Don't have an account?
                 <span className='text-orange-500 text-lg font-semibold '> Sign Up</span></p>
                    <div>
                        <div className='text-white hover:text-gray-800 font-semibold transition ease-in-out flex 
                        sm:flex-row flex-col justify-between w-[70vw] sm:space-y-0 space-y-4 '>
                            
                            <button className='bg-blue-900 hover:bg-white px-8 py-4 rounded-xl transition ease-in-out flex justify-center items-center flex-row'> 
                            <span  className='text-blue-600 p-2 bg-blue-100 shadow-lg shadow-blue-500 rounded-xl mr-4 '><FaFacebookF /></span> Log in with Facebook</button>
                            <button className='bg-red-500 hover:bg-white px-8 py-4 rounded-xl transition ease-in-out flex justify-center items-center flex-row'>
                               <span  className='text-red-600 p-2 bg-blue-100 shadow-lg shadow-red-500 rounded-xl mr-4 '><FaGoogle /></span> Log in with Google</button>
                            <button className='bg-blue-500 hover:bg-white px-8 py-4 rounded-xl transition ease-in-out flex justify-center items-center flex-row'>
                               <span className='text-blue-600 p-2 bg-blue-100 shadow-lg shadow-blue-500 rounded-xl mr-4 '><FaLinkedinIn /></span> Log in with Linkedin</button>
                        </div>
                        <div className='flex flex-row mt-16 items-center justify-center'>
                        <div className='bg-gray-300 h-0.5 w-[30vw] '></div>
                        <p className='text-gray-500 w-[3vw] font-medium opacity-50  flex justify-center'>or</p>
                        <div className='bg-gray-300 h-0.5 w-[30vw] '></div>
                        </div>
                        <div className='flex items-center justify-center flex-col space-y-4 mt-[5vh]'>
                            <div className=' flex flex-col sm:w-[35vw] w-[70vw] mx-auto tracking-wider leading-8'>
                        <p className='text-gray-500 font-bold'>EMAIL</p>
                        <input className='sm:w-[35vw] w-[70vw] bg-blue-200 bg-opacity-50 h-12 rounded-xl outline-orange-500' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p className='text-gray-500 font-bold mt-4'>PASSWORD</p>
                        <div className='flex items-center'>
                        <input className='sm:w-[35vw] w-[70vw] bg-blue-200 bg-opacity-50 h-12 rounded-xl outline-orange-500' type={passwordType} value={password} onChange={(e) => setPassword(e.target.value)} /> 
                        <span onClick={changePasswordType} className=' sm:-ml-[2vw] -ml-[6vw] text-gray-500 '><FaDotCircle /></span>
                        </div>
                        <div className='text-gray-500  font-semibold mt-4 mx-2 items-center flex flex-row justify-between'>
                        <CheckboxComp NamedByParent="Remember me" />
                        <p className='font-medium text-[13px] '>Forgot Password?</p>
                        
                        </div>
                  
                    <button onClick={signIn} className='text-white bg-orange-500 w-[35vw] rounded-xl
                    h-12 mt-4 font-bold tracking-widest text-xl hover:scale-105 transition ease-in-out' >LOG IN</button>
                    {
                        warning ? <p className='text-red-500 flex justify-center mt-2'>Please check your email and password</p> : null
                    }
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}