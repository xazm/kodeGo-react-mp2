import React from "react";

function Footer() {
  return (
    <div>
      <div className="container-fluid pt-4 px-4 position-relative">
        <div className="bg-secondary rounded-top p-4">
          <div className="d-flex">
            <div className="col-12 col-sm-6 text-center text-sm-start">
              &copy;{" "}
              <a href="https://www.xmartfinds.co">M Autoshop & Accessories</a>,
              All Right Reserved.
            </div>
            <div className="col-12 col-sm-6 text-center text-sm-end ">
              Designed By{" "}
              <a href="https://www.facebook.com/Xyrhyzkiel/">xazm</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
