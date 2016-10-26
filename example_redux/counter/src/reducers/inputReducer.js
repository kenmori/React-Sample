const initialState = {
    text : ''
}

const input = (state = initialState, action) => {
    switch (action.type) {
        case 'ONCHANGE':
            return Object.assign({}, state, action.text)
            
        default:
            return state
    }
}

export default input