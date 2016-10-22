import React, { Component } from 'react'
import { connect } from 'react-redux'


class AppContainer extends Component {
    render (){
        return(
            <div>
                fafa
            </div>
        )
    }
}

let ConnectedAppContainer = connect()(AppContainer)
export default ConnectedAppContainer


