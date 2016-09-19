import React, { PropTypes, Component  } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import InputComponent from './components/Input'
import inputaction from './actionCreaters/inputaction'
import inputReducer from './reducers/index'

const store = createStore(inputReducer);
const root = document.getElementById('root');


const render = ()=>{
	ReactDOM.render(
		<InputComponent update={()=>{store.dispatch(inputaction({text: 'fafa'}))}} />, root
	);
}
store.subscribe(render);
render();