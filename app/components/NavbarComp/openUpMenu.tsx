import React from 'react';
import OpenUpMenuItems from '../../datas/navOpenUp';

const OpenUpMenu: React.FC = () => (
  <div>
    <div className='bg-blue-50 rounded-md font-bold p-2'>
      {OpenUpMenuItems.map((item: { title: string; subTitle: string }) => (
        <div className='mb-4 flex flex-col items-center justify-center hover:text-orange-500 ' key={item.title}>
          <span style={{ fontSize: '16px' }}>{item.title}</span>
          <span style={{ fontSize: '12px' }} className='text-gray-600' >{item.subTitle}</span>          
          <div className='bg-gray-300 h-0.5 w-[10vw]' ></div>
        </div>
      ))}
      
    </div>
  </div>
);

export default OpenUpMenu;
