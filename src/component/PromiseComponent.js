import React from 'react';
import core from 'core-js';

export default class PromiseComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {value : this.props.value};
		this._click = this._click.bind(this);
	}
	_click(){
		const Promise = core.Promise;
		Promise.resolve(this.setState({value: this.state.value + 1})).then(function(){
			setTimeout(function(){
				console.log('finish!!');
			},1000);
		})
	}
	render(){

		return (
			<div>
			<h2 id="modal">react-Promise</h2>
			<div>{this.state.value}</div>
			<button className='btn btn-primary' onClick={this._click}>click</button>
			</div>
		);
	}
}
PromiseComponent.defaultProps = {
	value: 1
}
React.PropTypes = {
	value: React.PropTypes.number
}
