import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Filtered by Region");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="max-sm:pt-16 relative ">
      <button
        className="flex justify-between items-center w-[250px]
       bg-white px-8 py-4 rounded-lg shadow-sm sm:items-start max-w-[400px]"
        onClick={toggleDropdown}
      >
        <h4 className="text-lg font-Nunito font-normal">{selectedOption}</h4>
        <AiOutlineDown />
      </button>
      {isOpen && (
        <ul
          className="absolute left-0 mt-2 w-[250px]
       bg-white px-8 py-4 rounded-md text-base shadow-sm font-Nunito cursor-pointer"
        >
          <li className="mb-1" onClick={() => handleSelectOption("Africa")}>
            Africa
          </li>
          <li className="mb-1" onClick={() => handleSelectOption("America")}>
            America
          </li>
          <li className="mb-1" onClick={() => handleSelectOption("Europe")}>
            Europe
          </li>
          <li className="mb-1" onClick={() => handleSelectOption("Asia")}>
            Asia
          </li>
          <li className="mb-1" onClick={() => handleSelectOption("Oceania")}>
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
};

export default Filter;

{
  /* <select
        name="filter"
        className="w-[250px] p-4 outline-none border-none shadow-none"
      >
        <option value="" className="outline-none border-none mb-3">
          Filter by Region {"    "}
        </option>
        <option value="">Africa</option>
        <option value="">America</option>
        <option value="">Asia</option>
        <option value="">Europe</option>
        <option value="">Oceania</option>
      </select> */
}
