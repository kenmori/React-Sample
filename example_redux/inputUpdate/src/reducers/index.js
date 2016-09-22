const inputReducer = (state = {}, action) => {
	switch(action.type){
		case 'updateText':
			return Object.assign({}, state, {
				text: action.text
			});
		default:
			return state
	}
}


export default inputReducer