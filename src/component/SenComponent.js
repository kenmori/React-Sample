import React from 'react';
import ReactDOM from 'react-dom';
import {SenAction} from '../action/SenAction';
import {SenStore} from '../stores/SenStore';
import {SenConstants} from '../constants/SenConstants';

export  class SenComponent extends React.Component {
    static defaultProps = {
      senPosition: 'message',
      condition: 10,
      url: 'http://localhost'
    }
    constructor(props) {
        super(props);
        console.log("sennn!!", props);
        this._getState = this._getState.bind(this);
        this._changeState = this._changeState.bind(this);
    }

    componentWillMount() {

        SenStore.addChangeStateListener(SenConstants.DISPATCH_CHANGE_STATE, this._changeState);
        SenAction.init(this.props.condition);
        this._changeState();
    }

    componentDidMount() {
        SenAction.getSen(
            this.props.senPosition,
            this.props.condition
        );
    }

    componentWillUnmount(){
        SenStore.removeChangeStateListener(SenConstants.DISPATCH_CHANGE_STATE, this._changeState);
    }

    componentWillReceiveProps(nextProps) {
        SenAction.getSen(
            this.props.senPosition,
            this.props.condition
        );
    }

    componentWillUnmount() {
        SenStore.removeChangeStateListener(SenConstants.DISPATCH_CHANGE_STATE, this._changeState);
    }

    _changeState() {
        this.setState(this._getState());
    }

    _getState() {
      //getStateはBasicStoreのメンバ
        return SenStore.getState();
    }

    render(){
        let sateLoader = this.state[SenConstants.STATE_KEY_LOADER + '_' + this.props.condition];
        if (sateLoader.isLoading === true) {
            return (<section className={sateLoader.loaderCss}></section>);
        }
        let state = this.state[SenConstants.STATE_KEY_GET + '_' + this.props.condition];
        if (state.hasError) {
            let errorMsg = 'エラーが発生しました';
            return (<div>{errorMsg}</div>);
        }
        let lists = state.payload.map((Sen, index) => {
                return (
                    <span className='menteInfo pt10 pb0'>
                        <a href={Sen.url}>{Sen.message}</a>
                    </span>
                );
        });
        return (
            <span>
            {lists}
            </span>
        );
    }
}
