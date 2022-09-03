import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const TobBar = () => {
  const href = "/";
  const router = useRouter();
  const logOutadmin = () => {
    sessionStorage.removeItem("user");
    sessionStorage.clear();
    router.replace(href);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container my-3">
          <Link href="/admin">
            <a className="navbar-brand">DashBoard</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href={"/"}>
                  <a className="nav-link " aria-current="page">
                    Goto WebSite
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Admin Add
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Project
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <Link href="?p=projectadd">
                      <a className="dropdown-item">Project add</a>
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <Link href="?p=projectremove">
                      <a className="dropdown-item">Project Reomve</a>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Project Deletes
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav me-5 ">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Akash
                </a>
                <ul className="dropdown-menu  dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item" onClick={logOutadmin}>
                      Log Out
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Project Deletes
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TobBar;
