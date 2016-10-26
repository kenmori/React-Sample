import React, { Component } from 'react'
import { connect } from 'react-redux'


class AppContainer extends Component {
    render (){
        return(
            <div>Counter-with-React-Reux</div>
        )
    }
}

let ConnectedAppContainer = connect()(AppContainer)
export default ConnectedAppContainer


