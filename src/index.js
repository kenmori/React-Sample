import React from 'react';
import ReactDOM  from 'react-dom';
import Perf from 'react-addons-perf';
import $ from 'jquery';
import ParentComponent from './component/ParentComponent';
import FunctionComponent from './component/FunctionComponent';



export default class HelloReact extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
            <div>
        <h1>React-Sample集</h1>
        <p>~小さい部品を数多く違った方法で作って理解する~</p>
        <p>author: <a href="https://github.com/kenmori">kenmori</a></p>
        <p>blog: <a href="http://kenjimorita.jp/">bukostunikki</a></p>
        <FunctionComponent />    
        <ParentComponent />
            </div>
      </div>
      );
  }
}


ReactDOM.render(
  <HelloReact />,
  document.getElementById('content')
);
