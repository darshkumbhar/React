import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody } from 'reactstrap'

function Header({ name, title }) {
	return (
		<div>
			<Card className='my-2 bg-warning' style={{ height: '80px' }}>
				<CardBody>
					<h1 className='text-center '>{name}</h1>
					<p>{title}</p>
				</CardBody>
			</Card>
		</div>
	)
}
export default Header
