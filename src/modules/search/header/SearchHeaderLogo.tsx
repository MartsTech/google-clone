import { useRouter } from "next/dist/client/router";
import Image from "next/image";

const SearchHeaderLogo = () => {
  const router = useRouter();

  return (
    <Image
      src="/images/search/logo.png"
      height={40}
      width={120}
      alt="logo"
      onClick={() => router.push("/")}
      className="cursor-pointer"
    />
  );
};

export default SearchHeaderLogo;
