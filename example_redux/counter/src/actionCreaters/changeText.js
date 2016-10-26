import { ONCHANGE } from '../actionTypes/index'


export const onChange = (text) => {
    const value = text;
    return {
        type: ONCHANGE,
        text : value
    }
}