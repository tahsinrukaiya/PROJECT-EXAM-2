import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SuccessModalDelete = ({ isOpen, onClose, onConfirm, isError }) => {
    const modalMessage = isError ? 'Failed to delete venue' : 'Venue deleted successfully';

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
                                <p>{modalMessage}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn rounded-pill cancel-btn" onClick={onClose}>
                                    Close
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

export default SuccessModalDelete;
