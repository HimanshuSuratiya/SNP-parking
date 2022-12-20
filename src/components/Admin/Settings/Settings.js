import * as Axios from "axios";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../../../url/url";
const Settings = () => {
  const [type, setType] = useState(1);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [postal, setPostal] = useState("")
  const [gender, setGender] = useState("")
  const [data, getData] = useState("")

  useEffect(() => {
    getadmindata()
  }, [])

  const getadmindata = async () => {
    const req = {
      'id': localStorage.getItem("superAdminId")
    }

    await axios.post(URL + '/getsettingsdata', req).then((response) => {
      console.log(response)
      getData(response.data.data[0])
      // setData(response.data.data[0])
      setName(response.data.data[0]['name'])
      setEmail(response.data.data[0]['email'])
      setAddress(response.data.data[0]['address'])
      setPhone(response.data.data[0]['phone_number'])
      setCountry(response.data.data[0]['country'])
      setState(response.data.data[0]['state'])
      setCity(response.data.data[0]['city'])
      setGender(response.data.data[0]['gender'])
      setPostal(response.data.data[0]['postal'])
    })
  }

  const submitform = async () => {
    let req = {
      'id': localStorage.getItem("superAdminId"),
      'name': name,
      'email': email,
      'phone': phone,
      'address': address,
      'country': country,
      'state': state,
      'city': city,
      'postal': postal,
      'gender': gender,
    }
    let res = await axios.post(URL + '/updateadmin', req).then(() => {
      alert('Data Updated Successfully')
      console.log(res)
    }).catch(err => { console.log(err) })
  }

  const [getcountrylist, setCountrylist] = useState([]);
  const [getstatelist, setStatelist] = useState([]);
  const [getcitylist, setCitylist] = useState([]);
  useEffect(() => {
    Axios.get(URL + "/countriesList", {
      Accept: "application/json",
      "Content-Type": "application/json",
    }).then((res) => {
      setCountrylist(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const stateShow = (countryid1) => {
    Axios.post(URL + `/statesList/`, { cid: countryid1 }, {
      Accept: "application/json",
      "Content-Type": "application/json",
    }).then((res) => {
      console.log(res)
      setStatelist(res.data.data);
      console.log(res.data.data);
    }).catch((err) => {
      console.log(err)
    })
  }

  const cityShow = (stateid1) => {
    Axios.post(URL + `/citiesList/`, { sid: stateid1 }, {
      Accept: "application/json",
      "Content-Type": "application/json",
    }).then((res) => {
      console.log(res)
      setCitylist(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const handlecountry = (e) => {
    setCountry(e.target.value);
    stateShow(e.target.value);
  }

  const handlestate = (e) => {
    const getstateid = e.target.value;
    setState(getstateid)
    cityShow(getstateid)
  }

  const [password, setPassword] = useState("");
  const [newpassword, setNewpassword] = useState("");

  const ChangePassword = async () => {
    let reqq = {
      'id': localStorage.getItem('superAdminId'),
      password: password,
      newpassword: newpassword,
    }
    console.log(reqq)
    await Axios.post(URL + '/resetpassword', reqq, {
      Accept: 'Application/json',
      'Content-Type': 'Application/json',
    }).then((res) => {
      alert('password changed successfully')
      console.log(res)
    }).catch((err) => {
      console.log(err + "error")
    })
    setPassword('')
    setNewpassword('')
  }






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
                    {/* <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setType(3)}
                        className={
                          type == 3
                            ? "nav-link tab-btn  active"
                            : "nav-link tab-btn "
                        }
                        id="purchase-plan-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#purchase-plan"
                        type="button"
                        role="tab"
                        aria-controls="purchase-plan"
                        aria-selected="false"
                      >
                        <i
                          className="fa fa-cart-arrow-down"
                          aria-hidden="true"
                        ></i>
                        Purchase Plan
                      </button>
                    </li> */}
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
                                  <p>
                                    {data.name}
                                  </p>

                                  <p>{data.email}</p>
                                  <p>{data.phone_number}</p>
                                  <p>{data.gender}</p>
                                  <p>{data.country}</p>
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
                                    onChange={(event) => {
                                      setName(event.target.value);
                                    }}
                                    defaultValue={data.name}
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
                                    onChange={(event) => {
                                      setEmail(event.target.value);
                                    }}
                                    defaultValue={data.email}
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
                                    onChange={(event) => {
                                      setPhone(event.target.value);
                                    }}
                                    defaultValue={data.phone_number}
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
                                    defaultValue={data.address}
                                    onChange={(event) => {
                                      setAddress(event.target.value);
                                    }}
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
                                      onChange={(e) => handlecountry(e)}
                                    >
                                      <option>--Choose Country--</option>

                                      {
                                        getcountrylist.map((e) => {
                                          return (
                                            <option value={e.id}>{e.name}</option>
                                          )
                                        })
                                      }



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
                                      onChange={(e) => handlestate(e)}

                                    >
                                      <option >Select State</option>
                                      {
                                        getstatelist.map((e) => {
                                          return (
                                            <option value={e.id}>{e.statename}</option>
                                          )
                                        })
                                      }


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
                                      onChange={(e) => setCity(e.target.value)}


                                    >
                                      <option value="">Select City</option>

                                      {
                                        getcitylist.map((e) => {
                                          return (
                                            <option value={e.id}>{e.cityname}</option>
                                          )
                                        })
                                      }


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
                                    defaultValue={data.postal}
                                    onChange={(event) => {
                                      setPostal(event.target.value);
                                    }}
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
                                    onClick={submitform}
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
                        onClick={ChangePassword}

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



//<a class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary" tabindex="0" role="button" aria-disabled="false" href="#/app/add-admin"><span class="MuiButton-label">Add Admin</span><span class="MuiTouchRipple-root"></span></a>