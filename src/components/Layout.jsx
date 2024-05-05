// import React from "react";
// import { Outlet } from 'react-router-dom';
// import Navbar from "../components/Navbar.jsx";
// import Home from "../pages/Home.jsx";

// function Layout(props) {
//   return (
//     <div>
//       <Outlet />
//     </div>
//   );
// }

// export default Layout;
// Layout.jsx
import React from 'react'
import Navbar from '../components/Navbar.jsx'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
