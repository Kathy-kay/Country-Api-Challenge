import { useCountries } from "../components/countryapi";
import CountryList from "../components/CountryList";

const CountrySection = () => {
  const { data: countries, isLoading, isError } = useCountries();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error fetching data</h1>;
  }
  console.log(countries);

  return (
    <section
      className="mt-5 grid lg:grid-col-5 md:grid-cols-4 
    sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-10"
    >
      {countries.map((country) => (
        <CountryList key={country.name.official} {...country} />
      ))}
    </section>
  );
};

export default CountrySection;
