import { useDispatch, useSelector } from 'react-redux';
import { navSearchToggle } from '../NavbarComp/NavReducer';
import { useEffect, useRef } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import OpenUpMenu from './openUpMenu';


export default function SearchComp({ buttonName }: any) {

  const dispatch = useDispatch();
  const searchToggle = useSelector((state: any) => state.navbar.searchToggle);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        dispatch(navSearchToggle(false)); // Close the search component
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);



  useEffect(() => {

  }, [searchToggle])

  return (
    <>
      <div ref={searchRef} className='flex flex-col z-50 '>
        <div onClick={() => dispatch(navSearchToggle(!searchToggle))} className='flex flex-row items-center justify-between px-4 py-2 border-2 border-orange-500 text-white
         bg-orange-500 hover:bg-white rounded-xl hover:text-orange-600  h-12 w-48' >
          <IoMdSearch size={27} />
          <div className='text-md tracking-widest'>
            {buttonName}
          </div>
          <FaChevronDown size={20} />

        </div>
        <div>
          {
            searchToggle ? <OpenUpMenu /> : null
          }
        </div>
      </div>
    </>
  )
}