import React from 'react'
import '../styles/styles.css'

import {
	Container,
	Grid,
	Card,
	Typography,
	CardContent,
	CircularProgress,
	Button,
} from '@material-ui/core'
import Update from '../component/Update'
import axios from 'axios'

import data_url from '../servises/config'

const User = ({ user, update }) => {
	const deleteAlbum = (id) => {
		axios.delete(`${data_url}/albums/${id}`).then(
			(response) => {
				console.log('success')
				update(id)
			},
			(error) => {
				console.log('fail')
			}
		)
	}

	return (
		<>
			<Typography class='Typography' variant='h4'>
				All Users
			</Typography>
			<Container class='Container'>
				{user.length > 0 ? (
					user.map((item, index) => (
						<Grid item xs={6}>
							<Card style={{ margin: 2, textAlign: 'center' }}>
								<CardContent>
									<Typography variant='h5' component='h2' key={index}>
										{item.id}
									</Typography>
									<Typography> {item.title}</Typography>
									<Typography> {item.author}</Typography>
								</CardContent>
								<CardContent class='Update'>
									<Update />
									<Button
										onClick={() => {
											deleteAlbum(item.id)
										}}
										variant='outlined'
										color='secondary'
									>
										Delete
									</Button>
								</CardContent>
							</Card>
						</Grid>
					))
				) : (
					<CircularProgress color='secondary' />
				)}
			</Container>
		</>
	)
}

export default User
