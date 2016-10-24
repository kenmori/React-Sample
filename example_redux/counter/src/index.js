import React from 'react'
import { render } from 'react-dom'
import { createStore, Provider } from 'redux'
import appReducer from './reducers/index'
import App from './components/App'


const store = createStore(appReducer)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

