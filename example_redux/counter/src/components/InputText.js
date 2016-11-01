import React, { Component } from 'react'


class InputText extends Component {
    render() {
        const {onChange } = this.props;
        const { text } = this.props.input
        return(
            <div>
                <input type='text' defaultValue='' placeholder="wirte something" onChange={(event)=>{onChange({type: 'ONCHANGE', text: event.target.value})}} />
                <div>{text}</div>
            </div>
        )
    }
}

export default InputText