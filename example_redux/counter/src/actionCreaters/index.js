import {ONCHANGE} from '../actionTypes/index'


export const onChange = (text) => {
    return {
        type: ONCHANGE,
        text : text
    }
}