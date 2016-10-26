import React, { Component } from 'react'

class Counter extends Component {
	render(){
		const {increment, decrement} = this.props
		const {value} = this.props.counter
		return(
			<div>
				<div>{value}</div>
				<button onClick={()=>{increment({type:'INCREMENT', value : value + 1})}}>increment +</button>
				<button onClick={()=>{decrement({type:'DECREMENT', value : value -1})}}>decrement -</button>
			</div>
		)
	}
}


export default Counter
