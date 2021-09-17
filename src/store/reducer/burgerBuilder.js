import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'
const initialState = {
	ingredient: null,
	totalPrice: 4,
	error: false,
	building: false,
}
const INGREDIENTS_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1,
	bacon: 0.7,
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_INGREDIENT:
			const updatedIngredients = {
				[action.ingredientName]: state.ingredient[action.ingredientName] + 1,
			}
			const updatedIngredient = updateObject(state.ingredient, updatedIngredients)
			const updatedState = {
				ingredient: updatedIngredient,
				totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName],
				building: true,
			}
			return updateObject(state, updatedState)
		case actionTypes.REMOVE_INGREDIENT:
			const updatedIng = {
				[action.ingredientName]: state.ingredient[action.ingredientName] - 1,
			}
			const updatedIngred = updateObject(state.ingredient, updatedIng)
			const updatedStat = {
				ingredient: updatedIngred,
				totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName],
				building: true,
			}
			return updateObject(state, updatedStat)
		case actionTypes.SET_INGREDIENT:
			return updateObject(state, {
				ingredient: {
					salad: action.ingredient.salad,
					bacon: action.ingredient.bacon,
					cheese: action.ingredient.cheese,
					meat: action.ingredient.meat,
				},
				totalPrice: 4,
				error: false,
				building: false,
			})
		case actionTypes.FETCH_INGREDIENT_FALIED:
			return updateObject(state, {
				error: true,
			})
		default:
			return state
	}
}
export default reducer
