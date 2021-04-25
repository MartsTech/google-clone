import { SVGProps } from "react";

interface HeaderOptionProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  selected?: boolean;
}

const HeaderOption: React.FC<HeaderOptionProps> = ({
  Icon,
  title,
  selected = false,
}) => {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent cursor-pointer pb-3
      hover:text-blue-500 hover:border-blue-500 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
};

export default HeaderOption;
