import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Line from '../ui/Line'
import OpenMenuData from '@/app/datas/openMenu'
import { IoMdClose } from "react-icons/io";
import { openMenuSetter } from './UserNavbarReducer'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/RootReducer'
import { useRouter } from 'next/navigation'
import { loginCompleteSetter } from '../../pages/signin/signinReducer'
import { registerCompleteSetter } from '@/app/pages/signup/signupReducer'

function OpenMenu() {

  const dispatch = useDispatch();
  const router = useRouter();

  const openMenu = useSelector((state:RootState) => state.UserNavbarReducer.openMenu)
 

  const logout = ( buttonTitle : string ) => {
    if (buttonTitle === "Log out") {
      localStorage.removeItem('token');
      dispatch(openMenuSetter(false));
      dispatch(loginCompleteSetter(false));
      dispatch(registerCompleteSetter(false));
      router.push('/');
    } else {
      dispatch(openMenuSetter(false));
    }
  }

  return (
    <div className='flex '>
      <div className='bg-blue-50 h-92 w-64 rounded-xl shadow-xl shadow-gray-500 '>
        <Link href="/pages/userPanel">
          <div className='flex flex-row items-center space-x-2 mt-4 mx-2'>
            <div className='relative'>
              <Image src="/justApic.webp" width={80} height={80} className='object-cover rounded-full ' alt="kadin" />

            </div>
            <div>
              <p>Emre Yıldırım</p>
              <p className='text-gray-500 text-sm' >blablabla@blabla.com</p>
            </div>

          </div>
        </Link>
        <div>
          {
            OpenMenuData.map((item, index) => (
              <div onClick={ () => logout(item.title)} className='flex flex-col mx-auto text-gray-600 font-medium 
      text-base tracking-widest my-3'>
                {
                  item.href ? (
                    <Link href={item.href}>
                      <p className='flex justify-center items-center w-full'>{item.title}</p>
                     </Link>
                  ) :
                    <p className='flex justify-center items-center w-full cursor-pointer'>{item.title}</p>
                }
                {
                  index < OpenMenuData.length - 1 && <Line />
                }
              </div>
            ))
          }
        </div>
      </div>
      <IoMdClose onClick={() => dispatch(openMenuSetter(false))} className='text-4xl font-bold cursor-pointer -ml-9 mr-12 p-1
      bg-orange-500 text-white rounded-tr-xl ' />
    </div>
  )
}

export default OpenMenu
