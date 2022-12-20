import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { URL } from "../../../url/url";
import { toast } from "react-toastify";

const ContactDetails = () => {
  const history = useHistory();
  const [Phone_number, setPhone_number] = useState([]);
  const [email, setEmail] = useState([]);
  const [address, setAddress] = useState([]);
  const [data, getData] = useState([]);

  const createContactDetails = (e) => { }

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
              <form className="send-notifications-form-area">
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
                  />
                </div>
                <div className="form-group">
                  <label>Email ID</label>
                  <input
                    type="text"
                    className="form-control field"
                    name="holdername"
                    placeholder="Enter Email ID"
                    autofocus=""
                    required=""
                    id="name"
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
                  />
                </div>
                <div className="contact-form-submint-btn-area">
                  <a
                    href="#/app/contact-us"
                    onClick={createContactDetails}
                    className="contact-form-submint-btn"
                  >
                    Submit
                  </a>
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
