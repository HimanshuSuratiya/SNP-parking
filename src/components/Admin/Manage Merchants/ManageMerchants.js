import React, { useState } from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Pagination from '@mui/material/Pagination'
import { Link } from "react-router-dom";
import DeleteForever from '@material-ui/icons/DeleteForever';

const ManageMerchants = () => {
    const [data, setData] = useState([
        { SNo: "1", custmerName: "Vishal parking", email: "vksingh2992000@gmail.com", phone: "8076053744", numberParking: " 133" },
        { SNo: "2", custmerName: "rajesh parking", email: "rajesh2992000@gmail.com", phone: "7076053745", numberParking: " 143" },
        { SNo: "3", custmerName: "shubham parking", email: "shubham1000@gmail.com", phone: "9476053744", numberParking: "187" },
        { SNo: "4", custmerName: "ankit parking", email: "ankit2992000@gmail.com", phone: "9576053744", numberParking: "108" },
        { SNo: "5", custmerName: "Vinod parking", email: "vinod2992000@gmail.comd", phone: "7876053744", numberParking: "155" },
        { SNo: "6", custmerName: "aman parking", email: "aman2992000@gmail.comt", phone: "4776053744", numberParking: "107" }

    ])

    const [activeInactive, setActiveInactive] = useState(true)
    const filterName = (e) => {
        const search = e.target.value.toLowerCase();
        const filteredNames = data.filter((names) =>
            names.custmerName.toLowerCase().includes(search) || names.email.toLowerCase().includes(search) || names.phone.toLowerCase().includes(search) || names.numberParking.toLowerCase().includes(search)
        );
        setData(filteredNames);
    };

    function deleteData(item) {
        if (window.confirm("Are you sure you want to delete?")) {
            let copy = data.filter((current) => current !== item);
            setData([...copy]);

        }


    }
    return (
        <>
            <div className="page-wrapper" style={{ minHeight: "250px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="heading-top" >
                                        <h2>Manage  customer</h2>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="table-data-search-box-manage">
                                        <div className="search-bar" >
                                            <input type="text" className="searchTerm-input" placeholder="Search" onChange={filterName} />
                                            <button type="submit" className="searchButtons">
                                                <i className="fa fa-search" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <button href="#/app/add-admin" class="head-button">Export</button>
                                </div>
                            </div>
                            <div className="manage-admins-main-area">
                                <div className="manage-admins-table-area">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Sr. No.</th>
                                                <th>Customer Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>No. of Parkings</th>
                                                <th>View Details</th>
                                                <th>Action</th>
                                                <th>Active/Inactive</th>
                                            </tr>
                                        </thead>
                                        <tbody>


                                            {

                                                data.map((item) => (

                                                    <tr >
                                                        <td>{item.SNo}</td>
                                                        <td>{item.custmerName}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.phone}</td>
                                                        <td><Link to={`/app/customersparkingdetails`} > {item.numberParking}</Link></td>
                                                        <td><Link to={`/app/customersdetails`} > <VisibilityIcon /></Link></td>
                                                        <td>
                                                            <Link to={`/app/edit-admin/}`} className="mange-admins-edit-btn"><i className="fas fa-edit"></i></Link>
                                                            <Link to={`/app/admin/`} onClick={() => deleteData(item)} className="mange-admins-dlt-btn">                                                            <DeleteForever style={{ color: '#FF5C93' }} />
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <BootstrapSwitchButton
                                                                onlabel='Active'
                                                                width={100}
                                                                offlabel='Inactive'
                                                                onstyle="success"
                                                                onChange={() => {
                                                                    setActiveInactive(!activeInactive);
                                                                }}
                                                            />
                                                        </td>
                                                    </tr>


                                                )


                                                )}
                                        </tbody>
                                    </table>
                                    <Pagination count={100} color="primary" />
                                </div>
                            </div>
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

export default ManageMerchants;
