import Head from "next/head";
import Slider from "@components/Slider/Slider";
import Meta from "@components/Meta";
import { useSelector } from "react-redux";
import firebaseInitializeApp from "../firebase/firebase.init";

export default function Home() {
  const user = useSelector((state) => state.firebaseState.user);
  console.log(user);

  firebaseInitializeApp();

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
