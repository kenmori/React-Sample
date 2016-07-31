import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import request from 'superagent';

export default class TodoList
extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        users: []
      };
  }
  componentDidMount() {
    let that = this;
    request.get('http://localhost:3005/users/',function (error,res){
      that.setState({
        users: res.body
      });
    });
  }
  onClickUpdate(){
    let that = this;
    request.get('http://localhost:3005/users/',function (error,res){
      that.setState({
        users: res.body
      });
    });
  };
  onClickPost(){
    const that = this;
    const text = this.refs.text.value;
    console.log(text);
    request.post('http://localhost:3005/users/')
    .send({
      id : this.state.users.length + 1,
      name: text
    })
    .end(function(error, res){
        console.log(res.body);
    });
  }
  render(){
    console.log(this.state.users);
    const users = this.state.users.map(function (user){
        return <User id={user.id} name={user.name} />;
    });
    return (
      <div>
        <h2>create Component by map</h2>
        <p>userの数だけ子componentを出力する</p>
        {users}
        <hr />
        <h2>Ajax request for json-server</h2>
        <p>To GET output to the ajax request by entering</p>
        {users}
        {/*<button onClick={this.onClickUpdate.bind(this)}>update</button>*/}
        名前: <input type='text' ref='text' />
        <button className='btn btn-primary' onClick={this.onClickPost.bind(this)}>追加</button>
        <hr />
      </div>
    );
  }
};

const User = React.createClass({
  render : function(){
    return (
      <div>
        <div>
          id: {this.props.id}<br />
          name: {this.props.name}</div>
      </div>
    );
  }
});
