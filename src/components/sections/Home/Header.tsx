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
        <Avatar url="https://scontent.fsof5-1.fna.fbcdn.net/v/t1.6435-9/86382163_800893710418778_802688469468971008_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Gmag4d0eD70AX9BfaFp&_nc_ht=scontent.fsof5-1.fna&oh=4d2fd4d07ba6b9eaab8e0a9a9a688894&oe=60941630" />
      </div>
    </header>
  );
};

export default Header;
