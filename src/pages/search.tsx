import SearchTemplate from "@template/SearchTemplate";
import Head from "next/head";

const Search = () => {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchTemplate />
    </div>
  );
};

export default Search;
