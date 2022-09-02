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

      <Script src="../assets/js/jquery.min.js" defer></Script>
      <Script src="../assets/js/bootstrap.bundle.min.js" defer></Script>
      <Script src="../assets/js/metismenu.min.js" defer></Script>
      <Script src="../assets/js/jquery.slimscroll.js" defer></Script>
      <Script src="../assets/js/waves.min.js" defer></Script>
      <Script src="../assets/js/morris.min.js" defer></Script>
      <Script src="../assets/js/raphael.min.js" defer></Script>

      <Script src="../assets/js/app.js" defer></Script>
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
