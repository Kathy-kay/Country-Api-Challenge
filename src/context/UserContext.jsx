import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const value = {
    selectedRegion,
    setSelectedRegion,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Define children prop as a required node
};
