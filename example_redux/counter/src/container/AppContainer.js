import React, { Component } from 'react'
import { connect } from 'react-redux'


class AppContainer extends Component {
    render (){
        return(
            <div>
            <h1>React-Reux-Sample</h1>
            </div>
        )
    }
}

let ConnectedAppContainer = connect()(AppContainer)
export default ConnectedAppContainer


