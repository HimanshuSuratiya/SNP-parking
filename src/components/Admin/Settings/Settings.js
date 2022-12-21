import React, { useState } from "react";

const Settings = () => {
  const [type, setType] = useState(1);
  const [country, setCountry] = useState("India")
  const [gender, setGender] = useState("Male")
  const [password, setPassword] = useState("");
  const [newpassword, setNewpassword] = useState("");

  return (
    <>
      <div className="page-wrapper" style={{ minHeight: "250px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-top">
                <h2>Settings</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="setting-tab-detail-main-area">
                <div className="setting-tab-main-area">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setType(1)}
                        className={
                          type == 1
                            ? "nav-link tab-btn  active"
                            : "nav-link tab-btn "
                        }
                        id="manage-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#manage-profile"
                        type="button"
                        role="tab"
                        aria-controls="manage-profile"
                        aria-selected="false"
                      >
                        <i className="fa fa-user" aria-hidden="true"></i>Manage
                        Profile
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setType(2)}
                        className={
                          type == 2
                            ? "nav-link tab-btn  active"
                            : "nav-link tab-btn "
                        }
                        id="change-password-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#change-password"
                        type="button"
                        role="tab"
                        aria-controls="change-password"
                        aria-selected="true"
                      >
                        <i className="fa fa-lock" aria-hidden="true"></i>Change
                        Password
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div
                    className={
                      type == 1 ? "tab-pane fade show active" : "tab-pane fade"
                    }
                    id="manage-profile"
                    role="tabpanel"
                    aria-labelledby="manage-profile-tab"
                  >
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="setting-tab-heading-area">
                          <h2>Personal Info</h2>
                        </div>
                        <div className="setting-profile-detail-main-area">
                          <div className="user-photo-main-area">
                            <div className="user-img-area">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/user-img.jpg"
                                }
                                alt="user img"
                              />
                            </div>
                            <div className="change-photo-btn-area">
                              <a href="#" className="change-poto-btn">
                                <i
                                  className="fa fa-camera"
                                  aria-hidden="true"
                                ></i>
                                Edit
                              </a>
                            </div>
                          </div>
                          <div className="user-detail-main-area">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="personal-information-heading">
                                  <h2>Full Name</h2>
                                  <h2>Email ID</h2>
                                  <h2>Phone</h2>
                                  <h2>Gender</h2>
                                  <h2>Country</h2>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="personal-information-details">
                                  <p>Himanshu Suratiya</p>
                                  <p>Himanshu12345@gmail.com</p>
                                  <p>1234567890</p>
                                  <p>Male</p>
                                  <p>India</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="setting-tab-heading-area">
                          <h2>Personal Details</h2>
                        </div>
                        <div className="setting-profile-detail-input-area">
                          <form
                            className="contact-form-main-area"
                            action="payment.php"
                            method="POST"
                            id="paymentFrm"
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>Name</label>
                                  <input
                                    type="text"
                                    className="form-control field"
                                    defaultValue={'Himanshu Suratiya'}
                                    name="holdername"
                                    placeholder="Enter First Name"
                                    autofocus=""
                                    required=""
                                    id="name"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>Email ID</label>
                                  <input
                                    type="text"
                                    className="form-control field"
                                    defaultValue={'Himanshu12345@gmail.com'}
                                    name="holdername"
                                    placeholder="Enter Email ID"
                                    autofocus=""
                                    required=""
                                    id="name"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>Contact Number</label>
                                  <input
                                    type="text"
                                    className="form-control field"
                                    defaultValue={'1234567890'}
                                    name="holdername"
                                    placeholder="Enter Contact Number"
                                    autofocus=""
                                    required=""
                                    id="name"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>Gender</label>
                                  <div className="profile-input-box-area">
                                    <select
                                      className="form-control"
                                      value={gender}
                                      onChange={(event) => {
                                        setGender(event.target.value);
                                      }}
                                      name="cars"
                                      id="cars"
                                    >
                                      <option value="">Select Gender</option>
                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                      <option value="other">Other</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>Address</label>
                                  <input
                                    type="text"
                                    className="form-control field"
                                    defaultValue={'House no 128 Noida sector-59'}
                                    name="holdername"
                                    placeholder="Enter Address"
                                    autofocus=""
                                    required=""
                                    id="name"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>Country</label>
                                  <div className="profile-input-box-area">
                                    <select
                                      className="form-control"
                                      name="cars"
                                      id="cars"
                                      value={country}
                                      onChange={(event) => {
                                        setCountry(event.target.value);
                                      }}
                                    >
                                      <option value="">Select Country</option>
                                      <option value="India">India</option>
                                      <option value="USA">USA</option>
                                      <option value="AUstralia">AUstralia</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>State</label>
                                  <div className="profile-input-box-area">
                                    <select
                                      className="form-control"
                                      name="cars"
                                      id="cars"
                                    >
                                      <option >Select State</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>City</label>
                                  <div className="profile-input-box-area">
                                    <select
                                      className="form-control"
                                      name="cars"
                                      id="cars"
                                    >
                                      <option value="">Select City</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>Postal/ZIP Code</label>
                                  <input
                                    type="text"
                                    className="form-control field"
                                    name="holdername"
                                    placeholder="Enter Postal/ZIP Code"
                                    autofocus=""
                                    required=""
                                    id="name"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="contact-form-submint-btn-area">
                                  <a
                                    href="javascript: void(0)"
                                    className="contact-form-submint-btn"
                                  >
                                    Submit
                                  </a>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      type == 2 ? "tab-pane fade show active" : "tab-pane fade"
                    }
                    id="change-password"
                    role="tabpanel"
                    aria-labelledby="change-password-tab"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="setting-tab-heading-area">
                          <h2>Change Password</h2>
                        </div>
                      </div>
                    </div>
                    <div className="change-password-input-box-area">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="change-password-lavel-area">
                            <h2>Old Password</h2>
                          </div>
                        </div>
                        <div className="col-lg-9">
                          <div className="change-password-input-box">
                            <input
                              type="text"
                              id="fname"
                              name="fname"
                              onChange={e => setPassword(e.target.value)}
                              required="true"
                              value={password}
                              className="form-control"
                              placeholder="Enter Old Password"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="change-password-input-box-area">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="change-password-lavel-area">
                            <h2>New Password</h2>
                          </div>
                        </div>
                        <div className="col-lg-9">
                          <div className="change-password-input-box">
                            <input
                              type="text"
                              id="fname"
                              name="newpassword"
                              onChange={(e) => setNewpassword(e.target.value)}
                              required="true"
                              value={newpassword}
                              className="form-control"
                              placeholder="Enter New Password"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="change-password-input-box-area">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="change-password-lavel-area">
                            <h2>Confirm Password</h2>
                          </div>
                        </div>
                        <div className="col-lg-9">
                          <div className="change-password-input-box">
                            <input
                              type="text"
                              id="fname"
                              name="confirmpassword"
                              required="true"
                              value={newpassword}
                              onChange={(e) => setNewpassword(e.target.value)}
                              className="form-control"
                              placeholder="Enter Confirm Password"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="change-password-submit-area">
                      <a
                        href="javascript:void(0);"
                        className="submit-password-change-btn"
                      >
                        Submit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer text-center"> 2022 © Admin Panel brought to you by <a
          href="https://https://www.webnmobappssolutions.com">webnmobappssolutions.com</a>
        </footer>
      </div>
    </>
  );
};

export default Settings;