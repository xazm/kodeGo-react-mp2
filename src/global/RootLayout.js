import React from "react";
import TopNav from "./TopNav";
import Sidebar from "./Sidebar";
import Layout from "./Layout";
import "../css/bootstrap.css";
import "../css/style.css";

function RootLayout() {
  return (
    <div>
      <Sidebar />
      <div className="container-fluid position-relative d-flex p-0">
        <div className="content ">
          <TopNav />
          <Layout />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
