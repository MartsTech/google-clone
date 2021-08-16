interface SearchEngineButtonsProps {
  onSearch: () => void;
}

const SearchEngineButtons: React.FC<SearchEngineButtonsProps> = ({
  onSearch,
}) => {
  return (
    <div
      className="flex flex-col w-1/2 space-y-2 justify-center 
      mt-8 sm:space-y-0 sm:flex-row sm:space-x-4"
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          onSearch();
        }}
        className="btn"
      >
        Google Search
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          onSearch();
        }}
        className="btn"
      >
        I am feeling Lucky
      </button>
    </div>
  );
};

export default SearchEngineButtons;
