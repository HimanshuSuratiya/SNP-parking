import React from 'react';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Pagination from '@mui/material/Pagination';

const ListYourSpace = () => {
    return (
        <>
            <div className="page-wrapper" style={{ minHeight: "250px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="heading-top" >
                                        <h2>List Your Space</h2>
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
                                                <th>Location</th>
                                                <th>{`Area (WL)`}</th>
                                                <th>Availabe Time</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr >
                                                <td>1</td>
                                                <td>Noida Sector 59</td>
                                                <td>253</td>
                                                <td>10-AM to 06-PM</td>
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

export default ListYourSpace;