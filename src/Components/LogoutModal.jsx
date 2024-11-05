import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
    return (
        <>
            {isOpen && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title modal-heading">Confirm Logout</h5>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to log out?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn rounded-pill cancel-btn" onClick={onClose}>
                                    Cancel
                                </button>
                                <button type="button" className="btn rounded-pill yes-btn" onClick={onConfirm}>
                                    Yes, Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isOpen && <div className="modal-backdrop fade show"></div>}
        </>
    );
};

export default LogoutModal;

