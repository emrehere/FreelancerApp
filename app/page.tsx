"use client";
import React from "react";


const myBackgroundImage = '/ada1.jpg';

const Page: React.FC = () => {
  return (
    <div  style={{ backgroundImage: `url(${myBackgroundImage})`, height: '100vh', width: '100vw', backgroundSize: 'cover' }} >
      <div className="flex items-center  h-screen">
      <div className="flex flex-col w-[40vw]  ml-[3vw] tracking-wide leading-relaxed
       bg-blue-50 items-center -mt-[20vh] pl-2  rounded-3xl " >
        <h1 className="text-5xl font-extrabold text-pink-600 p-4">Parlak fikirleri gerçekleştir</h1>
        <h2 className="text-2xl text-gray-700 p-4 font-semibold ">1 milyon işletme tarafından güvenilen freelancer web sitesinde küresel yeteneklere erişim sağlayın.</h2>
      </div>
      </div>
    </div>
  );
};

export default Page;