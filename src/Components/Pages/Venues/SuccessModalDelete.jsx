import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteVenueModal = ({ isOpen, onClose, onConfirm }) => {
    return (
        <>
            {isOpen && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title modal-heading">Delete the venue</h5>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this venue?</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn rounded-pill cancel-btn"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="button"
                                    className="btn rounded-pill confirm-btn"
                                    onClick={() => {
                                        console.log("Confirm button clicked");
                                        onConfirm();
                                    }}
                                >
                                    Yes
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

export default DeleteVenueModal;
