import * as Actions from '../actionTypes/index'


export const decrement = (value)=> {
    return {
        type: Actions.DECREMENT,
        value: value
    }
}
export const increment = (value)=> {
    return {
        type: Actions.INCREMENT,
        value: value++
    }
}

export const onChange = (text) => {
    return {
        type: Actions.ONCHANGE,
        text
    }
}