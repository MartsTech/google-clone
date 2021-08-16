import { SearchResults as SearchResultsType } from "types/searchResults";
import SearchHeader from "./header/SearchHeader";
import SearchResults from "./results/SearchResults";

interface SearchProps {
  results: SearchResultsType;
}

const Search: React.FC<SearchProps> = ({ results }) => {
  return (
    <>
      <SearchHeader />
      <SearchResults results={results} />
    </>
  );
};

export default Search;
