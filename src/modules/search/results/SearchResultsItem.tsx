import { ItemsEntity } from "types/searchResults";

interface SearchResultsItemProps {
  item: ItemsEntity;
}

const SearchResultsItem: React.FC<SearchResultsItemProps> = ({ item }) => {
  return (
    <div className="max-w-xl mb-8">
      <div className="group">
        <a href={item.link} className="text-sml">
          {item.formattedUrl}
        </a>
        <a href={item.link}>
          <h2
            className="truncate text-xl text-blue-800 
            font-medium group-hover:underline"
          >
            {item.title}
          </h2>
        </a>
      </div>
      <p className="line-clamp-2">{item.snippet}</p>
    </div>
  );
};

export default SearchResultsItem;
