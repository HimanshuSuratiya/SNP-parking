import React, { useState } from "react";
import DeleteForever from '@material-ui/icons/DeleteForever';
import Pagination from '@mui/material/Pagination'

const ManageCar = () => {
    const [data, setData] = useState([
        { SNo: "1", carNumber: "29564752", startTime: "10:25 AM", endTime: "07:40 PM", startdate: "10/01/2023", endData: "10/01/2023", VisitDate: "10/01/2023" },
        { SNo: "2", carNumber: "29564746", startTime: "10:25 AM", endTime: "07:40 PM", startdate: "10/01/2023", endData: "10/01/2023", VisitDate: "10/01/2023" },
        { SNo: "3", carNumber: "29744894", startTime: "10:25 AMi", endTime: "07:40 PM", startdate: "10/01/2023", endData: "10/01/2023", VisitDate: "10/01/2023" },
        { SNo: "4", carNumber: "49595995", startTime: "10:25 AM", endTime: "07:40 PM", startdate: "10/01/2023", endData: "10/01/2023", VisitDate: "10/01/2023" },
        { SNo: "5", carNumber: "78479939", startTime: "10:25 AM", endTime: "07:40 PM", startdate: "10/01/2023", endData: "10/01/2023", VisitDate: "10/01/2023" },
        { SNo: "6", carNumber: "85885894", startTime: "10:25 AMt", endTime: "07:40 PM", startdate: "10/01/2023", endData: "10/01/2023", VisitDate: "10/01/2023" }

    ])
    const filterName = (e) => {
        const search = e.target.value.toLowerCase();
        const filteredNames = data.filter((names) =>
            names.carNumber.toLowerCase().includes(search) || names.startTime.toLowerCase().includes(search) || names.endTime.toLowerCase().includes(search) || names.startdate.toLowerCase().includes(search) || names.endData.toLowerCase().includes(search) || names.VisitDate.toLowerCase().includes(search)
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
                                <div className="col-md-8">
                                    <div className="heading-top" >
                                        <h2>Manage Car</h2>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex justify-content-end align-items-center">
                                    <div className="table-data-search-box-manage">
                                        <div className="search-bar" >
                                            <input type="text" className="searchTerm-input" placeholder="Search" onChange={filterName} />
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
                                            {
                                                data.map((item) => (


                                                    <tr >
                                                        <td>{item.SNo}</td>
                                                        <td>{item.carNumber}</td>
                                                        <td>{item.startTime}</td>
                                                        <td>{item.endTime}</td>
                                                        <td>{item.startdate}</td>
                                                        <td>{item.endData}</td>
                                                        <td>{item.VisitDate}</td>
                                                        <td>
                                                            <div>
                                                                <i className="fas fa-edit" style={{ fontSize: '18px' }}></i>
                                                                <DeleteForever onClick={() => deleteData(item)} style={{ color: '#0e2259' }} />
                                                            </div>
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
    )
}

export default ManageCar;