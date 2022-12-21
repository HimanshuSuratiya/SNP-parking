import React from 'react';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination'

const Bookings = () => {
    const data = [
        { id: '1', name: 'Himanshu Suratiya', parkingName: 'Parking-1', parkingLocation: 'Noida sector-18 Atta', startDate: '02/11/2022', endDate: '04/11/2022', time: '02:54 pm' },
        { id: '2', name: 'Vishal Singh', parkingName: 'Parking-2', parkingLocation: 'Noida sector-59 Kirtiman', startDate: '04/12/2022', endDate: '14/12/2022', time: '08:27 am' },
        { id: '3', name: 'Sourabh Shukla', parkingName: 'Parking-3', parkingLocation: 'Noida sector-37', startDate: '02/11/2022', endDate: '10/11/2022', time: '12:00 am' },
        { id: '4', name: 'Shivam Suratiya', parkingName: 'Parking-4', parkingLocation: 'Delhi 110096', startDate: '02/10/2022', endDate: '04/10/2022', time: '07:00 am' },
        { id: '5', name: 'Pintu Kashyap', parkingName: 'Parking-5', parkingLocation: 'South Delhi Punjabi bagh', startDate: '02/11/2021', endDate: '02/11/2022', time: '03:04 pm' },
        { id: '6', name: 'Virender Kumar', parkingName: 'Parking-6', parkingLocation: 'Noida sector-63', startDate: '02/11/2022', endDate: '04/11/2022', time: '02:54 pm' },
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
                                            <td>{item.name}</td>
                                            <td>{item.parkingName}</td>
                                            <td>{item.parkingLocation}</td>
                                            <td>{item.startDate}</td>
                                            <td>{item.endDate}</td>
                                            <td>{item.time}</td>
                                            <td><Link className="mange-admins-dlt-btn"><DeleteForever style={{ color: '#FF5C93' }} /></Link></td>
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