import React, { Component } from 'react'
import Aux from '../../HOC/Auxilliary/Auxilliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../Axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler'
import { connect } from 'react-redux'
import * as Actions from '../../store/actions/index'
import { Redirect } from 'react-router-dom'

class BurgerBuilder extends Component {
	state = {
		// ingredient: null,
		// totalPrice: 4,
		purchase: false,
		modal: false,
		loading: false,
		error: false,
	}

	componentDidMount() {
		this.props.onInitIngredient()
	}

	updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map((igkey) => {
				return ingredients[igkey]
			})
			.reduce((sum, el) => {
				return sum + el
			}, 0)
		// this.setState({ purchase: sum > 0 })
		return sum > 0
	}

	handle_ModalOpen = () => {
		if (this.props.isAuthinticated) {
			this.setState({ modal: true })
		} else {
			this.props.onSetAuthRedirectPath('/checkout')
			this.props.history.push('./auth')
		}
	}
	handle_Modalclose = () => {
		this.setState({ modal: false })
	}

	purchaseContinueHandler = () => {
		// alert('!!! you Continue')
		this.props.onInitPurchase()

		this.props.history.push('/checkout')
	}

	render() {
		const disabledInfo = {
			...this.props.ings,
		}
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}

		let orderSummary = null

		let burger = this.props.error ? <p>Ingredients not loading</p> : <Spinner />

		if (this.props.ings) {
			burger = (
				<Aux>
					<Burger ingredient={this.props.ings} />
					<BuildControls
						ingredientAdded={this.props.onIngredientAdded}
						ingredientRemove={this.props.onIngredientRemoved}
						disabled={disabledInfo}
						purchasable={this.updatePurchaseState(this.props.ings)}
						price={this.props.price}
						isAuth={this.props.isAuthinticated}
						orderd={this.handle_ModalOpen}
					/>
				</Aux>
			)
			orderSummary = (
				<OrderSummary
					ingredients={this.props.ings}
					purchaseCancel={this.handle_Modalclose}
					price={this.props.price}
					puchaseContinue={this.purchaseContinueHandler}
				/>
			)
		}
		if (this.state.loading) {
			orderSummary = <Spinner />
		}
		return (
			<Aux>
				<Modal show={this.state.modal} modalClose={this.handle_Modalclose}>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		ings: state.burgerBuilder.ingredient,
		price: state.burgerBuilder.totalPrice,
		error: state.burgerBuilder.error,
		isAuthinticated: state.auth.token !== null,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onIngredientAdded: (igname) => dispatch(Actions.addIngredient(igname)),
		onIngredientRemoved: (igname) => dispatch(Actions.removeIngredient(igname)),
		onInitIngredient: () => dispatch(Actions.initIngredients()),
		onInitPurchase: () => dispatch(Actions.purchaseInit()),
		onSetAuthRedirectPath: (path) => dispatch(Actions.setAuthRedirectPath(path)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))
