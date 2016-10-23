import React, { PropTypes, Component } from 'react'

class Counter extends Component {
	constructor(props){
		super(props)
	}
	render(){
		const {increment, decrement} = this.props
		const {value} = this.props.counter
		return(
			<p>
				<div>{value}</div>
				<button onClick={()=>{increment({type:'INCREMENT', value : value + 1})}}>increment +</button>
				<button onClick={()=>{decrement({type:'DECREMENT', value : value -1})}}>decrement -</button>
			</p>
		)
	}
}


export default Counter
