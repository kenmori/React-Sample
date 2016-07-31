import React from 'react';
import ReactDOM from 'react-dom';
import GrandsonComponent from './GrandsonComponent';

export default class ChildComponent extends React.Component {
  static DefaultProps = {
    count: 0
  }
  static PropTypes = {
    count: React.PropTypes.number,
    func: React.PropTypes.func
  }
  constructor(props){
    super(props);
    this._getCountApi = this._getCountApi.bind(this);
  }
  // getDefaultProps(){
  //   return {
  //     name: 'keiko'
  //   };
  // }
  _getCountApi = ()=>{
    this.props.func();
  }
  render(){
    let renderTypeView = this.props.renderType == 2 ? this.props.user.id.toString() : '';
    return (
      <div>
        <h3>when you click, emmit</h3>
        <div>{this.props.count}</div>
        <button className='btn btn-primary' onClick={this._getCountApi}>click!</button>
        <hr />
        <h3>I'm ChildrenComponent{this.props.renderType}</h3>
          <p>renderType is {this.props.renderType}</p>
          {/*<div>{this.getDefaultProps()}</div>*/}
          <div>{this.props.name}</div>
          <div>{renderTypeView}</div>
          <GrandsonComponent renderType={this.props.renderType} {...this.props} />
          <GrandsonComponent renderType={this.props.renderType} />
          <hr />
      </div>
    );
  }
}
