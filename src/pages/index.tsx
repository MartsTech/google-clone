import { HomeTemplate } from "@template/HomeTemplate";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate />
    </div>
  );
};

export default Home;
