import React, { Component } from 'react'
import FormDisplay from '../components/FormDisplay'
import FormInput from '../components/FormInput'

export default class FormApp extends Component {
	render(){
		return (
			<div>
				<FormInput handleClick={this.props.onClick} />
				<FormDisplay data={this.props.value} />
			</div>
		)
	}
}
