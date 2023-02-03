import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ContactDetails = () => {

  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");



  function getData(e) {

    e.preventDefault();
    console.warn("Phone:", Phone); <br />
    console.warn("email:", email); <br />
    console.warn("address:" + address)
    setPhone("")
    setEmail("")
    setAddress("")
  }


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="application-detail-heading-area"
              style={{ padding: "10px" }}
            >
              <h2>Create Contact Details</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="contact-notification-detail-main-area">
              <form className="send-notifications-form-area" onSubmit={getData}>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control field"
                    name="holdername"
                    placeholder="Enter Phone Number"
                    autofocus=""
                    required=""
                    id="name"
                    autoComplete="off"
                    onChange={(e) => setPhone(e.target.value)}

                  />
                </div>
                <div className="form-group">
                  <label>Email ID</label>
                  <input
                    type="email"
                    className="form-control field"
                    name="holdername"
                    placeholder="Enter Email ID"
                    autofocus=""
                    required=""
                    id="name"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control field"
                    name="holdername"
                    placeholder="Enter Address"
                    autofocus=""
                    required=""
                    id="name"
                    autoComplete="off"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="contact-form-submint-btn-area">
                  <button className="contact-form-submint-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer text-center"> 2022 © Admin Panel brought to you by <a
        href="https://https://www.webnmobappssolutions.com">webnmobappssolutions.com</a>
      </footer>
    </>
  );
};

export default ContactDetails;
