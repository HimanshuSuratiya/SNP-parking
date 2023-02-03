import React, { useState } from 'react';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { Link } from "react-router-dom";
import BootstrapDialog from './BootstrapDialog';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import 'reactjs-popup/dist/index.css';
import Pagination from '@mui/material/Pagination'
import { Modal } from 'bootstrap';
import { Button } from 'rsuite';
const ManageLocation = () => {
    const [activeInactive, setActiveInactive] = useState(true)
    const [age, setAge] = React.useState('');
    const [name, setName] = useState("Noida59 kirtimaan ,1stflor")

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [data, setData] = useState([
        { id: '1', location: "Noida59 kirtimaan ,1stflor" },
        { id: '2', location: "delhi kirtimaan ,2stflor" },
        { id: '3', location: "utter pradeshkirtimaan ,3stflor" },
        { id: '4', location: "varanasi kirtimaan ,4stflor" },
        { id: '5', location: "meerut kirtimaan ,5stflor" },
    ])
    function editData(index) {
        alert(index);
        const user = data[index];

    }
    function deleteData(item) {
        if (window.confirm("Are you sure you want to delete?")) {
            let copy = data.filter((current) => current !== item);
            setData([...copy]);

        }


    }
    const filterName = (e) => {
        const search = e.target.value.toLowerCase();
        const filteredNames = data.filter((names) =>
            names.location.toLowerCase().includes(search)
        );
        setData(filteredNames);
    };


    return (
        <>
            <div className="container-fluid ">
                <div className="add-location">
                    <div className="booking-wrapper">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="heading-top" >
                                    <h2>Manage Location</h2>
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
                            <div className="col-md-2 ">
                                <div className="boots">
                                    <BootstrapDialog />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button href="#/app/add-admin" class="head-button">Export</button>
                            </div>
                        </div>
                    </div>
                    <div className="manage-admins-main-area">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr No.</th>
                                    <th scope="col">Parking Location</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Active/Inactive</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index) => (
                                        <tr>
                                            <td scope="row">{item.id}</td>
                                            <td >{item.location}</td>
                                            <td>

                                                <Link className="mange-admins-edit-btn"><i className="fas fa-edit" onClick={() => editData(index)} data-bs-target="#exampleModal" ></i></Link>
                                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                ...
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" class="btn btn-primary">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link className="mange-admins-dlt-btn"><DeleteForever style={{ color: '#FF5C93' }} onClick={() => deleteData(item)} /></Link>

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
                                    ))
                                }
                            </tbody>
                        </table>
                        <Pagination count={10} color="primary" />
                    </div>
                </div>
            </div>
            <footer className="footer text-center"> 2022 ©Admin Panel brought to you by <a
                href="https://https://www.webnmobappssolutions.com">webnmobappssolutions.com</a>
            </footer>
        </>
    )
}

export default ManageLocation