import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{}}>
      <aside>
        <NavLink to={"/search"}>Search</NavLink>
      </aside>

      <Outlet />
    </div>
  );
}

export default Layout;
