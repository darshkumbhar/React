import React, { useState } from 'react'
import { TextField, Container, Button, Typography } from '@material-ui/core'
import '../styles/styles.css'
import axios from 'axios'
import data_url from '../servises/config'
const AddUser = () => {
	const [album, setAlbum] = useState({})

	const submitForm = (e) => {
		console.log(album)
		postData(album)
		setAlbum('')
		// e.preventDefault()
	}

	const postData = (data) => {
		axios.post(`${data_url}/albums`, data).then(
			(response) => {
				console.log('success')
			},
			(error) => {
				console.log(error)
				console.log('fail')
			}
		)
	}

	return (
		<Container>
			<Typography class='Typography' variant='h4'>
				Add New Album
			</Typography>
			<form class='Form' onSubmit={submitForm} style={{}}>
				<TextField
					required
					id='id'
					name='id'
					label=' ID'
					type='number'
					placeholder='Enter Id Here'
					onChange={(e) => {
						setAlbum({ ...album, id: e.target.value })
					}}
				/>

				<TextField
					required
					id='title'
					name='title'
					label='Album Title'
					type='text'
					placeholder='Enter Title Here'
					onChange={(e) => {
						setAlbum({ ...album, title: e.target.value })
					}}
				/>
				<TextField
					required
					id='author'
					name='author'
					label='Author'
					type='text'
					placeholder='Enter Author Here'
					onChange={(e) => {
						setAlbum({ ...album, author: e.target.value })
					}}
				/>
				<Button color='primary' type='submit' variant='outlined'>
					Add Album
				</Button>
				<Button type='reset' color='secondary' variant='outlined'>
					Clear
				</Button>
			</form>
		</Container>
	)
}
export default AddUser
