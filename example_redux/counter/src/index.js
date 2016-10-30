import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './reducers/index'
import App from './components/App'


const store = createStore(appReducer)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

