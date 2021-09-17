import React, { Component } from 'react'
import Aux from '../Auxilliary/Auxilliary'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import { connect } from 'react-redux'
class Layout extends Component {
	state = {
		showSideDrawer: true,
	}

	sideDrawerClosedHandler = () => {
		this.setState({
			showSideDrawer: false,
		})
	}
	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer }
		})
	}
	render() {
		return (
			<Aux>
				<Toolbar
					isAuth={this.props.isAuthinticated}
					drawerToggleClicked={this.sideDrawerToggleHandler}
				/>
				<SideDrawer
					isAuth={this.props.isAuthinticated}
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler}
				/>
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthinticated: state.auth.token !== null,
	}
}

export default connect(mapStateToProps)(Layout)
