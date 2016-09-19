import React, {PropTypes, Component} from 'react'

export default class InputComponent extends Component {
	render(){
		return (
			<div>
				<input ref='text' type='text' />
				<button onClick={this.props.update}>update</button>
				<div>{this.props.text}</div>
			</div>
		)
	}
}