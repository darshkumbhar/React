import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/Navigationaitem'
const NavigationItems = (props) => {
	return (
		<ul className={classes.NavigationItems}>
			<NavigationItem link='/' exact>
				Burger Builder
			</NavigationItem>
			{props.isAuthinticated ? <NavigationItem link='/orders'>Orders</NavigationItem> : null}
			{!props.isAuthinticated ? (
				<NavigationItem link='/auth'>Authinticate</NavigationItem>
			) : (
				<NavigationItem link='/logout'>Logout</NavigationItem>
			)}
		</ul>
	)
}
export default NavigationItems
