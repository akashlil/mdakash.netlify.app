import Layout from "@components/layout";
import "@styles/globals.css";
import { Provider } from "react-redux";
import store from "../rudex/store";
import Script from "next/script";
import LoadDataAuthStateChanged from "@components/layout/LoadData/LoadData";
import firebaseinitializeApp from "../firebase/firebase.init";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

function Application({ Component, pageProps }) {
  firebaseinitializeApp();

  const router = useRouter();

  NProgress.configure({ showSpinner: false });
  router.events?.on("routeChangeStart", () => {
    NProgress.start();
  });
  router.events?.on("routeChangeComplete", () => {
    NProgress.done();
  });
  router.events?.on("routeChangeError", () => {
    NProgress.done();
  });

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      />

      <Provider store={store}>
        <LoadDataAuthStateChanged></LoadDataAuthStateChanged>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      <div>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossOrigin="anonymous"
        ></Script>
      </div>
    </>
  );
}

export default Application;
