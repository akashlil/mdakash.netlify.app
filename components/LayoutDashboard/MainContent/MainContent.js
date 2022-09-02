import React from "react";
import TobBar from "../TopBar/TobBar";

const MainContent = ({ children }) => {
  return (
    <div className="container-fluid px-0">
      <TobBar></TobBar>

      <div className="container">
        <div className="row">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
