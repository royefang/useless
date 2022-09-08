import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

import SubmitForm from './SubmitForm';
import axios from 'axios';


const SubmitButton = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = () => {
        

    }


    return(
        <>
            <Button variant="primary" onClick={handleShow}>Submit something useless</Button>{' '}
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Submit something useless</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <SubmitForm/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default SubmitButton
