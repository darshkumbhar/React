import React from 'react'

import { Link } from 'react-router-dom'
import { List, ListItem } from '@material-ui/core'
const Menus = () => {
	return (
		<List className='list-group' style={{ flexDirection: 'column', margin: 0, padding: 0 }}>
			<ListItem className='list-group-item '>
				<Link className='list-group-item list-group-item-action' to='/' action>
					Home
				</Link>
			</ListItem>

			<ListItem className='list-group-item '>
				<Link className='list-group-item list-group-item-action' to='/about' action>
					About
				</Link>
			</ListItem>
			<ListItem className='list-group-item  '>
				<Link className='list-group-item list-group-item-action' to='/data' action>
					Data
				</Link>
			</ListItem>
			<ListItem className='list-group-item  '>
				<Link className='list-group-item list-group-item-action' to='/add' action>
					Add Album
				</Link>
			</ListItem>
		</List>
	)
}
export default Menus
