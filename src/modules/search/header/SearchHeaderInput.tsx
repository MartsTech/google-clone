import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import useSearch from "hooks/useSearch";
import { useRouter } from "next/dist/client/router";

const SearchHeaderInput = () => {
  const [inputRef, search] = useSearch();
  const router = useRouter();

  return (
    <form
      className="flex flex-grow px-6 py-3 ml-10 border mr-5
      border-gray-200 rounded-full shadow-lg max-w-3xl items-center"
    >
      <input
        ref={inputRef}
        type="text"
        defaultValue={router.query.term}
        className="flex-grow w-full focus:outline-none"
      />
      <XIcon
        className="h-7 text-gray-500 cursor-pointer transition 
        duration-100 transform hover:scale-125 sm:mr-3"
        onClick={() => (inputRef.current!.value = "")}
      />
      <MicrophoneIcon
        className="h-6 mr-3 hidden sm:inline-flex border-l-2 
        text-blue-500 pl-4 border-gray-300"
      />
      <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
      <button
        hidden
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          search();
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchHeaderInput;
