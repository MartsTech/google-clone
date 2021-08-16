import { defaultSEO } from "config/seo";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
