import { useState } from 'react';
import Button from 'react-bootstrap/button'
import Modal from 'react-bootstrap/Modal';


const SubmitButton = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button variant="primary" onClick={handleShow}>Submit something useless</Button>{' '}
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Submit something useless</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Help me
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default SubmitButton
