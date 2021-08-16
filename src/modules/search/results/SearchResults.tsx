import { SearchResults as SearchResultsType } from "types/searchResults";
import SearchResultsItem from "./SearchResultsItem";
import SearchResultsPagination from "./SearchResultsPagination";

interface SearchResultsProps {
  results: SearchResultsType;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="nx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((item) => (
        <SearchResultsItem key={item.link} item={item} />
      ))}
      <SearchResultsPagination />
    </div>
  );
};

export default SearchResults;
