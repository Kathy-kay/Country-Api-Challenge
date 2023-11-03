import axios from "axios";
import { useQuery } from "react-query";

export const useCountries = () => {
  return useQuery("countries", async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data.slice(0, 20);
  });
};

export const useRegion = (region) => {
  return useQuery(["countryRegion", region], async () => {
    if (!region) return [];
    const response = await axios.get(
      `https://restcountries.com/v3.1/region/${region}`
    );
    return response.data.slice(0, 20);
  });
};

export const useCountrySearch = (name) => {
  return (
    useQuery(["countrySearch", name]),
    async () => {
      const response = await axios.get(
        `https://restcountries.com/v3.1/${name}`
      );
      return response.data;
    }
  );
};
