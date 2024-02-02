"use client";
import React from "react";


import backgroundImage from '../public/landingPic.webp'

const YourComponent: React.FC = () => {
  const backgroundStyle: React.CSSProperties = {
    background: `url(${backgroundImage}) center center / cover no-repeat`,
    height: "100vh",
    width: "100%",
    // Add more styles as needed
  };
  

  return (
    <div style={backgroundStyle}>
      haydddddddda
    </div>
  );
};

export default YourComponent;
