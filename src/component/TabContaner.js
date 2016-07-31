import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class TabContaner
extends React.Component {
  constructor(props){
      super(props);
  }
  render(){
    const data = [
      {
        title: '円上昇 1年半ぶり106円台NEW'
      },
      {
        title: '前田、イチロー封じるも4失点'
      },
      {
        title: 'マナカナ佳奈 第2子を出産'
      }
    ];
    var element = React.createElement('div', {}, data[`${this.props.num}`].title);
    return (
      <div>
        <div>
            {element}
        </div>
      </div>);
    }
};
