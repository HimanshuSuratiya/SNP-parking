import React, { useState } from 'react';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination'
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DateRangePicker } from 'rsuite';
import "react-datepicker/dist/react-datepicker.css";

const Payments = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const data = [
        { id: '1', name: 'Himanshu Suratiya', bookingId: '741258963', payment: '$-40', date: '02/11/2022', time: '02:54 pm' },
        { id: '2', name: 'Vishal Singh', bookingId: '369852147', payment: '$-50', date: '04/12/2022', time: '08:27 am' },
        { id: '3', name: 'Sourabh Shukla', bookingId: '789654123', payment: '$-60', date: '02/11/2022', time: '12:00 am' },
        { id: '4', name: 'Shivam Suratiya', bookingId: '123654987', payment: '$-70', date: '02/10/2022', time: '07:00 am' },
        { id: '5', name: 'Pintu Kashyap', bookingId: '748596321', payment: '$-80', date: '02/11/2021', time: '03:04 pm' },
        { id: '6', name: 'Virender Kumar', bookingId: '485963217', payment: '$-90', date: '02/11/2022', time: '02:54 pm' },
    ]

    return (
        <>
            <div className="container-fluid ">
                <div className="add-location">
                    <div className="Payment">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="heading-top" >
                                    <h2>Manage Payment</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <DateRangePicker fullWidth />
                            </div>
                            <div className="col-md-3">
                                <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel fullwidth id="demo-select-small">Select</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Booking ID</MenuItem>
                                        <MenuItem value={20}>Cust Name</MenuItem>
                                        <MenuItem value={30}>Date</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-md-2">
                                <button class="head-button">Export</button>
                            </div>
                        </div>
                    </div>
                    <div className="manage-admins-main-area">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr No.</th>
                                    <th scope="col">Booking ID</th>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Payments</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) => (
                                        <tr>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.bookingId}</td>
                                            <td>{item.name}</td>
                                            <td>{item.payment}</td>
                                            <td>{item.date}</td>
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

export default Payments;