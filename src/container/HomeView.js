import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Header from '../component/Header'

import Menus from '../component/Menus'

function HomeView(props) {
	return (
		<div className='HomeView'>
			<Container>
				<Header name='React-Router-dom' />
				<Row>
					<Col md={4}>
						<Menus />
					</Col>
					<Col md={8} style={{ backgroundColor: '#F5F5F5' }}>
						{props.children}
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default HomeView
