import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid";
import search from "@util/search";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

interface SearchEngineProps {}

const SearchEngine: React.FC<SearchEngineProps> = ({}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  return (
    <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
      <Image
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={100}
        width={300}
      />
      <div
        className="flex items-center w-full mt-5 hover:shadow-lg focus-within:shadow-lg 
      max-w-md rounded-full border border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl"
      >
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <MicrophoneIcon className="h-5" />
      </div>

      <div
        className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0
       sm:flex-row sm:space-x-4"
      >
        <button
          onClick={(e) => search(e, router, searchInputRef)}
          className="btn"
        >
          Google Search
        </button>
        <button
          onClick={(e) => search(e, router, searchInputRef)}
          className="btn"
        >
          I'm feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default SearchEngine;
