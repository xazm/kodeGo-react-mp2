import React from "react";
// import Sidebar from "../global/Sidebar";
// import TopNav from "../global/TopNav";
import "../css/style.css";
import "../css/bootstrap.css";

import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <div className="container-fluid pt-4 px-4">
        <div className=" row g-4">
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
                <h6 className="mb-0">Recent Salse</h6>
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
                    <tr>
                      <td>1</td>
                      <td>01 Jan 2045</td>
                      <td>INV-0123</td>
                      <td>Jhon Doe</td>
                      <td>$123</td>
                      <td>Paid</td>
                      <td>
                        <button className="btn btn-sm btn-primary">
                          Detail
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>01 Jan 2045</td>
                      <td>INV-0123</td>
                      <td>Jhon Doe</td>
                      <td>$123</td>
                      <td>Paid</td>
                      <td>
                        <button className="btn btn-sm btn-primary">
                          Detail
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>01 Jan 2045</td>
                      <td>INV-0123</td>
                      <td>Jhon Doe</td>
                      <td>$123</td>
                      <td>Paid</td>
                      <td>
                        <button className="btn btn-sm btn-primary">
                          Detail
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>01 Jan 2045</td>
                      <td>INV-0123</td>
                      <td>Jhon Doe</td>
                      <td>$123</td>
                      <td>Paid</td>
                      <td>
                        <button className="btn btn-sm btn-primary">
                          Detail
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>01 Jan 2045</td>
                      <td>INV-0123</td>
                      <td>Jhon Doe</td>
                      <td>$123</td>
                      <td>Paid</td>
                      <td>
                        <button className="btn btn-sm btn-primary">
                          Detail
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>01 Jan 2045</td>
                      <td>INV-0123</td>
                      <td>Jhon Doe</td>
                      <td>$123</td>
                      <td>Paid</td>
                      <td>
                        <button className="btn btn-sm btn-primary">
                          Detail
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>01 Jan 2045</td>
                      <td>INV-0123</td>
                      <td>Jhon Doe</td>
                      <td>$123</td>
                      <td>Paid</td>
                      <td>
                        <button className="btn btn-sm btn-primary">
                          Detail
                        </button>
                      </td>
                    </tr>
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
