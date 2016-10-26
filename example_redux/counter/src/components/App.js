import React, {Component} from 'react'
import ConnectedAppContainer from '../container/AppContainer'
import ConnectedInput from '../container/InputContainer'
import ConnectedCounter from '../container/CounterContainer'


class App extends Component {
    render(){
    return (
        <div>
            <ConnectedAppContainer />
            <ConnectedInput />
            <ConnectedCounter />
        </div>
        )
    }
}

export default App