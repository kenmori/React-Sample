import { combineReducers } from 'redux'
import  counter from './counterReducer'
import input from './inputReducer'


const appReducer = combineReducers({
    counter,
    input
})
export default appReducer



