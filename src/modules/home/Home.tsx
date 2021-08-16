import SearchEngine from "components/searchEngine/SearchEngine";
import HomeFooter from "./footer/HomeFooter";
import HomeHeader from "./header/HomeHeader";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <HomeHeader />
      <SearchEngine />
      <HomeFooter />
    </div>
  );
};

export default Home;
