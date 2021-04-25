import searchMockData from "@service/searchMockData";

interface SearchResultProps {
  result: typeof searchMockData.items[0];
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <div className="max-w-xl mb-8">
      <div className="group">
        <a href={result.link} className="text-sml">
          {result.formattedUrl}
        </a>
        <a href={result.link}>
          <h2
            className="truncate text-xl text-blue-800 font-medium 
          group-hover:underline"
          >
            {result.title}
          </h2>
        </a>
      </div>
      <p className="line-clamp-2">{result.snippet}</p>
    </div>
  );
};

export default SearchResult;
