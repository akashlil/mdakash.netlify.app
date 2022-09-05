import HomeDash from "@components/Deshboard/Home";
import ProjectAdd from "@components/Deshboard/Project/ProjectAdd";
import ProjectRemove from "@components/Deshboard/Project/ProjectRemove";
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
      } else if (page == "projectremove") {
        return (
          <MainContent>
            <ProjectRemove></ProjectRemove>
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
  const respones1 = await fetch("https://mdakash.netlify.app/api/admin");
  const userveryfite = await respones1.json();

  // const respones2 = await fetch("https://mdakash.netlify.app/api/projects");
  // const projects = await respones2.json();

  // const [operationsRes, incidentsRes] = await Promise.all([
  //   fetch(`https://mdakash.netlify.app/api/admin`),
  //   fetch(`https://mdakash.netlify.app/api/projects`),
  // ]);
  // const [operations, incidents] = await Promise.all([
  //   operationsRes.json(),
  //   incidentsRes.json(),
  // ]);
  return {
    props: {
      // userveryfite: operations,
      // projects: incidents,
      userveryfite,
    },
  };
}
