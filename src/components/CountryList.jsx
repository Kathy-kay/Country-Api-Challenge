import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CountryList = ({ capital, continents, population, name, flags }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full bg-white h-auto dark:bg-dark-blue">
      <Link to={`country/${name.common}`}>
        <img
          src={flags.png}
          alt={name}
          className="w-full h-[200px] object-cover"
        />
        <div className="p-8 text-blue-text dark:text-light-White">
          <h2 className="font-bold font-Nunito">{name.official}</h2>
          <p className="mt-4 ">Population: {population}</p>
          <p className="">Region: {continents}</p>
          <p>Capital: {capital}</p>
        </div>
      </Link>
    </div>
  );
};

export default CountryList;
