import React from 'react';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination'

const Bookings = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const data = [
        { id: '1', add: 'Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401', cap: '100', ic1: <i className="fas fa-edit"></i>, ic2: <DeleteForever style={{ color: '#FF5C93' }} /> },
        { id: '2', add: 'Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401', cap: '100', ic1: <i className="fas fa-edit"></i>, ic2: <DeleteForever style={{ color: '#FF5C93' }} /> },
        { id: '3', add: 'Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401', cap: '100', ic1: <i className="fas fa-edit"></i>, ic2: <DeleteForever style={{ color: '#FF5C93' }} /> },
        { id: '4', add: 'Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401', cap: '100', ic1: <i className="fas fa-edit"></i>, ic2: <DeleteForever style={{ color: '#FF5C93' }} /> },
        { id: '5', add: 'Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401', cap: '100', ic1: <i className="fas fa-edit"></i>, ic2: <DeleteForever style={{ color: '#FF5C93' }} /> },
    ]

    return (
        <>
            <div className="container-fluid ">
                <div className="add-location">
                    <div className="booking-wrapper">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="heading-top" >
                                    <h2>Booking</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="table-data-search-box-manage">
                                    <div className="search-bar" >
                                        <input type="text" className="searchTerm-input" placeholder="Search" />
                                        <button type="submit" className="searchButtons">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="manage-admins-main-area">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr No.</th>
                                    <th scope="col">Customer  Name</th>
                                    <th scope="col">Parking Name</th>
                                    <th scope="col">Parking Location</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) => (
                                        <tr>
                                            <th scope="row">{item.id}</th>
                                            <td>Vishal Singh</td>
                                            <td>45452</td>
                                            <td>Noida sec59 kritiman</td>
                                            <td>02/11/2022</td>
                                            <td>04/11/2022</td>
                                            <td>02:54 pm</td>
                                            <td>
                                                <Link className="mange-admins-dlt-btn"><DeleteForever style={{ color: '#FF5C93' }} /></Link>
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
            <footer className="footer text-center"> 2022 © Admin Panel brought to you by <a
                href="https://https://www.webnmobappssolutions.com">webnmobappssolutions.com</a>
            </footer>
        </>
    )
}

export default Bookings;