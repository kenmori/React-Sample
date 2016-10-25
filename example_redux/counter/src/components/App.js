import React, {Component} from 'react'
import ConnectedAppContainer from '../container/AppContainer'
import InputContainer from '../container/InputContainer'
import CounterContainer from '../container/CounterContainer'


class App extends Component {
    render(){

    return (
        <div>
            <ConnectedAppContainer />
            <InputContainer />
            <CounterContainer />
        </div>
        )
    }
}

export default App