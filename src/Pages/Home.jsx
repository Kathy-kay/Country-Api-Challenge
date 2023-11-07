import CountrySection from "../section/CountrySection";
import SearchFilter from "../section/SearchFilter";
import { UserContextProvider } from "../context/UserContext";

const Home = () => {
  return (
    <UserContextProvider>
      <section className="padding-l padding-r  padding-t">
        <SearchFilter />
      </section>
      <section className="padding">
        <CountrySection />
      </section>
    </UserContextProvider>
  );
};

export default Home;
