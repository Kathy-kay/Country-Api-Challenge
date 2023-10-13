import Search from "../components/Search";
import Filter from "../components/Filter";

const SearchFilter = () => {
  return (
    <div
      className="max-container flex justify-between items-center 
     max-lg:flex-col sm:w-full pt-16 max-sm:pt-32"
    >
      <Search />
      <Filter />
    </div>
  );
};

export default SearchFilter;
