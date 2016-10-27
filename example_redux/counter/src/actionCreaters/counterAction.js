import { DECREMENT, INCREMENT } from '../actionTypes/index'

export function decrementActionCreator(action){
    return {
        type: DECREMENT,
        value: action.value
    }
}


export function incrementActionCreator(action){
    return {
        type: INCREMENT,
        value: action.value
    }
}