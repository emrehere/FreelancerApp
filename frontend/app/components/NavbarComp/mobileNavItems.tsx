// NavItem.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';



interface NavItemProps {
  title: string;
  href: string;
  icon?: React.ReactNode;

}

const MobileNavItems: React.FC<NavItemProps> = ({ title, href, icon }) => {

  

   

  return (
    <div  className="text-gray-800  tracking-widest 
       ">
      <div className='hover:text-orange-500  px-4 py-2 
      border-b-2 border-gray-400 border-opacity-40'>
        <Link className='flex flex-row items-center space-x-2 justify-between' href={href}>
          <span className='left-0'>{icon}</span>
          <span className='flex flex-grow'></span>
          <span> {title}</span>
          
       
        </Link>
      </div>
    </div>
  );
};

export default MobileNavItems;
