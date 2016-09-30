let nextTodoId = 0

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED : 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	}
}


export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
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
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

//
// const boundAddTodo = (text) => dispatch(addTodo(text))
// const boundCompleteTodo = (text) => dispatch(complateTodo(index))



