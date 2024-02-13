import { IoMdSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchParamSetter } from "./searchReducer"; 
import { RootState } from "../../store/RootReducer"
import { useRouter } from 'next/navigation'

const SearchBar = ( { color} ) => {

    const [showMenu, setShowMenu] = useState(false)
    const [category1, setCategory1] = useState("Eleman")
    const [category2, setCategory2] = useState("Is Ara")

    const dispatch = useDispatch();
    
    const searchParam = useSelector((state: RootState) => state.searchParamReducer.searchParam);

    const router = useRouter()

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

   
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(searchParamSetter(event.target.value));
      
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        navigateToSearchResults();
      }
    };
  
    const navigateToSearchResults = () => {
      router.push('/pages/searchPage');
    };
  

    const directFunc = () => {
        router.push('/pages/searchPage');
    }


  return (
    <div>
    <div className="flex items-center sm:ml-0 -ml-[7vw]">
        <div onClick={handleShowMenu} style={{ backgroundColor: color }} className=" h-20 
        w-[25vw] sm:w-[10vw] sm:translate-x-[2vw] translate-x-[6vw]
         text-blue-50 rounded-l-3xl flex items-center justify-center font-semibold sm:text-xl
         text-lg sm:space-x-4 space-x-1 ">
            <div className="flex items-center flex-col " >
            <p>{category1}</p>
           
            </div>
            <FaChevronDown  size={22} />
            </div>
           
      <input
       value={searchParam}
       onChange={handleInputChange}
       onKeyDown={handleKeyPress}
        className="sm:w-[50vw] w-[70vw] h-20 px-12 bg-blue-50 rounded-3xl border-none outline-none
         text-slate-950 shadow-2xl shadow-slate-600 font-medium tracking-wider text-md " 
        placeholder='Dene "Grafik designer" '
      />
      
      <div onClick={ directFunc} style={{ backgroundColor: color }} className="h-20 sm:w-[5vw] w-[10vw]
       translate-x-[-3vw] rounded-r-3xl flex items-center justify-center text-blue-50 ">
      <IoMdSearch  size={32} />
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
