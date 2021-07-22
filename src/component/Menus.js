import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link, Router } from 'react-router-dom'
const Menus = () => {
	return (
		<ListGroup>
			{/* <Link className='list-group-item list-group-item-action' to='/' action>
				HomeView
			</Link> */}
			<Link className='list-group-item list-group-item-action' to='/' action>
				Home
			</Link>
			<Link className='list-group-item list-group-item-action' to='/about' action>
				About
			</Link>
			<Link className='list-group-item list-group-item-action' to='/data' action>
				Data
			</Link>
		</ListGroup>
	)
}
export default Menus
