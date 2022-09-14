import React from "react";
import SideBar from "../SideBar/SideBar";
import TobBar from "../TopBar/TobBar";

const MainContent = ({ children }) => {
  return (
    <div className="container-fluid px-0">
      <TobBar></TobBar>
      <SideBar></SideBar>
      <main className="mt-5 pt-3 mainContien">
        <div className="container-fluid">
          <div className="row">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default MainContent;
