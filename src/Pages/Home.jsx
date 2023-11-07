import CountrySection from "../section/CountrySection";
import SearchFilter from "../section/SearchFilter";

const Home = () => {
  return (
    <main>
      <section className="padding-l padding-r  padding-t">
        <SearchFilter />
      </section>
      <section className="padding">
        <CountrySection />
      </section>
    </main>
  );
};

export default Home;
