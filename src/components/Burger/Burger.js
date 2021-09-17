import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
const Burger = (props) => {
	let transformIngredients = Object.keys(props.ingredient)
		.map((igkey) => {
			return [...Array(props.ingredient[igkey])].map((_, i) => {
				return <BurgerIngredients key={igkey + 1} type={igkey} />
			})
		})
		.reduce((arr, el) => {
			return arr.concat(el)
		}, [])

	if (transformIngredients.length === 0) {
		transformIngredients = <p>Please Select Ingredients!!</p>
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredients type='bread-top' />
			{transformIngredients}
			<BurgerIngredients type='bread-bottom' />
		</div>
	)
}
export default Burger
