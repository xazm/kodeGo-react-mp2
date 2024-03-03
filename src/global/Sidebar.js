import React from "react";
import companyLogo from "../assets/companyLogo.png";
import MyImg from "../assets/MyImg.png";
// import "bootstrap/js/dist/dropdown";
import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open " : ""}`}>
      <div className="sidebar pe-4 pb-3">
        <nav className="navbar navbar-dark">
          <div className=" d-flex align-items-center navbar-brand mx-4 mb-3">
            <img
              src={companyLogo}
              alt="Logo"
              className="img-fluid "
              style={{ width: "50px" }}
            />
            <h3 className="text-warning">M Autoshop</h3>
          </div>

          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img
                className="rounded-circle"
                src={MyImg}
                alt="profile"
                style={{ width: "40px", height: "40px" }}
              />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>
            <div className="ms-3">
              <h6 className="mb-0">XAZM</h6>
              <span className="admin">Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <Link to="/dashboard" className="nav-item nav-link ">
              <i className="fa fa-tachometer-alt me-2"></i>Dashboard
            </Link>
            <div className="nav-item dropdown">
              <div
                className="nav-item nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-keyboard me-2"></i>Forms
              </div>

              <div className="dropdown-menu bg-transparent border-0">
                <Link to="/invoice-form/:id" className="dropdown-item">
                  Invoice form
                </Link>
                <Link to="/quotation-form" className="dropdown-item">
                  Quotaion
                </Link>
              </div>
            </div>

            <Link to="/invoice-list" className="nav-item nav-link">
              <i className="fa fa-table me-2"></i>Invoice
            </Link>
            <Link to="/quotaion-list" className="nav-item nav-link">
              <i className="fa fa-chart-bar me-2"></i>Quotaion
            </Link>
          </div>
        </nav>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Sidebar;
