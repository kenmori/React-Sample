import { combineReducers } from 'redux'
import  counter from './counterReducer'
import input from './inputReducer'
import { routerReducer } from 'react-router-redux'

export const appReducer = combineReducers({
    counter: counter,
    input: input,
    routing : routerReducer
})
export default appReducer



