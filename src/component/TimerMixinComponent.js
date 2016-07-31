import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class TimerMixinComponent
extends React.Component {
  constructor(props){
      super(props);
  }
  render(){
    return (
      <div>
          <h2>use mixin for Timer</h2>
          Timer!!!!
          <div></div>
          <hr />
      </div>);
  }
};

let Mixin = React.createClass({
  mixins: [PureRenderMixin],
  render: function (){
    return (
        <div className={this.props.className}>foo</div>
    );
  }
});
