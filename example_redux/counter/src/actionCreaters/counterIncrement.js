import {INCREMENT} from '../actionTypes/index'

export function incrementActionCreator(action){
    return {
        type: action.type,
        value: action.value
    }
}
