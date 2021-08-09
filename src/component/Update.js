import React, { useState } from 'react'
import {
	TextField,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core'
import axios from 'axios'
import data_url from '../servises/config'

const Update = ({ props, data }) => {
	const [open, setOpen] = React.useState(false)
	const [album, setAlbum] = useState({})

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	const updateAlbum = (e) => {
		updateData(album)
		// e.preventDefault()
		if (album.id) {
			handleClose()
		}
	}

	const updateData = (data) => {
		axios.put(`${data_url}/albums/${data.id}`, data).then(
			(response) => {
				setAlbum(response.data)
			},
			(error) => {
				console.log(error)
				console.log('fail')
			}
		)
	}

	return (
		<div>
			<Button variant='outlined' color='primary' onClick={handleClickOpen}>
				update
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>Update</DialogTitle>
				<DialogContent>
					<DialogContentText>Update Data</DialogContentText>
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
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={updateAlbum} color='primary'>
						Update
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
export default Update
