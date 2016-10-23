import React, {Component} from 'react'
import ConnectedAppContainer from '../container/AppContainer'
import InputContainer from '../container/InputContainer'
import ConnectedCounter from '../container/CounterContainer'


class App extends Component {
    render(){
    return (
        <div>
            <ConnectedAppContainer />
            <InputContainer />
            <ConnectedCounter />
        </div>
        )
    }
}

export default App