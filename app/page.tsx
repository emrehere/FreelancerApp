"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/LandingComp/searchBar";


const myBackgroundImage = '/ada1.jpg';



const Page: React.FC = () => {

  const [color, setColor] = useState('red');

  function changeFontColor() {
    setInterval(() => {
      const colors=[ 'darkorange', 'darkcyan', 'darkmagenta', 'darkred', 'darkblue' ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }, 3000);
}

 

  useEffect(() => {
    changeFontColor();
  }, []);

  return (
    <div  style={{ backgroundImage: `url(${myBackgroundImage})`, height: '100vh', width: '100vw', backgroundSize: 'cover' }} >
      <div className="flex items-center h-[100vh]">
        <div className="flex flex-col">
      <div className="flex flex-col w-[40vw]  ml-[3vw] tracking-wide leading-relaxed
       bg-blue-50 items-center -mt-[20vh] pl-2  rounded-3xl " >
        <h1 style={{color: color}} className="text-5xl font-extrabold  p-4">Parlak fikirleri gerçekleştir</h1>
        <h2 className="text-2xl text-gray-700 p-4 font-semibold ">1 milyon işletme tarafından güvenilen freelancer web sitesinde küresel yeteneklere erişim sağlayın.</h2>
      </div>
      <div className="ml-[3vw] mt-[4vh]" >
      <SearchBar  color={color} />
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default Page;