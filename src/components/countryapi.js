import axios from "axios";
import { useQuery } from "react-query";

export const useCountries = () => {
  return useQuery("countries", async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data.slice(0, 20);
  });
};
