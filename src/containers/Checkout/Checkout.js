import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
class Checkout extends Component {
	checkoutCancelHandler = () => {
		this.props.history.goBack()
	}
	checkoutContinueHandler = () => {
		this.props.history.replace('/checkout/contact')
	}
	render() {
		let Summary = <Redirect to='/' />
		if (this.props.ings) {
			const purchasedRedirect = this.props.purchased ? <Redirect to='/' /> : null
			Summary = (
				<div>
					{purchasedRedirect}
					<CheckoutSummary
						CheckoutCancel={this.checkoutCancelHandler}
						CheckoutContinue={this.checkoutContinueHandler}
						ingredient={this.props.ings}
					/>
					<Route path={this.props.match.path + '/contact'} component={ContactData} />
				</div>
			)
		}
		return Summary
	}
}
const mapStateToProps = (state) => {
	return {
		ings: state.burgerBuilder.ingredient,
		purchased: state.order.purchased,
		// price: state.totalPrice,
	}
}

export default connect(mapStateToProps)(Checkout)
