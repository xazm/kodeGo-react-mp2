import React from "react";
// import Sidebar from "../global/Sidebar";
// import TopNav from "../global/TopNav";
import "../css/style.css";
import "../css/bootstrap.css";
import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Dashboard({ setFullName, setAddress }) {
  const Navigate = useNavigate();
  const [allInvoiceDB, setAllInvoiceDB] = useState([]);

  /// Functions
  // new invoice
  const createNewInvoice = () => {};

  // btn update detail
  const updateDetail = (id) => {
    Navigate(`/invoice-form/${id}`);
  };

  //all Invoice DB
  const handleAllInvoice = async () => {
    const token = localStorage.getItem("accessToken");
    // let newToken = token.replace(/"/g, "");
    let newToken = token;
    // console.log(token);
    const response = await fetch("http://localhost:5000/get_all_invoice", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAllInvoiceDB(data);
      });
  };

  useEffect(() => {
    handleAllInvoice();
  }, []); // on load page

  return (
    <div>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-6 col-xl-3">
            <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-line fa-3x text-primary"></i>
              <div className="ms-3">
                <p className="mb-2">Today Sale</p>
                <h6 className="mb-0">₱1234</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-bar fa-3x text-primary"></i>
              <div className="ms-3">
                <p className="mb-2">Total Sale</p>
                <h6 className="mb-0">₱1234</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-area fa-3x text-primary"></i>
              <div className="ms-3">
                <p className="mb-2">Today Revenue</p>
                <h6 className="mb-0">₱1234</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-pie fa-3x text-primary"></i>
              <div className="ms-3">
                <p className="mb-2">Total Revenue</p>
                <h6 className="mb-0">₱1234</h6>
              </div>
            </div>
          </div>

          {/* this is for the table Recent Sales */}
          <div className="container-fluid pt-4 px-4">
            <div className="bg-secondary text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="btn btn-warning" onClick={createNewInvoice}>
                  <i className="fa fa-plus"> Create New</i>
                </div>
                <h6 className="mb-0">Recent Sale</h6>

                <Link to="/invoice-list">Show All</Link>
              </div>
              <div className="table-responsive">
                <table className="table text-start align-middle table-bordered table-hover mb-0">
                  <thead>
                    <tr className="text-white">
                      <th scope="col">#</th>
                      <th scope="col">Date</th>
                      <th scope="col">Invoice</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {allInvoiceDB.map((item, i) => (
                      <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>{item.invoice}</td>
                        <td>{item.fullName}</td>
                        <td>₱ {item.allTotal}</td>
                        <td className=" ">paid</td>
                        <td>
                          <Button
                            className="btn btn-danger"
                            onClick={() => updateDetail(item.id)}
                          >
                            details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
