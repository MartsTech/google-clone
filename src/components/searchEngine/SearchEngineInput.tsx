import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid";

interface SearchEngineInput {
  inputRef: React.RefObject<HTMLInputElement>;
}

const SearchEngineInput: React.FC<SearchEngineInput> = ({ inputRef }) => {
  return (
    <div
      className="flex items-center w-full mt-5 hover:shadow-lg 
      focus-within:shadow-lg max-w-md rounded-full border
      border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl"
    >
      <SearchIcon className="h-5 mr-3 text-gray-500" />
      <input
        ref={inputRef}
        type="text"
        className="flex-grow focus:outline-none"
      />
      <MicrophoneIcon className="h-5" />
    </div>
  );
};

export default SearchEngineInput;
