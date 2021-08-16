import Avatar from "components/avatar/Avatar";
import SearchHeaderInput from "./SearchHeaderInput";
import SearchHeaderLogo from "./SearchHeaderLogo";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <SearchHeaderLogo />
        <SearchHeaderInput />
        <Avatar className="ml-auto" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
