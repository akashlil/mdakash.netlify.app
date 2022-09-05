import Head from "next/head";
import Slider from "@components/Slider/Slider";
import Meta from "@components/Meta";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <Meta title="Akash" desp="kjssjb" keywords="Profiler,protfilo" />
      </Head>
      <main>
        <Slider />
      </main>
    </div>
  );
}
