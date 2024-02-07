"use client"
import React, { useState } from 'react'

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
        }, 500);
      };

    return (       
        <div className='bg-blue-50'>
            <div className="flex flex-col items-center justify-center
            h-[75vh] w-[90vw] mt-[10vh] bg-white mx-auto " >
                <h1 className='text-3xl font-bold text-gray-800 mb-2'>Log In</h1>
                <p className='font-thin text-gray-500 text-md mb-8'>Don't have an account?
                 <span className='text-orange-500 text-lg '> Sign Up</span></p>
                    <div>
                        <div className='text-white hover:text-gray-800 flex flex-row justify-between w-[70vw]'>
                            
                            <button className='bg-blue-900 hover:bg-white px-8 py-4 rounded-xl'>Log in with Facebook</button>
                            <button className='bg-red-500 hover:bg-white px-8 py-4 rounded-xl'>Log in with Google</button>
                            <button className='bg-blue-500 hover:bg-white px-8 py-4 rounded-xl'>Log in with Linkedin</button>
                        </div>
                        <div className='flex items-center justify-center flex-col space-y-4 mt-[10vh]'>
                        <p>Email</p>
                        <input  type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p>Password</p>
                        <div>
                        <input  type={passwordType} value={password} onChange={(e) => setPassword(e.target.value)} /> 
                        <span onClick={changePasswordType} className='absolute -ml-[2vw]'>dot</span>
                        </div>
                  
                    <button onClick={signIn} >Sign In</button>
                    {
                        warning ? <p className='text-red-500'>Please check your email and password</p> : null
                    }
                    </div>
                    </div>
            </div>
        </div>
    )
}