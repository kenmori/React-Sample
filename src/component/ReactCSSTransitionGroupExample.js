import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class ReactCSSTransitionGroupExample extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        items: ['掃除', '食事', '勉強', '遊び']
      };
  }
  _handleAdd = ()=> {
    let newItems = this.state.items.concat([prompt('今日やりたいことを入力してください')]);
    this.setState({
      items: newItems
    });
  }
  _handleRemove = (i)=> {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }
  render(){
    let items = this.state.items.map(function (item, i){
      return (
        <div key={item} onClick={this._handleRemove.bind(this, i)}>
          {item}
          {/*DON'T<ReactCSSTransitionGroup>*/}
          {/*ここの時点ではMountされていないのでReactCSSTransitionGroupはMount動かない。*/}
        </div>
      );
    }.bind(this));
    return (
      <div>
        <h2>ReactCSSTransitionGroup</h2>
        <p>to animation into element of list</p>
        <ul>
          <li>add押下、テキストを入力します</li>
          <li>追加された箇所をClickすると消えます</li>
          <li>出現時と削除時にanimationすることを確認してください</li>
          <li>transitionAppear="true"とすることで現存要素固定、addで追加される</li>
        </ul>
        <button className='btn btn-primary' onClick={this._handleAdd}>add</button>
        <p>今日やること</p>
        {/*ReactCSSTransitionGroupはMountされたら動く*/}
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          >
        {items}
      </ReactCSSTransitionGroup>
      <hr />
      </div>
    );
  }
};
