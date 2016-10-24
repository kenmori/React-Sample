const input = (state = '', action) => {
    switch (action.type) {
        case 'TEXT':
            return {
                text: action.text
            }
        default:
            return state
    }
}

export default input