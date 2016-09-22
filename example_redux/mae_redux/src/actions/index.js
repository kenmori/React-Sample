const SEND = 'SEND';

//Action Creaters
export default function send(value) {
	//Action
	return {
		type: SEND,
		value,
	}
}
