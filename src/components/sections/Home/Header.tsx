import Avatar from "@element/Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="flex w-full p-5 justify-between text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
        <Avatar url="https://lh3.googleusercontent.com/a-/AOh14Gge4WVENvl9bdKUN7jaaE6RqaS-2o3F5Whp44Bf=s96-c" />
      </div>
    </header>
  );
};

export default Header;
