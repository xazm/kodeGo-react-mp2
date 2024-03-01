import React from "react";
import MyImg from "../assets/MyImg.png";
import "bootstrap/js/dist/dropdown";

function TopNav({ toggleSidebar }) {
  const handelSearch = (e) => {
    let searchTerm = e.target.value;
    console.log(searchTerm);
  };
  return (
    <div className="topNav">
      <div className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
        <div className="navbar-brand d-flex d-lg-none me-4">
          <h2 className="text-primary mb-0">
            <i className="fa fa-user-edit"></i>
          </h2>
        </div>
        <div className="sidebar-toggler flex-shrink-0" onClick={toggleSidebar}>
          <i className="fa fa-bars"></i>
        </div>

        <form className="d-none d-md-flex ms-4">
          <input
            className="form-control bg-dark border-0"
            type="search"
            placeholder="Search"
            onChange={handelSearch}
          />
        </form>

        <div className="navbar-nav align-items-center ms-auto">
          <div className="nav-item dropdown">
            <div className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              <img
                className="rounded-circle me-lg-2"
                src={MyImg}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <span className="d-none d-lg-inline-flex">John Doe</span>
            </div>
            <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
              <div className="dropdown-item">My Profile</div>
              <div className="dropdown-item">Settings</div>
              <div className="dropdown-item">Log Out</div>
            </div>
          </div>
        </div>
      </div>
      {/* //// */}
    </div>

    ///////
  );
}

export default TopNav;
