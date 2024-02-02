"use client";
import React from "react";
import Image from 'next/image'; // Import the Image component from Next.js

import backgroundImage from '../public/ada1.jpg';

const myBackgroundImage = '/ada1.jpg';

const Page: React.FC = () => {
  return (
    <div style={{ backgroundImage: `url(${myBackgroundImage})`, height: '100vh', width: '100vw', backgroundSize: 'cover' }} 
     >
    {/* Use the Image component with the src attribute */}
      {/* Other components or content */}
    </div>
  );
};

export default Page;