import { useRouter } from "next/dist/client/router";
import { useRef } from "react";

const useSearch = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const search = () => {
    const term = inputRef.current?.value;

    if (typeof term === "undefined") {
      return;
    }

    router.push(`/search?term=${term}`);
  };

  return [inputRef, search] as const;
};

export default useSearch;
