import searchMock from "data/seachMock.json";
import Search from "modules/search/Search";
import { GetServerSideProps } from "next";
import { SearchResults } from "types/searchResults";

interface ResultsPageProps {
  results: SearchResults;
}

const SearchPage: React.FC<ResultsPageProps> = ({ results }) => {
  return <Search results={results} />;
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useMockData = process.env.NODE_ENV === "development";
  const startIndex = context.query.start || "0";

  const data = useMockData
    ? searchMock
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}
          &cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
};
