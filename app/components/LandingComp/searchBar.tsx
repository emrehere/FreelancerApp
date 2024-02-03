import { IoMdSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { useState } from 'react';

const SearchBar = ( { color} ) => {

    const [showMenu, setShowMenu] = useState(false)
    const [category1, setCategory1] = useState("Eleman")
    const [category2, setCategory2] = useState("Is Ara")

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleCategory = () => {
        if(category1 === "Eleman") {
            setCategory1("Is Ara")
            setCategory2("Eleman")
        } else {
            setCategory1("Eleman")
            setCategory2("Is Ara")
        }
    }


  return (
    <div>
    <div className="flex items-center">
        <div onClick={handleShowMenu} style={{ backgroundColor: color }} className=" h-20 w-[10vw] translate-x-[2vw]
         text-blue-50 rounded-l-3xl flex items-center justify-center font-semibold text-xl
         space-x-4 ">
            <div className="flex items-center flex-col " >
            <p>{category1}</p>
           
            </div>
            <FaChevronDown size={22} />
            </div>
           
      <input
        className="w-[50vw] h-20 px-12 bg-blue-50 rounded-3xl border-none outline-none
         text-slate-950 shadow-2xl shadow-slate-600 font-medium tracking-wider text-md " 
        placeholder='Dene "Grafik designer" '
      />
      
      <div style={{ backgroundColor: color }} className="h-20 w-[5vw] 
       translate-x-[-5vw] rounded-r-3xl flex items-center justify-center text-blue-50 ">
      <IoMdSearch className="" size={32} />
      </div>
    </div>

    <div>
            {
                 showMenu && 
                 <div onClick={handleCategory} style={{ backgroundColor: color }} className=" h-20 px-4 w-[10vw] translate-x-[2vw]
                 text-blue-50 rounded-bl-3xl -mt-[3vh] flex flex-col  justify-center font-semibold text-xl
                 space-x-4 ">
                    <p>{category2}</p>
                    
                    
                 </div>
            }
            </div>

    </div>
  );
};

export default SearchBar;
