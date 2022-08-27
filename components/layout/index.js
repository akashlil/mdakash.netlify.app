import Navbar from "@components/navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const showNavBar = router.asPath === "/login" ? false : true;

  return (
    <>
      {showNavBar && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
