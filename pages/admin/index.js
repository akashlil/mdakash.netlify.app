import HomeDash from "@components/Deshboard/Home";
import ProjectAdd from "@components/Deshboard/Project/ProjectAdd.js";
import MainContent from "@components/LayoutDashboard/MainContent/MainContent";
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
          <MainContent>
            <HomeDash></HomeDash>
          </MainContent>
        );
      } else if (page == "projectadd") {
        return (
          <MainContent>
            <ProjectAdd></ProjectAdd>
          </MainContent>
        );
      } else {
        return (
          <MainContent>
            <HomeDash></HomeDash>
          </MainContent>
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
