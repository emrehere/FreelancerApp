"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/LandingComp/searchBar";
import Page2 from "./components/LandingComp/page2";
import Page3 from "./components/LandingComp/page3";


const desktopBackgroundImage = '/ada1.jpg';
const mobileBackgroundImage = '/cropada1.jpg';



const Page: React.FC = () => {

  const [color, setColor] = useState('red');
  const [backgroundImage, setBackgroundImage] = useState(desktopBackgroundImage);

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

  useEffect(() => {
    
    const handleResize = () => {
      const newBackgroundImage = window.innerWidth < 500 ? mobileBackgroundImage : desktopBackgroundImage;
      setBackgroundImage(newBackgroundImage);
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="h-[380vh]">

    <div  style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', width: '100vw', backgroundSize: 'cover' }} >
      <div className="flex items-center h-[110vh] mt-[12vh]">
        <div className="flex flex-col">
      <div className="flex flex-col sm:w-[40vw] w-[90vw] sm:ml-[3vw] tracking-wide leading-relaxed
       bg-blue-50 items-center -mt-[20vh] pl-2  rounded-3xl ml-[5vw]" >
        <h1 style={{color: color}} className="text-5xl font-extrabold  p-4">Parlak fikirleri gerçekleştir</h1>
        <h2 className="text-2xl text-gray-700 p-4 font-semibold ">1 milyon işletme tarafından güvenilen freelancer web sitesinde küresel yeteneklere erişim sağlayın.</h2>
      </div>
      <div className="ml-[3vw] mt-[4vh]" >
      <SearchBar  color={color} />
      </div>
      </div>
      </div>
      <div className="h-[5vh]"></div>
      <Page2 />
      <div className="h-[15vh]"></div>
      <Page3 />
    </div>
    </div>
  );
};

export default Page;