import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

interface PaginationButtonProps {
  href: string;
  type: "next" | "prev";
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ href, type }) => {
  const Icon = type === "next" ? ChevronRightIcon : ChevronLeftIcon;

  return (
    <Link href={href}>
      <div
        className="flex flex-grow flex-col items-center cursor-pointer 
      hover:underline"
      >
        <Icon className="h-5" />
        <p className="capitalize">{type}</p>
      </div>
    </Link>
  );
};

export default PaginationButton;
