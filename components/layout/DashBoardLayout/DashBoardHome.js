import TopBar from "./TopBar/TopBar";
import SideBar from "./SideBar/SideBar";

const DashBoardHome = ({ children }) => {
  return (
    <>
      <link
        href="./assets/css/bootstrap.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="./assets/css/icons.css" rel="stylesheet" type="text/css" />
      <link href="./assets/css/style.css" rel="stylesheet" type="text/css" />

      <div id="wrapper">
        <TopBar></TopBar>
        <SideBar></SideBar>

        <div class="content-page">
          <div class="content">
            <div class="container-fluid">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardHome;
