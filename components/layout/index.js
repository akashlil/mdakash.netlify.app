import Navbar from "@components/navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const adminRouer = router?.query?.p ? router?.query?.p : "admin";
  console.log(adminRouer);

  console.log(router.asPath);
  let showNavBar = true;
  if (router.asPath == "/login") {
    showNavBar = false;
  } else if (router.asPath == "/admin") {
    showNavBar = false;
  } else if (router.asPath == `/admin?p=${adminRouer}`) {
    console.log(adminRouer);
    showNavBar = false;
    console.log(showNavBar);
  }
  return (
    <>
      {showNavBar && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
