import React, { Component } from 'react'


class InputText extends Component {
    render() {
        return(

    <div>
        <input type='text' defaultValue='' onChange={this.props.onChange} />
        <div>{this.props.text}</div>
    </div>
        )
    }
}

export default InputText