import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import OpenSubmitForm from './OpenSubmitForm';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">Useless</Navbar.Brand>
                <OpenSubmitForm/>
            </Container>
        </Navbar>

        
    );
}

export default Navigation;
