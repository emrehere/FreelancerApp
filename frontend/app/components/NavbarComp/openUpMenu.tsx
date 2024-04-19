"use client";
import React, { useEffect, useState } from 'react';
import OpenUpMenuItems from '../../datas/navOpenUp';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AlreadyHaveAccount from '../warnings/AlreadyHaveAccount';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store/RootReducer';
import { warningModalOpen, navSearchToggle, saveTheLink } from '@/app/components/NavbarComp/NavReducer';

interface OpenUpMenuProps {
  styleParent?: React.CSSProperties;
}

interface itemsProps {
  title: string;
  subTitle: string;
  href: string;
  noAuthHref: string;
}

const OpenUpMenu: React.FC<OpenUpMenuProps> = ({ styleParent }) => {
  const [tokenExists, setTokenExists] = useState<boolean>(false);
 

  const warningModal = useSelector((state: RootState) => state.navbar.warningModal);

  const dispatch = useDispatch();

  const router  = useRouter();

  const hrefFunction = (item : itemsProps) => {
    if (tokenExists) {
      router.push(item.href);
    } else {
      dispatch(saveTheLink( item.noAuthHref ));
      console.log(item.noAuthHref)
      dispatch(navSearchToggle());
      document.body.style.overflow = 'hidden';
      dispatch(warningModalOpen( true ));
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setTokenExists(true);
    }
  }, []);

  return (
    <div>
      <div style={styleParent} className='bg-blue-50 rounded-md font-bold p-2'>
        {OpenUpMenuItems.map((item: itemsProps) => (
          <div onClick={() => hrefFunction(item)}  key={item.title}>
            <div className='mb-4 flex flex-col items-center justify-center hover:text-orange-500' key={item.title}>
              <span style={{ fontSize: '16px' }}>{item.title}</span>
              <span style={{ fontSize: '12px' }} className='text-gray-600'>{item.subTitle}</span>
              <div className='bg-gray-300 h-0.5 w-[10vw]'></div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default OpenUpMenu;
