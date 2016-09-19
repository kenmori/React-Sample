import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'




//まとめる
// function todoApp (state = {}, action) {
// 	return {
// 		visibilityFilter: visibilityFilter(state.visibilityFilter, action),
// 		todos: todos(state.todos, action)
// 	}
// }

//other
// const reducer = combineReducers({
// 	a: doSomethingWithA,
// 	b: processB,
// 	c: c
// })

//equivalent above
// function reducer(state = {}, action) {
// 	return {
// 		a: doSomethingWithA(state.a, action),
// 		b: processB(state.b, action),
// 		c: c(state.c, action)
// 	}
// }

//ES6 way
// import * as reducers from './reducers'
// const todoApp = combineReducers(reducers)


//Objectを返す
const todoApp = combineReducers({
	visibilityFilter,
	todos
})

export default todoApp
