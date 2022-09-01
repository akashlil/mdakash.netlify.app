import Link from "next/link";

const SideBar = () => {
  return (
    <div class="left side-menu">
      <div class="slimscroll-menu" id="remove-scroll">
        <div id="sidebar-menu">
          <ul class="metismenu" id="side-menu">
            <li class="menu-title">Menu</li>
            <li>
              <Link href="?p=dashboard">
                <a class="waves-effect">
                  <i class="icon-calendar"></i>
                  <span>Dashboard</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="?p=projectadd">
                <a class="waves-effect">
                  <i class="icon-calendar"></i>
                  <span> Project Add</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div class="clearfix"></div>
      </div>
    </div>
  );
};

export default SideBar;
