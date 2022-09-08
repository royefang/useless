import { useState } from 'react'

import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

const SubmitButton = () => {

    const [showModal, setShowModal] = useState(false)
    const [formValue, setFormValue] = useState({})  

    const onSubmit = async () => {
        axios
            .post('useless-facts/', {fact: formValue})
            .then((res) => {
                alert('Congratulations, you\'ve contributed nothing to society.'
                + "\n"
                + res.status)
            })
            .catch((err) => {

                alert('Something went wrong. I hate you.'
                + "\n"
                + err)
            })
        setShowModal(false)
        setFormValue({})
    }
    
    return(
        <>
            <Button 
                variant="primary" 
                onClick={() => {setShowModal(true)}}
            >
                Submit
            </Button>
        
            <Modal show={showModal} onHide={() => {setShowModal(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Submit something useless</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="uselessForm">
                            <Form.Label>Useless Fact</Form.Label>
                            <Form.Control 
                                placeholder="This website is useless" 
                                onChange={({target:{value}}) => setFormValue(value)}
                            />
                            <Form.Text className="text-muted">
                                I hate you
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={onSubmit}>
			            Submit
		            </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SubmitButton
