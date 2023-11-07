import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { FiSun } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
const Navbar = () => {
  const { theme, setTheme } = useContext(UserContext);
  const handleClick = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header className="w-full py-8 absolute z-10 padding-x bg-white shadow-lg dark:bg-dark-blue ">
      <nav className="flex flex-1 justify-between items-center max-container ">
        <h3 className="font-Nunito font-bold text-3xl text-blue-text dark:text-light-White">
          Where in the world?
        </h3>
        <button
          className="font-Nunito font-light text-xl text-blue-text "
          onClick={handleClick}
        >
          {theme === "light" ? (
            <FiSun size={30} />
          ) : (
            <BsMoon size={30} color="white" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
