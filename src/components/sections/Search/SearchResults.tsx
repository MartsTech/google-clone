import PaginationButtons from "@module/Search/PaginationButtons";
import SearchResult from "@module/Search/SearchResult";
import searchMockData from "@service/searchMockData";

interface SearchResultsProps {
  results: typeof searchMockData;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="nx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => (
        <SearchResult key={result.link} result={result} />
      ))}
      <PaginationButtons />
    </div>
  );
};

export default SearchResults;
