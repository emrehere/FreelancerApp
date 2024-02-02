// NavItem.tsx
import React from 'react';
import Link from 'next/link';


interface NavItemProps {
  title: string;
  href: string;
  icon?: React.ReactNode;

}

const NavItem: React.FC<NavItemProps> = ({ title, href, icon }) => {

  

  return (
    <div className="text-slate-950 dark:text-slate-50 tracking-widest shadow-xl
     bg-blue-100 px-2 py-2 bg-opacity-10 rounded-md  ">
      <div className='hover:text-orange-500'>
        <Link className='flex flex-row items-center space-x-2' href={href}>
          <span>{icon}</span>
          <span> {title}</span>
          
         
        </Link>
      </div>
    </div>
  );
};

export default NavItem;
