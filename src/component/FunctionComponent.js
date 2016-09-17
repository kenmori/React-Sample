import React from 'react';


export default class FunctionComponent extends React.Component {
	render(){
		return (
			<div>fafa</div>
		)
	}
}


const SEND = 'SEND';
export default {
	send(value){
		return {
			type: SEND,
			value
		};
	}
};


