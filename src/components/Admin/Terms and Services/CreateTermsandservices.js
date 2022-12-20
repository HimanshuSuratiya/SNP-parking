import React, { useState, useEffect } from "react";
import Axios from "axios";
import { URL } from "../../../url/url";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CreateTermsandservices = () => {
  const [heading, setHeading] = useState([])
  const [descriptions, setDescriptions] = useState([])
  const [data, getData] = useState([])

  const createTerms = (e) => {
    e.preventDefault();
    Axios.post(
      URL + "/createtermsandservices",
      {
        heading: heading,
        descriptions: descriptions,
      },
      {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    )
      .then((res) => {
        console.log(res + 'jai bajrang')
        alert("Terms and Conditions Created  Successfully");
        console.log("data submitted successfully");
      })
      .catch((err) => {
        console.log(err);
        console.log("data not submitted");
      });
  };

  // const URL = "http://localhost:5000/gettermsandservices";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL + "/gettermsandservices")
      .then((res) => res.json())
      .then((response) => {
        console.log(response.data[0]);
        getData(response.data[0])
        setHeading(response.data[0]['heading'])
        setDescriptions(response.data[0]['descriptions'])
      });
  };

  return (
    <>
      <div className="page-wrapper" style={{ minHeight: "250px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="application-detail-heading-area">
                <h2>Create Terms & Conditions</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contact-notification-detail-main-area">
                <form className="send-notifications-form-area">
                  <div className="form-group">
                    <label>Heading</label>
                    <input type="text" className="form-control field" defaultValue={data.heading} onChange={(e) => { setHeading(e.target.value) }} name="holdername" placeholder="Enter Heading" autofocus="" required="" id="name" />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Terms and policy</p>"
                      onReady={editor => {
                        console.log('Editor is ready to use!', editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                      }}
                      onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                      }}
                    />
                  </div>
                  <div className="contact-form-submint-btn-area">
                    <a href="#" onClick={createTerms} className="contact-form-submint-btn">Submit</a>
                  </div>
                </form>
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

export default CreateTermsandservices;