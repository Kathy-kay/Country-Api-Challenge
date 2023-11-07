import { useParams } from "react-router-dom";
import { useCountryName } from "../components/countryapi";

const CountryDetails = () => {
  const { countryName } = useParams();

  const { data: country, isLoading, isError } = useCountryName(countryName);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h1>Error loading data</h1>;
  }

  return (
    <div className="sm:px-16 px-8 sm:py-24 py-32 text-center">
      {country.map((item) => (
        <div
          className="pt-20 flex items-center max-lg:flex-col gap-16"
          key={item.name.official}
        >
          <img
            src={item.flags.svg}
            alt={item.flags.alt}
            width={500}
            height={500}
          />
          <div className="flex lg:flex-row lg:justify-between flex-col flex-1 text-blue-text">
            <div className="flex flex-col items-start">
              <h2 className="font-bold font-Nunito mb-4 text-2xl">
                {item.name.common}
              </h2>
              <p className="text-lg mb-3">
                Native Name: {item.name.nativeName.eng.common}
              </p>
              <p className="text-lg mb-3">Population: {item.population}</p>
              <p className="text-lg mb-3">Region: {item.region}</p>
              <p className="text-lg mb-3">Sub Region: {item.subregion}</p>
              <p className="text-lg mb-3">Capital: {item.capital}</p>
            </div>
            {/* Removed commented-out code */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;
