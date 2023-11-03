import { useRegion } from "./countryapi";

export const useCustomCountryRegion = (region) => {
  return useRegion(region);
};
