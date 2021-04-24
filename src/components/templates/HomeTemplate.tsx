import Footer from "@section/Home/Footer";
import Header from "@section/Home/Header";
import SearchEngine from "@section/Home/SearchEngine";

interface HomeTemplateProps {}

const HomeTemplate: React.FC<HomeTemplateProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header />
      <SearchEngine />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
