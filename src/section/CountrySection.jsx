import { useContext } from "react";
import { useCountries, useRegion } from "../components/countryapi";
import CountryList from "../components/CountryList";
import { UserContext } from "../context/UserContext";

const CountrySection = () => {
  const { selectedRegion } = useContext(UserContext);
  const { data: countries, isLoading, isError } = useCountries();
  const {
    data: countryRegion,
    isLoading: regionLoading,
    isError: regionError,
  } = useRegion(selectedRegion);

  if (isLoading || regionLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError || regionError) {
    return <h1>Error fetching data</h1>;
  }

  let filteredCountries = selectedRegion ? countryRegion : countries;

  return (
    <section
      className="mt-5 grid  md:grid-cols-3 lg:grid-cols-4 
    sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-10"
    >
      {filteredCountries.map((country) => (
        <CountryList key={country.name.official} {...country} />
      ))}
    </section>
  );
};

export default CountrySection;
