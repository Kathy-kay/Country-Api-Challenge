import { useState, useContext } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { UserContext } from "../context/UserContext";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const { setSelectedRegion, selectedRegion } = useContext(UserContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (region) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };
  return (
    <div className="max-sm:pt-16 relative dark:box-shadow ">
      <button
        className="flex justify-between items-center w-[250px]
       bg-white px-8 py-4 rounded-lg shadow-sm sm:items-start max-w-[400px] dark:bg-dark-blue dark:text-light-White "
        onClick={toggleDropdown}
      >
        <h4 className="text-lg font-Nunito font-normal">
          {selectedRegion ? selectedRegion : "Filtered by Region"}
        </h4>
        <AiOutlineDown />
      </button>
      {isOpen && (
        <ul
          className="absolute left-0 mt-2 w-[250px]
       bg-white px-8 py-4 rounded-md text-base shadow-sm font-Nunito cursor-pointer dark:bg-dark-blue dark:text-light-White"
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
}
