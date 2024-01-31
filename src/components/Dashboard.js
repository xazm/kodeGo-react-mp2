import React from "react";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="bg-black vh-100 container-fluid position-relative d-flex p-0 ">
      <Sidebar />
    </div>
  );
}

export default Dashboard;
