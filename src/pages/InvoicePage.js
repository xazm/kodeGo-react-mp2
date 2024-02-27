import { useState } from "react";
import companyLogo from "../assets/companyLogo.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../css/style.css";
import apiRequest from "../dataFetch/apiFetch";

function InvoicePage() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [invoice, setInvoice] = useState("");
  const [date, setDate] = useState("");
  const [mobile, setMobile] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState("");
  const [product, setProduct] = useState("");
  const [invoiceProd, setInvoiceProd] = useState([]);
  const [allTotal, setAlltotal] = useState("");

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const fullNameHandle = (fullName) => {
    setFullName(fullName);
    console.log(fullName);
  };
  const addressHandle = (address) => {
    setAddress(address);
    console.log(address);
  };
  const contactHandle = (contact) => {
    setContact(contact);
    console.log(contact);
  };
  const invoiceHandle = (invoice) => {
    setInvoice(invoice);
    console.log(invoice);
  };
  const dateHandle = (date) => {
    setDate(date);
    console.log(date);
  };
  const mobileHandle = (mobile) => {
    setMobile(mobile);
    console.log(mobile);
  };
  const quantityHandle = (quantity) => {
    // my quantity handle
    setQuantity(quantity);
    setQuantity(quantity);
  };

  const priceHandle = (price) => {
    // my price handle
    setPrice(price);
    setTotal(price * quantity);
  };

  const productHandle = (product) => {
    setProduct(product);
  };

  // modal save btn
  const handleSave = async (id) => {
    const objReq = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "id=" +
        id +
        "&qty=" +
        quantity +
        "&price=" +
        price +
        "&product=" +
        product +
        "&total=" +
        total,
    };

    const data = await apiRequest(
      "http://localhost:5000/invoiceProduct",
      objReq
    );

    const dataProd = data.invoiceProductDB;
    // // let dataInvoice = data.invoiceProductDB;

    // // for (let i = 0; i < dataInvoice.length; i++) {
    // //   for (let j = 0; i < dataInvoice[i].productDB.length; j++) {
    // //     if (j === 0) {
    // //       // console.log(dataInvoice[i].productDB[j]);

    // //       // response
    // //       setInvoiceProd(dataInvoice[i].productDB);
    // //     }
    // //   }
    // // }
    // if (data.code === "success") {
    //   console.log("Ok save ");
    // } else {
    //   console.log("Not save");
    // }
    var allTotal = 0;
    for (let i = 0; i < dataProd.length; i++) {
      var subTotal = dataProd[i].total;
      allTotal += parseFloat(subTotal);
      console.log(allTotal);
      setAlltotal(allTotal.toFixed(2));
    }

    // response;
    if (data.code === "success") {
      console.log(data.invoiceProductDB);
      setInvoiceProd(data.invoiceProductDB[0].productDB);
      console.log("Ok save ");
    } else {
      console.log("Not save");
    }
    setShow(false);
  };

  const deleteItem = (id) => {
    alert(id);
  };
  const updateItem = (id) => {
    alert(id);
  };
  return (
    <div className="container-fluid pt-4 px-4 ">
      <div className=" invoice-header-container bg-secondary p-4">
        <header className=" invoice-header mb-5">
          <div>
            <img
              src={companyLogo}
              alt="Logo"
              className="img-fluid "
              style={{ width: "150px" }}
            />
          </div>
          <div className=" ">
            <div>
              <h3>M Autoshop & Accessories</h3>
              <h6 className="m-0">Daet, Camarines Norte</h6>
              <h6 className="m-0">090909090</h6>
              <h6 className="m-0">example@gmail.com</h6>
            </div>
          </div>

          <div>
            <h3>INVOICE</h3>
          </div>
        </header>
        <form className="invoice-header-form d-flex ">
          <div className="col head-form left">
            <div className="col-8 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => fullNameHandle(e.target.value)}
              />
            </div>
            <div className="col-8 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={address}
                onChange={(e) => addressHandle(e.target.value)}
              />
            </div>
            <div className="col-8 mb-2">
              <input
                type="number"
                className="form-control"
                placeholder="Contact"
                value={contact}
                onChange={(e) => contactHandle(e.target.value)}
              />
            </div>
          </div>
          <div className="col head-form right ">
            <div className="col-8 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Invoice #"
                value={invoice}
                onChange={(e) => invoiceHandle(e.target.value)}
              />
            </div>
            <div className="col-8 mb-2">
              <input
                type="date"
                className="form-control"
                placeholder="Date"
                value={date}
                onChange={(e) => dateHandle(e.target.value)}
              />
            </div>
            <div className="col-8 mb-2">
              <input
                type="number"
                className="form-control"
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => mobileHandle(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div className="table-responsive mt-3">
          <table className="table text-start align-middle table-bordered table-hover mb-0">
            <thead>
              <tr className="text-white">
                <th scope="col" className="col-1">
                  #
                </th>
                <th scope="col" className="col-1">
                  Qty
                </th>
                <th scope="col" className="col-4">
                  Code/Description
                </th>
                <th scope="col" className="col-1">
                  Price
                </th>
                <th scope="col" className="col-1">
                  Total
                </th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoiceProd.map((item, i) => (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.qty}</td>
                  <td>{item.product}</td>
                  <td>₱{item.price}</td>
                  <td>₱{item.total}</td>

                  <td className=" col-md-2  col-sm-3 ">
                    <Button
                      variant="outline-info my-1 "
                      onClick={() => deleteItem(item.id)}
                    >
                      Edit
                    </Button>{" "}
                    {"  "}
                    <Button variant="outline-primary my-1" onClick={updateItem}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className=" container-fluid justify-content-between btn-total">
            <button
              className="btn btn-sm btn-warning my-2"
              onClick={handleShow}
            >
              add
            </button>
            <div className=" col-xl-5 p-2 col-lg-6 col-sm-5 col-xs-12 ">
              <div className="d-flex col-lg-10   justify-content-between align-items-center">
                <div className="h1">Total</div>
                <div className="h3">₱{allTotal}</div>
              </div>
            </div>
          </div>
          <div className=" mt-5 gap-2 mx-5 d-flex justify-content-end">
            <Button variant="success">Paid</Button>{" "}
            <Button variant="light">Draft</Button>{" "}
          </div>
        </div>
        <div>
          <Modal show={show} onHide={handleClose} className=" shadow ">
            <Modal.Header closeButton className="bg-secondary">
              <Modal.Title className="">Add Product</Modal.Title>
            </Modal.Header>

            <Modal.Body className="bg-secondary table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col">#</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Code/Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td value={""}>1</td>
                    <td className="col-2">
                      <input
                        type="number"
                        className="form-control text-white"
                        onChange={(e) => quantityHandle(e.target.value)}
                      />
                    </td>
                    <td className="col">
                      <input
                        type="text"
                        className="form-control text-white"
                        onChange={(e) => productHandle(e.target.value)}
                      />
                    </td>
                    <td className="col-2">
                      <input
                        type="number"
                        className="form-control text-white"
                        onChange={(e) => priceHandle(e.target.value)}
                      />
                    </td>
                    <td>{total}</td>
                  </tr>
                </tbody>
              </table>
            </Modal.Body>

            <Modal.Footer className="bg-secondary">
              <Button onClick={handleClose} className="btn btn-primary">
                Close
              </Button>
              <Button className="btn btn-warning" onClick={() => handleSave(1)}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default InvoicePage;
