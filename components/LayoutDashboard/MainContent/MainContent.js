import React from "react";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import TobBar from "../TopBar/TobBar";
import Script from "next/script";
const MainContent = ({ children }) => {
  return (
    <div id="wrapper">
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <link rel="stylesheet" href="../assets/css/morris.css" />
      <link
        href="../assets/css/bootstrap.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="../assets/css/metismenu.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="../assets/css/icons.css" rel="stylesheet" type="text/css" />
      <link href="../assets/css/style.css" rel="stylesheet" type="text/css" />
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
        integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
        crossOrigin="anonymous"
      ></script>
      <Script src="../assets/js/jquery.min.js" async></Script>
      <Script src="../assets/js/bootstrap.bundle.min.js" async></Script>
      <Script src="../assets/js/metismenu.min.js" async></Script>
      <Script src="../assets/js/jquery.slimscroll.js" async></Script>
      <Script src="../assets/js/waves.min.js" async></Script>
      <Script src="../assets/js/morris.min.js" async></Script>
      <Script src="../assets/js/raphael.min.js" async></Script>

      <Script src="../assets/js/app.js" async></Script>
      <TobBar></TobBar>
      <SideBar></SideBar>

      <div class="content-page">
        <div class="content">
          <div class="container-fluid">
            <div class="page-title-box">
              <div class="row align-items-center">
                <div class="col-sm-6">
                  <h4 class="page-title">Dashboard</h4>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-right">
                    <li class="breadcrumb-item">
                      <a href="/">Akash</a>
                    </li>
                    <li class="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="row">{children}</div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainContent;
