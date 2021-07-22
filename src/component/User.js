import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Spinner } from 'reactstrap'

const User = ({ user }) => {
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '10px' }}>
			{user.length > 0 ? (
				user.map((item, index) => (
					<Card
						style={{
							textAlign: 'center',
							width: '210px',
							margin: '10px',
							backgroundColor: ''
						}}
					>
						<CardBody>
							<CardText key={index}> {item.id}</CardText>
							<CardTitle> {item.name}</CardTitle>
							<CardSubtitle> {item.username}</CardSubtitle>
						</CardBody>
					</Card>
				))
			) : (
				<Spinner color='dark'>.</Spinner>
			)}
		</div>
	)
}

export default User
