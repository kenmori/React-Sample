import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
let store = createStore(todoApp)

render (
	//ProviderはStoreがこれ以下のComponentでconnct()を使えるようにしている。Providerのラッピングなしにconnctを使えない
	<Provider store={store}>
		<App />//ルートComponent
	</Provider>,
	document.getElementById('root')
)

// import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions/action'

// Log the initial state
// console.log(store.getState())
// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
// 	console.log(store.getState())
// )
//
// // Dispatch some actions
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
//
// // Stop listening to state updates
// unsubscribe()


