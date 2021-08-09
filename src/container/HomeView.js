import React from 'react'

import { Container, Grid } from '@material-ui/core'
import Header from '../component/Header'
import Menus from '../component/Menus'

function HomeView(props) {
	return (
		<Container>
			<Header name='React-Router-dom' />
			<Grid container>
				<Grid xs={4}>
					<Menus />
				</Grid>
				<Grid style={{ backgroundColor: '#f5f5f5' }} xs={8}>
					{props.children}
				</Grid>
			</Grid>
		</Container>
	)
}

export default HomeView
