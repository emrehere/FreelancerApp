import { IoMdSearch } from "react-icons/io";

const SearchBar = ( { color} ) => {
  return (
    <div className="flex items-center">
      <input
        className="w-[50vw] h-20 px-4 bg-blue-50 rounded-3xl border-none outline-none
         text-slate-950 shadow-2xl shadow-slate-600 font-medium tracking-wider text-md "
        placeholder='Dene "Grafik designer" '
      />
      <div style={{ backgroundColor: color }} className="h-20 w-[5vw] 
       translate-x-[-5vw] rounded-r-3xl flex items-center justify-center text-blue-50 ">
      <IoMdSearch className="" size={32} />
      </div>
    </div>
  );
};

export default SearchBar;
