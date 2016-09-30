import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducer } from 'redux'
import  send  from './actions'
import formReducer from './reducers/FormReducer'
import FormApp from './containers/FormApp'

const initalState = {
	value: null,
}
const store = createStore(formReducer, initalState);


//reduxに渡したstoreをpropsとしてReactで使えるようにするためconnectに渡す



//containearが管理するstateを記述
function mapStateToProps (state) {
	return {
		value: state.value,
	}
}

//propsとしてcontainerに渡すメソッド
//containearが管理するメソッドを記述
function mapDispatchToProps () {
	return {
		onClick(value) {
			store.dispatch(send(value));
		}
	}
}
const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FormApp)

render (
	<Provider store={store}>
		<AppContainer />
		</Provider>,
	document.getElementById('root')
)
