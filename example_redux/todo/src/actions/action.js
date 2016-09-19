export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED : 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodo = (text) => {
	return {
		type: ADD_TODO,
		text
	}
}


export function toggleTodo(index) {
	return {
		type: TOGGLE_TODO,
		index
	}
}

// export const complateTodo = (index) => {
// 	return {
// 		type: COMP_TODO,
// 		index
// 	}	
// }
//
export const setVisibilityFilter = (filter) => {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}

//
// const boundAddTodo = (text) => dispatch(addTodo(text))
// const boundCompleteTodo = (text) => dispatch(complateTodo(index))



