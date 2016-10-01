import "babel-polyfill"


import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { helloSaga } from './sagas'


import Counter from './Counter'
import reducer from './reducers'


const store = createStore(
    reducer
)

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      //2
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
