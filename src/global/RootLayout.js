import React from "react";
import { useState } from "react";
import TopNav from "./TopNav";
import Sidebar from "./Sidebar";
import Layout from "./Layout";
import "../css/bootstrap.css";
import "../css/style.css";
import Footer from "./Footer";

function RootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the state of sidebarOpen from TopNav
  const toggleSidebar = () => {
    console.log("toggle");
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <Sidebar toggleSidebar={toggleSidebar} />
      <div className="container-fluid position-relative d-flex p-0">
        <div className="content ">
          <TopNav toggleSidebar={toggleSidebar} />
          <Layout />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
