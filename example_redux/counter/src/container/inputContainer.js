import { connect } from 'react-redux'
import InputText from '../components/InputText'
import { onChange } from '../actionCreaters/changeText'
import { bindActionCreators } from 'redux'


function mapStateToProps(state, ownProps){
    return state
}
function mapDispatchToProps(dispatch){
    return {
            onChange: bindActionCreators(onChange, dispatch)
        }
    }

const ConnectedInput = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputText)

export default ConnectedInput