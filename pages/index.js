import Head from "next/head";
import Slider from "@components/Slider/Slider";
import Meta from "../components/Meta";

export default function Home() {
  return (
    <div>
      <Meta title="Akash" desp="kjssjb" keywords="protfilo" />

      <div className="container">
        <main>
          <Slider />
        </main>
      </div>
    </div>
  );
}
