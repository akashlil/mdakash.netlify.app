import Home from "@components/Deshboard/Home/Home";
import ProjectAdd from "@components/Deshboard/ProjectAdd/ProjectAdd";
import DashBoardHome from "@components/layout/DashBoardLayout/DashBoardHome";
import { useRouter } from "next/router";
import useSessionStorage from "../../hook/useSessionStorage";

const Admin = ({ userveryfite }) => {
  let userDatastringfy = useSessionStorage("user");
  const [userData] = userveryfite;

  let router = useRouter();
  let page = "";
  page = router.query.p;

  if (userDatastringfy?.email == userData?.email) {
    if (userDatastringfy?.parmison == userDatastringfy?.parmison) {
      if (page == "dashboard") {
        return (
          <DashBoardHome>
            <Home></Home>
          </DashBoardHome>
        );
      } else if (page == "projectadd") {
        return (
          <DashBoardHome>
            <ProjectAdd></ProjectAdd>
          </DashBoardHome>
        );
      } else {
        return (
          <DashBoardHome>
            <Home></Home>
          </DashBoardHome>
        );
      }
    }
  } else {
    return <></>;
  }
};

export default Admin;

export async function getServerSideProps({ req, res }) {
  const respones = await fetch("https://mdakash.netlify.app/api/admin");
  const userveryfite = await respones.json();

  return {
    props: {
      userveryfite,
    },
  };
}
