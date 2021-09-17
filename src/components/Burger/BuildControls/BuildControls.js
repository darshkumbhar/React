import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'
const Controls = [
	{ label: 'salad', type: 'salad' },
	{ label: 'bacon', type: 'bacon' },
	{ label: 'cheese', type: 'cheese' },
	{ label: 'meat', type: 'meat' },
]
const BuildControls = (props) => {
	return (
		<div className={classes.BuildControls}>
			<p>
				CurrentPrice:<strong>{props.price.toFixed(2)}</strong>
			</p>
			{Controls.map((ctrl) => (
				<BuildControl
					key={ctrl.label}
					label={ctrl.label}
					type={ctrl.type}
					added={() => props.ingredientAdded(ctrl.type)}
					remove={() => props.ingredientRemove(ctrl.type)}
					disabled={props.disabled[ctrl.type]}
				/>
			))}
			<button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.orderd}>
				{props.isAuth ? 'Order Now' : 'sign Up to Order'}
			</button>
		</div>
	)
}
export default BuildControls
