import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../UI/BackDrop/BackDrop'
import Aux from '../../../HOC/Auxilliary/Auxilliary'
import classes from './SideDrawer.module.css'
const SideDrawer = (props) => {
	let AttachedClasses = [classes.SideDrawer, classes.Close]
	if (props.open) {
		AttachedClasses = [classes.SideDrawer, classes.Open]
	}
	return (
		<Aux>
			<BackDrop show={props.open} clicked_BackDrop={props.closed} />
			<div className={AttachedClasses.join(' ')} onClick={props.closed}>
				<div className={classes.Logo}>
					<Logo />
				</div>

				<nav>
					<NavigationItems isAuthinticated={props.isAuth} />
				</nav>
			</div>
		</Aux>
	)
}
export default SideDrawer
