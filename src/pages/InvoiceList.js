import React from "react";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function InventoryList() {
  const [allInvoiceDB, setAllInvoiceDB] = useState([]);

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
    <div className="container-fluid pt-4 px-4 ">
      <div className="bg-secondary text-center rounded p-4">
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
                  <td>
                    {" "}
                    <Button className="btn btn-success">paid</Button>
                  </td>
                  <td>
                    {" "}
                    <Button className="btn btn-danger">details</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InventoryList;
