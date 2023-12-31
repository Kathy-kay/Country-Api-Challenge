import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = () => {
    if (searchTerm === "") return;
    navigate(`search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div
      className=" w-full flex items-center 
   border-white rounded-md bg-white max-xl:padding-x gap-4 p-4 lg:max-w-[40%] shadow-sm dark:bg-dark-blue dark:text-light-White"
    >
      <button className="" onClick={handleSearchSubmit}>
        <AiOutlineSearch size={42} color="#D3D3D3" />
      </button>
      <input
        type="text"
        placeholder="Search for country..."
        className="input text-lg text-blue-text dark:bg-dark-blue dark:text-light-White"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
