import CountrySection from "../section/CountrySection";
import SearchFilter from "../section/SearchFilter";
import { UserContextProvider } from "../context/UserContext";

const Home = () => {
  return (
    <UserContextProvider>
      <main className="relative bg-light-gray min-h-screen">
        <section className="padding-l padding-r  padding-t">
          <SearchFilter />
        </section>
        <section className="padding">
          <CountrySection />
        </section>
      </main>
    </UserContextProvider>
  );
};

export default Home;
