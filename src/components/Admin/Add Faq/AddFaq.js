import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import Accordion from 'react-bootstrap/Accordion';
import DeleteForever from '@material-ui/icons/DeleteForever';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from 'react';

function ConfirmationDialogRaw(props) {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);
    const [confirmBox, setConfirmBox] = React.useState(false);


    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleConfirmBoxClickOpen = () => {
        setConfirmBox(true);
    };

    const handleConfirmBoxClose = () => {
        setConfirmBox(false);
    };

    return (
        <>
            <Dialog
                sx={{ '& .MuiDialog-paper': { width: '100%', maxHeight: 435 } }}
                maxWidth="xs"
                TransitionProps={{ onEntering: handleEntering }}
                open={open}
                {...other}
            >
                <DialogTitle>List of FAQs</DialogTitle>
                <DialogContent dividers>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="Add-faq-main-header">
                                <div className='px-1 w-100 d-flex align-items-center justify-content-between'>
                                    <p>Wrapped Bitcoin is now listed on Unity Exchange</p>
                                    <DeleteForever style={{ color: '#0e2259' }} onClick={handleConfirmBoxClickOpen} />
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="Add-faq-main-header">
                                <div className='px-1 w-100 d-flex align-items-center justify-content-between'>
                                    <p>Wrapped Bitcoin is now listed on Unity Exchange</p>
                                    <DeleteForever style={{ color: '#0e2259' }} onClick={handleConfirmBoxClickOpen} />
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className="Add-faq-main-header">
                                <div className='px-1 w-100 d-flex align-items-center justify-content-between'>
                                    <p>Wrapped Bitcoin is now listed on Unity Exchange</p>
                                    <DeleteForever style={{ color: '#0e2259' }} onClick={handleConfirmBoxClickOpen} />
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header className="Add-faq-main-header">
                                <div className='px-1 w-100 d-flex align-items-center justify-content-between'>
                                    <p>Wrapped Bitcoin is now listed on Unity Exchange</p>
                                    <DeleteForever style={{ color: '#0e2259' }} onClick={handleConfirmBoxClickOpen} />
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </DialogContent>
                <DialogActions className='main-action-faq'>
                    <div>
                        <button className='faq-style-btn me-3' onClick={handleCancel}>
                            Cancel
                        </button>
                        <button className='faq-style-btn me-3' onClick={handleOk}>Ok</button>
                    </div>
                </DialogActions>
            </Dialog>
            <div>
                <Dialog
                    open={confirmBox}
                    onClose={handleConfirmBoxClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Are you sur you want to delete"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sur you want to delete
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions className='main-action-faq'>
                        <div>
                            <button className='faq-style-btn me-3' onClick={handleConfirmBoxClose}>Cancel</button>
                            <button className='faq-style-btn me-3' onClick={handleConfirmBoxClose} >
                                Confirm
                            </button>
                        </div>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}

ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};

const AddFaq = () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Dione');
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");


    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
        }
    };


    function getData(e) {

        e.preventDefault();
        console.warn("question:", question); <br />
        console.warn("answer:" + answer)
        setQuestion("")
        setAnswer("")
    }
    return (
        <>
            <div className="page-wrapper" style={{ minHeight: "250px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="application-detail-heading-area d-flex justify-content-between">
                                <h2>Create FAQ</h2>
                                <button className="contact-form-submint-btn" onClick={handleClickListItem}>Delete</button>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="contact-notification-detail-main-area">
                                <form className="send-notifications-form-area" onSubmit={getData}>
                                    <div className="form-group">
                                        <label>Question</label>
                                        <input type="text" className="form-control field" name="holdername" autoComplete='off' onChange={(e) => setQuestion(e.target.value)} placeholder="Enter your question" autofocus="" required="" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Answer</label>
                                        <textarea className="form-control" autoComplete='off' placeholder="Enter your answer" onChange={(e) => setAnswer(e.target.value)} ></textarea>
                                    </div>
                                    <div className="contact-form-submint-btn-area">
                                        <button className="contact-form-submint-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer text-center"> 2022 © Admin Panel brought to you by <a
                    href="https://https://www.webnmobappssolutions.com">webnmobappssolutions.com</a>
                </footer>
                <Box>
                    <ConfirmationDialogRaw
                        id="ringtone-menu"
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        value={value}
                    />
                </Box>
            </div>
        </>
    )
}

export default AddFaq;