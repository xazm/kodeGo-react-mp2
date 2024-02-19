import React from "react";
import MyImg from "../assets/MyImg.png";

function TopNav({ toggleSidebar }) {
  return (
    <div className="">
      <div className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
        <div className="navbar-brand d-flex d-lg-none me-4">
          <h2 className="text-primary mb-0">
            <i className="fa fa-user-edit"></i>
          </h2>
        </div>
        <div className="sidebar-toggler flex-shrink-0" onClick={toggleSidebar}>
          {/* heres my toggle navbar */}
          <i className="fa fa-bars"></i>
        </div>

        <form className="d-none d-md-flex ms-4">
          <input
            className="form-control bg-dark border-0"
            type="search"
            placeholder="Search"
          />
        </form>

        {/* the rest of code Topnav */}
        <div className="navbar-nav align-items-center ms-auto">
          <div className="nav-item dropdown">
            <div className="nav-link dropdown-toggle">
              <i className="fa fa-envelope me-lg-2"></i>
              <span className="d-none d-lg-inline-flex">Message</span>
            </div>
            <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
              <div className="dropdown-item">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src="img/user.jpg"
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div className="ms-2">
                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </div>
              <hr className="dropdown-divider" />
              <div className="dropdown-item">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src="img/user.jpg"
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div className="ms-2">
                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </div>
              <hr className="dropdown-divider" />
              <div className="dropdown-item">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src=""
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div className="ms-2">
                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </div>
              <hr className="dropdown-divider" />
              <div className="dropdown-item text-center">See all message</div>
            </div>
          </div>
          <div className="nav-item dropdown">
            <div className="nav-link dropdown-toggle">
              <i className="fa fa-bell me-lg-2"></i>
              <span className="d-none d-lg-inline-flex">Notificatin</span>
            </div>
            <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
              <div className="dropdown-item">
                <h6 className="fw-normal mb-0">Profile updated</h6>
                <small>15 minutes ago</small>
              </div>
              <hr className="dropdown-divider" />
              <div className="dropdown-item">
                <h6 className="fw-normal mb-0">New user added</h6>
                <small>15 minutes ago</small>
              </div>
              <hr className="dropdown-divider" />
              <div className="dropdown-item">
                <h6 className="fw-normal mb-0">Password changed</h6>
                <small>15 minutes ago</small>
              </div>
              <hr className="dropdown-divider" />
              <div className="dropdown-item text-center">
                See all notifications
              </div>
            </div>
          </div>
          <div className="nav-item dropdown">
            <div className="nav-link dropdown-toggle">
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
