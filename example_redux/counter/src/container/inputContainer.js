import React from 'react'
import { connect } from 'react-redux'
import InputText from '../components/InputText'
import { onChange} from '../actionCreaters'


const mapStateToProps = (state, ownProps) => {
    return {
        text: state.text
    }
}
const mapDispatchToProps = dispatch => {
    return {
            onChange: (text) => {dispatch(onChange(text))}
        }
    }

const connectedInput = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputText)

export default connectedInput