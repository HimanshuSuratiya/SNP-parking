import React from "react";
import DeleteForever from '@material-ui/icons/DeleteForever';
import Pagination from '@mui/material/Pagination'

const ManageCar = () => {

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