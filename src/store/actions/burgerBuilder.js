import * as actionTypes from './actionTypes'
import axios from '../../Axios-orders'

export const addIngredient = (name) => {
	return {
		type: actionTypes.ADD_INGREDIENT,
		ingredientName: name,
	}
}

export const removeIngredient = (name) => {
	return {
		type: actionTypes.REMOVE_INGREDIENT,
		ingredientName: name,
	}
}

export const setIngredients = (ingredient) => {
	return {
		type: actionTypes.SET_INGREDIENT,
		ingredient: ingredient,
	}
}
export const fecthIngredient = () => {
	return {
		type: actionTypes.FETCH_INGREDIENT_FALIED,
	}
}
export const initIngredients = () => {
	return (dispatch) => {
		axios
			.get('https://react-my-burger-cb402-default-rtdb.firebaseio.com/ingredient.json')
			.then((response) => {
				dispatch(setIngredients(response.data))
			})
			.catch(() => {
				dispatch(fecthIngredient())
			})
	}	
}
