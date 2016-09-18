export default (state = '', action) => {
	switch (action.type) {
		case 'ADDTEXT'
			return 	state + 'ふぁふぁ'
		default:
			return state
	}

}
