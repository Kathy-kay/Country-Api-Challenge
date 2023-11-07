import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [theme, setTheme] = useState("light");

  const value = {
    selectedRegion,
    setSelectedRegion,
    theme,
    setTheme,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Define children prop as a required node
};
