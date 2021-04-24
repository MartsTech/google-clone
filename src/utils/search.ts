import { NextRouter } from "next/router";
import { RefObject } from "react";

const search = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  router: NextRouter,
  searchInputRef: RefObject<HTMLInputElement>
) => {
  e.preventDefault();
  const term = searchInputRef.current?.value;

  if (typeof term === "undefined") {
    return;
  }

  router.push(`/search?term=${term}`);
};

export default search;
