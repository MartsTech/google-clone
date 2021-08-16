import useSearch from "hooks/useSearch";
import Image from "next/image";
import SearchEngineButtons from "./SearchEngineButtons";
import SearchEngineInput from "./SearchEngineInput";

const SearchEngine = () => {
  const [inputRef, search] = useSearch();

  return (
    <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
      <Image src="/images/home/logo.png" height={100} width={300} alt="logo" />
      <SearchEngineInput inputRef={inputRef} />
      <SearchEngineButtons onSearch={search} />
    </form>
  );
};

export default SearchEngine;
