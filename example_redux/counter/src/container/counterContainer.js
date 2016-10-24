import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment, decrement} from '../actionCreaters'
import Counter from '../components/Counter'


const mapStateToProps = (state, ownProps) => {
    return {
        value: state.value
    }
}
const mapDispatchToProps = dispatch => {
    return {
        decrement : (value) =>{ dispatch(decrement(value)) },
        increment : (value) => { dispatch(increment(value)) }
    }
}

const connectedCounter = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter)

export default connectedCounter