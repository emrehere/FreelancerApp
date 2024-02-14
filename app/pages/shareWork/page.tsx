"use client"
import React, { useState } from 'react'

export default function Page() {


    const [skills, setSkills] = useState<string[]>([]);
    const [newSkill, setNewSkill] = useState('');

    const handleSkillChange = (e) => {
        setNewSkill(e.target.value);
    };

    const handleAddSkill = () => {
        if (newSkill.trim() !== '') {
            setSkills([...skills, newSkill]);
            setNewSkill('');
        }
    };

    const handleRemoveSkill = (index) => {
        const newSkills = [...skills];
        newSkills.splice(index, 1);
        setSkills(newSkills);
    }

    const sortedSkills = skills.sort((a, b) => a.localeCompare(b));

    return (
        <div className="min-h-[100vh] pt-[15vh] pb-[10vh] text-gray-800 tracking-wide">
            <div className="flex flex-col w-[95vw] min-h-screen mx-auto bg-gradient-to-br from-blue-100 to-white bg-opacity-5
             rounded-t-3xl shadow-lg shadow-gray-300 pb-[10vh]  ">
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
                            <input className="outline-blue-200 h-10 w-[70%] px-2" type="text" placeholder="$15" />
                        </div>
                        <div className=" text-lg py-2 flex justify-between" >
                            <label> Duration : &nbsp; </label>
                            <input className="outline-blue-200 h-10 w-[70%] px-2" type="text" placeholder="3 months" />
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
                        <div className="text-lg py-2 flex justify-between" >
                            <label> Location : &nbsp; </label>
                            <input className="outline-blue-200 h-10 w-[70%] px-2" type="text" placeholder="Adana" />
                        </div>




                    </div>
                    <div className="border-2 border-gray-300 border-opacity-70 w-[55vw] mt-[5vh] p-4">
                        <label className='text-xl font-medium '>Skills</label>
                        <div className='mt-[5vh]'>
                            <div>
                            <input
                                type="text"
                                value={newSkill}
                                onChange={handleSkillChange}
                                placeholder="Add skill"
                                className='outline-blue-200 h-10 w-[70%] px-2'
                            />
                            <button className='bg-orange-500 text-white w-[10%] h-10 font-semibold rounded p-2' onClick={handleAddSkill}>Add</button>
                            </div>
                            <div>
                            <ul>
                                { sortedSkills.map((skill) => (
                                    <div className='flex flex-row  w-[80%]'>
                                    <li className='bg-blue-200 w-full flex  justify-between' key={skill}>
                                        {skill}
                                        <button className='bg-red-500 text-white rounded px-9 h-10 w-[10%]' onClick={() => handleRemoveSkill(skill)} >X</button>
                                        </li>
                                    
                                    </div>
                                ))}
                            </ul>
                            </div>
                            <div className='mt-[5vh] flex flex-col'>
                                <label className='text-lg font-medium text-gray-800 mb-2'> Description</label>
                                <textarea placeholder='Add description' className='outline-blue-200 h-56 w-[80%] p-2 ' />
                            </div>
                        </div>
                        

                    </div>
                    
                </div>
                <div className='mt-[10vh] flex justify-center '>
                <button className='bg-orange-500 tracking-wider text-white w-[30%] text-xl h-10 flex items-center justify-center font-semibold rounded-xl py-4'>Share Now</button>
                </div>

            </div>

        </div>
    )
}