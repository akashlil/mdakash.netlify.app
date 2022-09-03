import Layout from "@components/layout";
import "@styles/globals.css";
import { Provider } from "react-redux";
import store from "../rudex/store";
import Script from "next/script";
function Application({ Component, pageProps }) {
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      />

      {/* data table */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css"
      />

      <script
        type="text/javascript"
        charset="utf8"
        src="//cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"
      ></script>

      <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-3.5.1.js"
      ></script>
      {/* data table End */}

      <Provider store={store}>
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
    </div>
  );
}

export default Application;
