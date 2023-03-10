import React, { useState } from 'react';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Pagination from '@mui/material/Pagination';

const ListYourSpace = () => {
    const [data, setData] = useState([
        { SNo: '1', location: "Noida59 kirtimaan ,1stflor", areaCode: '253', availabeTime: '10-AM to 06-PM' },
        { SNo: '2', location: "Delhi58 kirtimaan ,2stflor", areaCode: '263', availabeTime: '10-AM to 06-PM' },
        { SNo: '3', location: "varanasi57 kirtimaan ,3stflor", areaCode: '264', availabeTime: '10-AM to 06-PM' },
        { SNo: '4', location: "meerut56 kirtimaan ,4stflor", areaCode: '368', availabeTime: '10-AM to 06-PM' },
        { SNo: '5', location: "delhi55 kirtimaan ,5stflor", areaCode: '123', availabeTime: '10-AM to 06-PM' },
    ])


    const filterName = (e) => {
        const search = e.target.value.toLowerCase();
        const filteredNames = data.filter((names) =>
            names.location.toLowerCase().includes(search) || names.areaCode.toLowerCase().includes(search) || names.availabeTime.toLowerCase().includes(search)
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
                                        <h2>List Your Space</h2>
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
                                                <th>Location</th>
                                                <th>{`Area (WL)`}</th>
                                                <th>Availabe Time</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                                data.map((item) => (

                                                    <tr >
                                                        <td>{item.SNo}</td>
                                                        <td>{item.location}</td>
                                                        <td>{item.areaCode}</td>
                                                        <td>{item.availabeTime}</td>
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
            <footer className="footer text-center"> 2022 ?? Admin Panel brought to you by <a
                href="https://https://www.webnmobappssolutions.com">webnmobappssolutions.com</a>
            </footer>
        </>
    )
}

export default ListYourSpace;