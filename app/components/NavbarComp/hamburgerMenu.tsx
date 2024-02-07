import MobileSearchComp from './mobileSearchComp';
import NavDatas from '../../datas/navDatas';
import MobileNavItems from './mobileNavItems';
import { IoClose } from "react-icons/io5";



export default function HamburgerMenu({ toggleMobileMenu }: any) {
    return (
        <div>
            <div className="h-[120vh] w-[60vw] bg-blue-50 z-50 fixed top-0 right-0
            shadow-xl shadow-black " >
                <IoClose onClick={toggleMobileMenu} size={50} className='absolute text-gray-500 -ml-[12vw] mt-[1vh]' />
               <MobileSearchComp buttonName="ARA" />
              <div>
              <div className='flex flex-col   ' >
        {
          NavDatas.map((item: any) => {
            return (
              <MobileNavItems icon={item.icon} key={item.title} title={item.title} href={item.href} />
            )
          })
        }
      </div>
              </div>
            </div>

        </div>
    )
}