import React from 'react'
import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col'
// import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {

	const [uselessFact, setUselessFact] = useState('')

	useEffect(() => {
		axios
			.get('/useless-facts/2/')
			.then((res) => setUselessFact(res.data))
			.catch((e) => console.log(e))
	}, [])

    return(
        <Container fluid>
            <div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '90vh',
				}}
    		>
      			<h2>{uselessFact.fact}</h2>
    		</div>
        </Container>
    )
}

export default HomePage