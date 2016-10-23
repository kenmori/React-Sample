import {DECREMENT} from '../actionTypes/index'

export function counterDecrement(value){
    console.log(DECREMENT, value);
    return {
        type: value.type,
        value: value.value
    }
}
