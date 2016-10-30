import React, {Component} from 'react'
import ConnectedAppContainer from '../container/AppContainer'
class App extends Component {
    render(){
    return (
        <div>
            <ConnectedAppContainer />
            {this.props.children}
        </div>
        )
    }
}

export default App