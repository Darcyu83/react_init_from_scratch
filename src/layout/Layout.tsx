import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "500px",
        height: "90vh",
        display: "grid",
        gridTemplateRows: "50px 1fr",
        border: " 1px solid red",
      }}
    >
      <aside>
        <NavLink to={"/search"}>Search</NavLink>
      </aside>

      <Outlet />
    </div>
  );
}

export default Layout;
