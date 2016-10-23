import {INCREMENT} from '../actionTypes/index'

export function incrementActionCreator(action){
    return {
        type: INCREMENT,
        value: action.value
    }
}
