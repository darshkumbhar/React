import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../Axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import { connect } from 'react-redux'
import withErrorHandler from '../../../HOC/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index'

class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your name',
				},
				value: '',
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'street',
				},
				value: '',
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			zipcode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Zip Code',
				},
				value: '',
				validation: {
					required: true,
					minLength: 5,
					maxLength: 5,
				},
				valid: false,
				touched: false,
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Country',
				},
				value: '',
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Your Email',
				},
				value: '',
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'cheapest', displayValue: 'cheapest' },
					],
				},
				value: 'fastest',
				validation: {},
				valid: true,
			},
		},
		formIsValid: false,
	}

	checkValidity(value, rules) {
		let isValid = true

		if (!rules) {
			return true
		}
		if (rules.required) {
			isValid = value.trim() !== '' && isValid
		}

		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid
		}

		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid
		}

		return isValid
	}

	orderHandle = (e) => {
		e.preventDefault()
		// this.setState({ loading: true })
		const formData = {}
		for (let i in this.state.orderForm) {
			formData[i] = this.state.orderForm[i].value
		}

		const order = {
			ingredients: this.props.ings,
			price: this.props.price,
			orderData: formData,
			userId: this.props.userId,
		}
		this.props.onOrderBurger(order, this.props.token)
	}

	inputChangeHandler = (e, inputIdentifier) => {
		const updatedOrderForm = {
			...this.state.orderForm,
		}
		const updatedElelment = { ...updatedOrderForm[inputIdentifier] }
		updatedElelment.value = e.target.value
		updatedElelment.valid = this.checkValidity(updatedElelment.value, updatedElelment.validation)
		updatedElelment.touched = true
		updatedOrderForm[inputIdentifier] = updatedElelment

		let formIsValid = true
		for (let inputIdentifier in updatedOrderForm) {
			formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
		}
		this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid })
	}

	render() {
		const formElementsArray = []
		for (const key in this.state.orderForm) {
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key],
			})
		}

		let form = (
			<form onSubmit={this.orderHandle}>
				{formElementsArray.map((formElement) => (
					<Input
						key={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
						invalid={!formElement.config.valid}
						shouldValidate={formElement.config.validation}
						touched={formElement.config.touched}
						changed={(e) => this.inputChangeHandler(e, formElement.id)}
					/>
				))}
				<Button btnType='Success' disabled={!this.state.formIsValid}>
					Order
				</Button>
			</form>
		)
		if (this.props.loading) {
			form = <Spinner />
		}
		return (
			<div className={classes.ContactData}>
				<h4>Enter Your Contact Details</h4>
				{form}
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		ings: state.burgerBuilder.ingredient,
		price: state.burgerBuilder.totalPrice,
		loading: state.order.loading,
		token: state.auth.token,
		userId: state.auth.userId,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios))
