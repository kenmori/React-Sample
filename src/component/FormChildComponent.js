import React from 'react';
import update from 'react-addons-update';
export default class FormChildComponent extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    initialQty: React.PropTypes.number
  };
  static defaultProps = {
    title: 'Undefined Product',
    price: 100,
    initialQty: 1
  };
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      action : ''
    };
  }
  increment = ()=>{
    //直接の子供を変更してしまっているのでNG
    // this.state.count + 1;

    //NG
    //this.state.count = this.state.count + 1

    // this.stateの直接の子状態ではないのでOK
    // this.state.nestedObject.count = 0;

    this.setState(function (state,props){
      return {
        count : state.count + 1
    };});
    //this way, you can call setState in same function
    this.setState(function (state,props){
      return {
        count : state.count + 1
    };});

  }
  _inputUserAction = (action, e)=> {
    this.setState(action);
  }

  render() {
    return (
      <span>
        <div>
          <h2>同時更新,setStateに関数渡す</h2>
          <ul>
            <li>1つのメソッド内で2度setStateして同時に更新しています</li>
            <li>setStateにfunctionを渡すことで適切にsetStateしています</li>
          </ul>
          <button className='btn btn-primary' onClick={this.increment}>onclick</button>
          <span>{this.state.count}</span>
        </div>
        <hr />
        <div>
          <h2>Manage two events in one of the methods</h2>
          <ul>
            <li>2つのユーザーアクションに対して1メソッドで管理しています</li>
            <li>下のonFocus,onBlur時にstateを変更しています</li>
          </ul>
        </div>
        <input type='text' placeholder='keyword here!'
          onBlur={this._inputUserAction.bind(this, {action: 'onBlur'})}
          onFocus={this._inputUserAction.bind(this, {action: 'onFocus'})} />
        <span>{this.state.action}</span>
        <hr />
      </span>
    );
  }
};
