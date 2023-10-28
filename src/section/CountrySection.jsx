import { useContext } from "react";
import { useCountries } from "../components/countryapi";
import CountryList from "../components/CountryList";
import { UserContext } from "../context/UserContext";

const CountrySection = () => {
  const { data: countries, isLoading, isError } = useCountries();
  const { selectedRegion } = useContext(UserContext);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error fetching data</h1>;
  }

  const filteredCountries = selectedRegion
    ? countries.filter((country) => country.continents === selectedRegion)
    : countries;

  // console.log(filteredCountries);
  return (
    <section
      className="mt-5 grid  md:grid-cols-4 
    sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-10"
    >
      {filteredCountries.map((country) => (
        <CountryList key={country.name.official} {...country} />
      ))}
    </section>
  );
};

export default CountrySection;
