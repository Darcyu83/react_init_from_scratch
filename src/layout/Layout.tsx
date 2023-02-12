import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{}}>
      <aside></aside>

      <Outlet />
    </div>
  );
}

export default Layout;
