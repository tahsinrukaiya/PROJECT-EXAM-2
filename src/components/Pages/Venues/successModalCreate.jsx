import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SuccessModalCreate({ show, onClose, message }) {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate("/profile");
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Venue Creation Successful</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button className="close-btn rounded-pill" variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
