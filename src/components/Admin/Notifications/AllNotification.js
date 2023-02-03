import React from "react";
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination'
import NotificationList from '../../Admin/NotificationList'
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';

const AllNotification = () => {
  const [data, setData] = useState([
    { id: '1', name: 'Himanshu Suratiya', title: 'For new parking', message: 'You are the best person , your lovely person', date: '02/11/2022' },
    { id: '2', name: 'Vishal Singh', title: 'For thank ypu', message: 'You are the best person , your lovely person', date: '04/12/2022' },
    { id: '3', name: 'Sourabh Shukla', title: 'please visist again', message: 'You are the best person , your lovely person', date: '02/11/2022' },
    { id: '4', name: 'Shivam Suratiya', title: 'something went wrong', message: 'You are the best person , your lovely person', date: '02/10/2022' },
    { id: '5', name: 'Pintu Kashyap', title: 'Park new car', message: 'You are the best person , your lovely person', date: '02/11/2021' },
    { id: '6', name: 'Virender Kumar', title: 'Parking-6', message: 'You are the best person , your lovely person', date: '02/11/2022' },
  ])
  function deleteData(item) {
    if (window.confirm("Are you sure you want to delete?")) {
      let copy = data.filter((current) => current !== item);
      setData([...copy]);

    }
  }

  return (
    <div className="page-wrapper" >
      <div className="container-fluid">
        <div className="add-location">
          <div className="row">
            <div className="col-md-6">
              <div className="heading-top" >
                <h2>Notification List</h2>
              </div>
            </div>
            <div className="col-md-3">
            </div>
            <div className="col-md-3 add-notification">
              <NotificationList />
            </div>
            <div className="manage-admins-main-area">
              <div className="manage-admins-table-area">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Sr. no.</th>
                      <th>Customer Name</th>
                      <th>Title</th>
                      <th>Message</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => {
                      return (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.title}</td>
                          <td>{item.message}</td>
                          <td>{item.date}</td>
                          <td>
                            <Link to={`/app/customersdetails`} > <VisibilityIcon /></Link>
                            <Link to={`/app/notifications/`} className="mange-admins-dlt-btn" ><i class="far fa-trash-alt" onClick={() => deleteData(item)}></i></Link>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                <Pagination count={10} color="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer text-center"> 2022 © Admin Panel brought to you by <a
        href="https://https://www.webnmobappssolutions.com">webnmobappssolutions.com</a>
      </footer>
    </div >
  );
};

export default AllNotification;
