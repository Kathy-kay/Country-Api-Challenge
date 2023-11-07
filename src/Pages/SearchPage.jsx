import { useParams } from "react-router-dom";
import { useCountrySearch } from "../components/countryapi";

const SearchPage = () => {
  const { searchTerm } = useParams();

  const {
    data: countrySearch,
    isLoading,
    isError,
  } = useCountrySearch(searchTerm);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h1>Error loading data</h1>;
  }
  console.log(countrySearch);

  return (
    <div className="sm:px-16 px-8 sm:py-24 py-32 text-center">
      <h2 className="font-bold text-3xl pt-12 sm:pt-40">
        Search Results for : <span className="capitalize">{searchTerm}</span>{" "}
      </h2>
      {countrySearch.map((item) => (
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
          <div className="flex lg:flex-row lg:justify-between flex-col flex-1">
            <div className="flex flex-col items-start">
              <h2 className="font-bold font-Nunito mb-4 text-2xl">
                {item.name.common}
              </h2>
              <p className="text-lg mb-3">
                Native Name: {item.name.nativeName.eng.common}
              </p>
              <p className="text-lg mb-3">Population: {item.population}</p>
              <p className="textlg mb-3">Region: {item.region}</p>
              <p className="text-lg mb-3">Sub Region: {item.subregion}</p>
              <p className="text-lg mb-3">Capital: {item.capital}</p>
            </div>
            <div className="mt-12 flex flex-col items-start max-lg:pt-5">
              <p className="mb-3">Currency: {item.currencies.CAD.name}</p>
              <p className="mb-3">
                Languages: {item.languages.eng}, {item.languages.fra}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
