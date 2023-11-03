import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const handleSearchSubmit = () => {
    console.log("search");
  };

  return (
    <div
      className=" w-full flex items-center 
   border-white rounded-md bg-white max-xl:padding-x gap-4 p-4 lg:max-w-[40%] shadow-sm"
    >
      <button className="" onClick={handleSearchSubmit}>
        <AiOutlineSearch size={42} color="#D3D3D3" />
      </button>
      <input
        type="text"
        placeholder="Search for country..."
        className="input text-lg text-blue-text"
      />
    </div>
  );
};

export default Search;
