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
        gridTemplateColumns: "100%",
        border: " 1px solid red",
      }}
    >
      <aside style={{ border: "2px solid purple" }}>
        <NavLink to={"/search"}>Search</NavLink>
        <NavLink to={"/pdf"}>PDF</NavLink>
      </aside>

      <div style={{ width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
