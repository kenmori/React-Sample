import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

const initalState = {
	value : null,
}

//Reducerと初期設定を渡す
let store = createStore(formReducer, initalState);

render (
	<Provider store={store}>
		<App />
		</Provider>,
	document.getElementById('root')
)
