import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import SearchHeaderOptionsItem from "./SearchHeaderOptionsItem";

const SearchHeaderOptions = () => {
  return (
    <div
      className="flex w-full text-gray-700 justify-evenly text-sm 
      lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b"
    >
      <div className="flex space-x-6">
        <SearchHeaderOptionsItem Icon={SearchIcon} title="All" selected />
        <SearchHeaderOptionsItem Icon={PhotographIcon} title="Images" />
        <SearchHeaderOptionsItem Icon={PlayIcon} title="Videos" />
        <SearchHeaderOptionsItem Icon={NewspaperIcon} title="News" />
        <SearchHeaderOptionsItem Icon={MapIcon} title="Maps" />
        <SearchHeaderOptionsItem Icon={DotsVerticalIcon} title="More" />
      </div>
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default SearchHeaderOptions;
