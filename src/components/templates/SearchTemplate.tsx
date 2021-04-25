import Header from "@section/Search/Header";

interface SearchTemplateProps {
  results: JSX.Element;
}

const SearchTemplate: React.FC<SearchTemplateProps> = ({ results }) => {
  return (
    <div>
      <Header />
      {results}
    </div>
  );
};

export default SearchTemplate;
