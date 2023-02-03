import React, { useState } from "react";
import DeleteForever from '@material-ui/icons/DeleteForever';
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Pagination from '@mui/material/Pagination'
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const ManageAdmin = () => {
    // let PageSize = 5
    const [data, setData] = useState([
        { SNo: "1", ParkingName: "Vishal parking", Location: "Faridabad", Capcity: "11000" },
        { SNo: "2", ParkingName: "rajesh parking", Location: "varanasi", Capcity: "13000" },
        { SNo: "3", ParkingName: "shubham parking", Location: "delhi", Capcity: "14000" },
        { SNo: "4", ParkingName: "ankit parking", Location: "jaunpur", Capcity: "15000" },
        { SNo: "5", ParkingName: "Vinod parking", Location: "allahabad", Capcity: "16000" },
        { SNo: "6", ParkingName: "aman parking", Location: "meerut", Capcity: "17000" }

    ])
    const [activeInactive, setActiveInactive] = useState(true)
    // const [currentPage, setCurrentPage] = useState(1);
    // const dataTable = useMemo(() => {
    //   const firstPageIndex = (currentPage - 1) * PageSize;
    //   const lastPageIndex = firstPageIndex + PageSize;
    //   return data.slice(firstPageIndex, lastPageIndex);

    // }, [currentPage]);
    const filterName = (e) => {
        const search = e.target.value.toLowerCase();
        const filteredNames = data.filter((names) =>
            names.ParkingName.toLowerCase().includes(search) || names.Location.toLowerCase().includes(search) || names.Capcity.toLowerCase().includes(search)
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
                                    <StarBorderIcon style={{ color: 'red' }} />
                                    <div className="heading-top" >
                                        <h2>Manage Parking</h2>
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
                                    <button class="head-button"><Link to={`/app/add-admin`} > Add Location</Link></button>
                                </div>
                            </div>
                            <div className="manage-admins-main-area">
                                <div className="manage-admins-table-area">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>S.No.</th>
                                                <th>Parking Name</th>
                                                <th>Location</th>
                                                <th>Capcity </th>
                                                <th>Details</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                                <th>Active/Inactive</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                                data.map((item) =>
                                                (
                                                    <tr>
                                                        <td>{item.SNo}</td>
                                                        <td>{item.ParkingName}</td>
                                                        <td>{item.Location}</td>
                                                        <td>{item.Capcity}</td>
                                                        <td><Link to={`/app/customersdetails`} > <VisibilityIcon /></Link></td>
                                                        <td>full/remain</td>
                                                        <td>
                                                            <Link to={`/app/edit-admin/}`} className="mange-admins-edit-btn"><i className="fas fa-edit"></i></Link>
                                                            <Link to={`/app/admin/`} className="mange-admins-dlt-btn"><DeleteForever onClick={() => deleteData(item)} style={{ color: '#FF5C93' }} /></Link>
                                                        </td>
                                                        <td>
                                                            <BootstrapSwitchButton
                                                                width={100}
                                                                // checked={app.status}
                                                                onlabel='Active'
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
    );
};

export default ManageAdmin;