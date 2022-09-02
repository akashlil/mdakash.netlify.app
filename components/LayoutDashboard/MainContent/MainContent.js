import React from "react";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import TobBar from "../TopBar/TobBar";
import Script from "next/script";
const MainContent = ({ children }) => {
  return (
    <div>
      <TobBar></TobBar>
      <SideBar></SideBar>

      <div>
        <div className="row">{children}</div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainContent;
