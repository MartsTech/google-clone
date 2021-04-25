import { useRouter } from "next/router";
import PaginationButton from "@element/Search/PaginationButton";

interface PaginationButtonsProps {}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({}) => {
  const router = useRouter();

  const url = `/search?term=${router.query.term}`;
  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex max-w-lg justify-between text-blue-700 mb-10">
      {startIndex >= 10 && (
        <PaginationButton
          type="prev"
          href={`${url}&start=${startIndex - 10}`}
        />
      )}
      <PaginationButton type="next" href={`${url}&start=${startIndex + 10}`} />
    </div>
  );
};

export default PaginationButtons;
