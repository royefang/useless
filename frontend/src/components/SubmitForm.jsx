import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SubmitForm() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Useless Fact</Form.Label>
            <Form.Control placeholder="Enter useless fact" />
            <Form.Text className="text-muted">
                I hate you
            </Form.Text>
        </Form.Group>
        <Button variant="primary">
			Submit
		</Button>
    </Form>
  );
}

export default SubmitForm;
