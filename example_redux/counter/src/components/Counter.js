import React, { PropTypes, Component } from 'react'

class Counter extends Component {
	render(){
		return(

		<p>
			<div>{this.props.value}</div>
			<button onClick={this.props.increment}>increment +</button>
			<button onClick={this.props.decrement}>decrement -</button>
		</p>
		)
	}
}


export default Counter
