import { useState, useEffect }from 'react'

import axios from 'axios';
import Container from 'react-bootstrap/Container';

const UselessFact = () => {

	const [uselessFact, setUselessFact] = useState({})

	useEffect(() => {
		axios
			.get('useless-facts/random/')
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

export default UselessFact