const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                value: state +1
            }
        case 'DECREMENT':
            return {
                value: state -1
            }
        default:
            return state
    }
}

export default counter



