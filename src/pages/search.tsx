import SearchResults from "@section/Search/SearchResults";
import searchMockData from "@service/searchMockData";
import SearchTemplate from "@template/SearchTemplate";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

interface SearchProps {
  results: typeof searchMockData;
}

const Search: React.FC<SearchProps> = ({ results }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchTemplate results={<SearchResults results={results} />} />
    </div>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useMockData = process.env.NODE_ENV === "development";
  const startIndex = context.query.start || "0";

  const data = useMockData
    ? searchMockData
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
