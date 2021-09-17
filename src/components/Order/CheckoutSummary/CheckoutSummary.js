import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.module.css'

const CheckoutSummary = (props) => {
	return (
		<div className={classes.CheckoutSummary}>
			<h1>we hope it tastes well</h1>
			<div style={{ width: '100%', margin: 'auto' }}>
				<Burger ingredient={props.ingredient} />
			</div>
			<Button btnType='Danger' clicked={props.CheckoutCancel}>
				Cancel
			</Button>
			<Button btnType='Success' clicked={props.CheckoutContinue}>
				Continue
			</Button>
		</div>
	)
}

export default CheckoutSummary
