"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/LandingComp/searchBar";
import Navbar from "./components/NavbarComp/navbar";
import dynamic from "next/dynamic";
import UserNavbar from "./components/LoggedInNavbar/UserNavbar";
import AlreadyHaveAccount from "./components/warnings/AlreadyHaveAccount";
import { useSelector, useDispatch } from 'react-redux';
import Backdrop from "./components/warnings/BackDrop";


const Page2 = dynamic(() => import('./components/LandingComp/page2'), {
  ssr: false
});

const Page3 = dynamic(() => import('./components/LandingComp/page3'), {
  ssr: false
});

const Footer = dynamic(() => import('./components/footer'), {
  ssr: false
});



const desktopBackgroundImage = '/ada1.webp';
const mobileBackgroundImage = '/cropada1.webp';



const Page: React.FC = () => {

  const [color, setColor] = useState('red');
  const [backgroundImage, setBackgroundImage] = useState(desktopBackgroundImage);
  const [tokenExists, setTokenExists] = useState(false);
  
  const homeLink = "/";

  const warningModal = useSelector((state: any) => state.navbar.warningModal);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setTokenExists(true);
    }
  }, []);
 

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
    <div className="flex flex-col h-[200rem] sm:h-[145rem] ">
      
    <div className="fixed top-0 left-0 w-full z-10 sm:block hidden ">
   
    {
        tokenExists ? <UserNavbar /> : <Navbar />
    }
    {
        warningModal ? <Backdrop /> : null
    }
    </div>
    

    <div>
    
      
    <div  style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', width: '100vw',
     backgroundSize: 'cover' }} >
      
      <div className="flex items-center sm:h-[110vh] h-[55rem] sm:mt-[12vh] pt-[1rem]">
        <div className="flex flex-col">
      <div className="flex flex-col sm:w-[40vw] w-[90vw] sm:ml-[3vw] tracking-wide leading-relaxed
       bg-blue-50 items-center -mt-[15vh] pl-2  rounded-3xl ml-[5vw]" >
        <h1 style={{color: color}} className="sm:text-5xl text-4xl  font-extrabold  p-4">Parlak fikirleri gerçekleştir </h1>
        <h2 className="text-2xl text-gray-700 p-4 font-semibold ">1 milyon işletme tarafından güvenilen freelancer web sitesinde küresel yeteneklere erişim sağlayın.</h2>
      </div>
      <div className="ml-[3vw] mt-[4vh]" >
      <SearchBar hrefFromParent={'/pages/jobNoticeForm'}  color={color} mytoken={false}  />
      </div>
      </div>
      </div>
      <div className="-mt-[9vh] sm:mt-0 h-[5vh]"></div>
      <Page2 />
      <div className="sm:h-[15vh] h-[2vh]"></div>
      <Page3 />
    </div>
    </div>
    <div className="flex-grow" ></div>
     <Footer />
     </div>
  );
};

export default Page;