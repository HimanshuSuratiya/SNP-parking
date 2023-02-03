import React from "react";
import { useState } from "react";

const CreatePrivacypolicy = () => {
    const [heading, setHeading] = useState("");
    const [description, setDescription] = useState("");
    function getData(e) {

        e.preventDefault();
        console.warn("heading:", heading); <br />
        console.warn("description:" + description)
        setHeading("")
        setDescription("")
    }

    return (
        <>
            <div className="page-wrapper" style={{ minHeight: "250px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="application-detail-heading-area">
                                <h2>Create Privacy & Policy</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="contact-notification-detail-main-area">
                                <form className="send-notifications-form-area" onSubmit={getData}>
                                    <div className="form-group">
                                        <label>Heading</label>
                                        <input type="text" className="form-control field" name="holdername" autoComplete="off" placeholder="Enter Heading" autofocus="" required="" id="name" onChange={(e) => setHeading(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control" placeholder="Enter Description" autoComplete="off" onChange={(e) => setDescription(e.target.value)}></textarea>
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
            </div>
        </>
    );
};

export default CreatePrivacypolicy;