import React from 'react'

import { Card, Typography, CardContent } from '@material-ui/core'
import '../styles/styles.css'

function Header({ name, title }) {
	return (
		<Card class='Header'>
			<CardContent>
				<Typography variant='h4'>{name}</Typography>
				<Typography component='p'>{title}</Typography>
			</CardContent>
		</Card>
	)
}
export default Header
