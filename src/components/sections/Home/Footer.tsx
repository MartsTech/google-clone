import { GlobeIcon } from "@heroicons/react/solid";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer
      className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm 
    text-gray-500"
    >
      <div className="px-8 py-3">
        <p>Bulgaria</p>
      </div>
      <div
        className="grid gap-y-4 grid-flow-row-dense grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3"
      >
        <div
          className="flex justify-center items-center md:col-span-2 lg:col-span-1 
        lg:col-start-2"
        >
          <GlobeIcon className="h-5 mr-1 text-green-700" /> Carboon neutral
          since 2007
        </div>
        <div
          className="flex justify-center space-x-8 whitespace-nowrap 
        md:justify-self-start"
        >
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search works</p>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
