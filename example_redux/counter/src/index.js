import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './reducers/index'
import App from './components/App'
import ConnectedInput from './container/InputContainer'
import ConnectedCounter from './container/CounterContainer'
import Index from './components/Index'
const store = createStore(
	appReducer
)

const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Index} />
				<Route path="input" component={ConnectedInput} />
				<Route path="counter" component={ConnectedCounter} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)

