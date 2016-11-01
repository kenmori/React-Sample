import React, {Component} from 'react'
import ConnectedAppContainer from '../container/AppContainer'

class App extends Component {
    render(){
        const {location, children} = this.props
    return (
        <div>
            <ConnectedAppContainer />
            <div>pathname is { location.pathname }</div>
            { children }
        </div>
        )
    }
}

export default App