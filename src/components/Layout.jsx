import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";

function Layout(props) {
  return (
    <div>
      <Navbar {...props} />
      {/* <Home {...props} /> */}
      <Outlet />
    </div>
  );
}

export default Layout;
