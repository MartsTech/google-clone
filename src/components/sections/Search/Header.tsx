import Avatar from "@element/Avatar";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import search from "@util/search";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form
          className="flex flex-grow px-6 py-3 ml-10 border border-gray-200 rounded-full
          shadow-lg max-w-3xl items-center mr-5"
        >
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform 
          hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current!.value = "")}
          />
          <MicrophoneIcon
            className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 
        pl-4 border-gray-300"
          />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button
            hidden
            type="submit"
            onClick={(e) => search(e, router, searchInputRef)}
          >
            Search
          </button>
        </form>
        <Avatar
          url="https://scontent.fsof5-1.fna.fbcdn.net/v/t1.6435-9/86382163_800893710418778_802688469468971008_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Gmag4d0eD70AX9BfaFp&_nc_ht=scontent.fsof5-1.fna&oh=4d2fd4d07ba6b9eaab8e0a9a9a688894&oe=60941630"
          className="ml-auto"
        />
      </div>
    </header>
  );
};

export default Header;
