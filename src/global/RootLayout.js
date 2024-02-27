import React from "react";
import TopNav from "./TopNav";
import Sidebar from "./Sidebar";
import Layout from "./Layout";
import "../css/bootstrap.css";
import "../css/style.css";
import Footer from "./Footer";

function RootLayout() {
  return (
    <div>
      <Sidebar />
      <div className="container-fluid position-relative d-flex p-0">
        <div className="content ">
          <TopNav />
          <Layout />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
