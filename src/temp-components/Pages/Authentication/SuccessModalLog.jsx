import { Modal, Button } from "react-bootstrap";

export default function SuccessModalLog({ show, onClose, message }) {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login Successful</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
        </Modal>
    );
}
