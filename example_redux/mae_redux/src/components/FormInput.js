import React, { Component } from  'react'

export default class FormInput extends Component {
	send(e) {
		e.preventDefault();
		this.props.handleClick(this.myInput.value.trim());
		this.myInput.value = ''

	}
	render(){
		return (
			<form>
					<input type='text' ref={(ref)=> ( this.myInput = ref )} defaultValue='' />
					<button onClick={(event) => this.send(event)}>click</button>
			</form>
		)
	}
}