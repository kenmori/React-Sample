import {DECREMENT} from '../actionTypes/index'

export function decrementActionCreator(action){
    return {
        type: DECREMENT,
        value: action.value
    }
}


