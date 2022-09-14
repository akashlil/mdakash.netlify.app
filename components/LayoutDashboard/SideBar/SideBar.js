import Link from "next/link";
import sideBar from "./SideBar.module.css";
const SideBar = () => {
  return (
    <div
      className={[
        "offcanvas offcanvas-start bg-dark text-white ",
        sideBar.sidebarnav,
      ].join(" ")}
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-body p-0">
        <nav className="navbar-dark">
          <ul className="navbar-nav">
            <li>
              <div className="text-muted small fw-bold text-uppercase px-3">
                <Link href="/">
                  <a className="nav-link">WebSite</a>
                </Link>
              </div>
            </li>
            <li>
              <Link href="/admin">
                <a className="nav-link px-2 active">
                  <span className="me-2">
                    <i className="bi bi-speedometer2"></i>
                  </span>
                  <span>DashBoard</span>
                </a>
              </Link>
            </li>
            <li className="my-1">
              <hr />
            </li>
            <li>
              <div className="text-muted small fw-bold text-uppercase px-3">
                Interface
              </div>
            </li>

            <li>
              <a
                className={["nav-link px-3 ", sideBar.sidebarlink].join(" ")}
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="me-2">
                  <i className="bi bi-layout-split"></i>
                </span>
                <span>Project</span>
                <span className={["ms-auto", sideBar.righticon].join(" ")}>
                  <i className="bi bi-chevron-down"> </i>
                </span>
              </a>

              <div className="collapse" id="collapseExample">
                <div>
                  <ul className="navbar-nav ps-3">
                    <li>
                      <Link href="?p=projectadd">
                        <a className="nav-link px-3">
                          <span className="me-2">
                            <i className="bi bi-plus-square-fill"></i>
                          </span>
                          <span>Add</span>
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href="?p=projectremove">
                        <a className="nav-link px-3">
                          <span className="me-2">
                            <i className="bi bi-trash3-fill"></i>
                          </span>
                          <span>Reomve</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <a href="#" className="nav-link px-3">
                <span className="me-2">
                  <i className="bi bi-layout-split"></i>
                </span>
                <span>Nested link</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
/*  <Link href="?p=projectadd">
<a className="dropdown-item">Project add</a>
</Link> 
    <Link href="?p=projectremove">
                      <a className="dropdown-item">Project Reomve</a>
                    </Link>

*/
export default SideBar;
