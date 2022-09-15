import Navbar from "@components/navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const adminRouer = router?.query?.p ? router?.query?.p : "admin";

  let showNavBar = true;
  if (router.asPath == "/login") {
    showNavBar = false;
  } else if (router.asPath == "/admin") {
    showNavBar = false;
  } else if (router.asPath == `/admin?p=${adminRouer}`) {
    showNavBar = false;
  }
  return (
    <>
      {router.pathname !== "/404" && showNavBar && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
