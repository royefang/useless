import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import SubmitForm from './SubmitForm';

const Nav = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">Useless</Navbar.Brand>
                <SubmitForm/>
            </Container>
        </Navbar>
    );
}

export default Nav;
