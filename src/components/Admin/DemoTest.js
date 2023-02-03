import { useState } from "react";

function AddInputField() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(null);

  function dataSubmit() {
    const data = { name, email, address };

    if (edit) {
      //update code
      let copy = users;
      Object.assign(copy[active], data);
      setUsers([...copy]);
      setEdit(false);
      setActive(null);
    } else {
      setUsers([...users, data]);
      //add code
    }
    setName("");
    setEmail("");
    setAddress("");
  }
  function editData(index) {
    alert(index);
    const user = users[index];
    setName(user.name);
    setEmail(user.email);
    setAddress(user.address);
    setActive(index);
    setEdit(true);
  }
  function deleteData(item) {
    if (window.confirm("Are you sure you want to delete?")) {
      let copy = users.filter((current) => current !== item);
      setUsers([...copy]);
    }
  }
  return (
    <>
      <h1>This is input field </h1>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /> <br />
      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /> <br />
      <label>Address:</label>
      <input
        type="text"
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit" class="btn btn-primary" onClick={dataSubmit}>
        {edit ? "update" : "add"}
      </button>
      <table border="1" width="100%">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>
                <button onClick={() => editData(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => deleteData(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default AddInputField;
import React from "react";
import DeleteForever from '@material-ui/icons/DeleteForever';
import Pagination from '@mui/material/Pagination'

const ManageCar = () => {
    const [data, setData] = useState([
        { SNo: "1", carnumber: "29564752", startTime: "10:25 AM", endTime: "07:40 PM", startdate: "10/01/2023", endData: "10/01/2023", VisitDate: "10/01/2023" },
        { SNo: "2", carnumber: "29564746", startTime: "10:25 AM", endTime: "07:40 PM", startTime: "10/01/2023", endData: "10/01/2023",  VisitDate: "10/01/2023" },
        { SNo: "3", carnumber: "29744894", startTime: "10:25 AMi", endTime: "07:40 PM" , startTime: "10/01/2023", endData: "10/01/2023",  VisitDate: "10/01/2023"},
        { SNo: "4", carnumber: "49595995", startTime: "10:25 AM", endTime: "07:40 PM" , startTime: "10/01/2023", endData: "10/01/2023",  VisitDate: "10/01/2023"},
        { SNo: "5", carnumber: "78479939", startTime: "10:25 AM", endTime: "07:40 PM", startTime: "10/01/2023", endData: "10/01/2023",  VisitDate: "10/01/2023" },
        { SNo: "6", carnumber: "85885894", startTime: "10:25 AMt", endTime: "07:40 PM", startTime: "10/01/2023", endData: "10/01/2023",  VisitDate: "10/01/2023" }

    ])
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
                                <div className="col-md-8">
                                    <div className="heading-top" >
                                        <h2>Manage Car</h2>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex justify-content-end align-items-center">
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
                            <div className="manage-admins-main-area">
                                <div className="manage-admins-table-area">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>S.No.</th>
                                                <th>Car No</th>
                                                <th>Start Time</th>
                                                <th>End Time</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Recent Visit Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr >
                                                <td>1</td>
                                                <td>29564752</td>
                                                <td>10:25 AM</td>
                                                <td>07:40 PM</td>
                                                <td>10/01/2023</td>
                                                <td>15/01/2023</td>
                                                <td>03/01/2023</td>
                                                <td>
                                                    <div>
                                                        <i className="fas fa-edit" style={{ fontSize: '18px' }}></i>
                                                        <DeleteForever style={{ color: '#0e2259' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <Pagination count={10} color="primary"
                                    // currentPage={currentPage}
                                    // totalCount={data.length}
                                    // pageSize={PageSize}
                                    // onPageChange={page => setCurrentPage(page)}
                                    />
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
    )
}

export default ManageCar;