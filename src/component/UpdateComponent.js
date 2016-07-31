import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';

export default class UpdateComponent
extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        count : [1, 2, 3],
        text: '',
        passengers: [
          'Simmon, Robert A.',
          'Taylor, Kathleen R.'
        ],
        ticket: {
          company: 'Dalta',
          flightNo: '0990',
          departure: {
            airport: 'LAS',
            time: '2016– 08– 21 T10: 00: 00.000 Z'
          },
          arrival: {
            airport: 'MIA',
            time: '2016– 08– 21 T14: 41: 10.000 Z'
          },
          codeshare: [
            {company: 'GL', flightNo: '9840'},
            {company: 'TM', flightNo: '5010'}
          ]
        }
      };

  }
  _addCount = ()=>{
      let newCount = this.state.count.length + 1;
      this.setState({
        count : update(this.state.count, {$push: [newCount]})
      });
  }
  _onChange = (e)=> {
      let upDateState =  update(this.state, {text: {$set: e.target.value}});
      this.setState(upDateState);
  }
  _addPassenger = (e) => {
      //非破壊メソッドで新しい配列やオブジェクトを作り安全に更新する
      let newPassenger = this.state.passengers.concat('Mitchell, Vincent M.');
      this.setState({passengers: newPassenger});
  }
  _addTicket = ()=> {
    let newTicket = Object.assign({}, this.state.ticket, {flightNo: '1010'});
    this.setState({
        ticket : newTicket
    });
  }
  render(){
    let initalArray = [1, 2, 3];
    let newArray = update(initalArray, {$push: [4]});//[1, 2, 3, 4];
    //initalArray is still [1, 2, 3];
    //
    const collection = [1, 2, [12, 17, 15]];
    const newCollection = update(collection, {2: {$splice: [[1, 1, 13, 14]]}});
//ネストされたオブジェクトに対して更新
// => [1, 2, {a: [12, 13, 14, 15]}]
// var obj = {a: 5, b: 3};
// var newObj = update(obj, {b: {$apply: function(x) {return x * 2;}}});
// // => {a: 5, b: 6}
// // This is equivalent, but gets verbose for deeply nested collections:
// var newObj2 = update(obj, {b: {$set: obj.b * 2}});
  return (
      <div>
          <h2>addons update</h2>
          <ul>
            <li>
              内部的に[1,2,3]に対して[4]をpushして出力しています
            </li>
            <li>ボタンを押すと数が増えます。setStateで更新していますが、値に対してupdate関数を呼んでいます</li>
            <li>記述が簡略化されていることを確認してください</li>
          </ul>
          <p>{newArray}</p>
          <p>{newCollection}</p>
          {/*<p>{newObj2}</p>*/}
          <p>{this.state.count}</p>
          <button className='btn btn-primary' onClick={this._addCount}>update</button>
            <ul>
              <li>入力をwatchしてsetStateしています</li>
              <li>記述が簡略化されていることを確認してください</li>
            </ul>
          <p>{this.state.text}</p>
          <input type='text' placeholder="wite some!" onChange={this._onChange} />
          <h3>addonを使わないやり方</h3>
          <a href="https://medium.com/pro-react/a-brief-talk-about-immutability-and-react-s-helpers-70919ab8ae7c#.9a2mvlkux">ref (React: A (very brief) talk about immutability)</a>
            <ul>
              <li>stateのプロパティに直接代入して更新しない</li>
              <li>
                <p>let updatedPassengers = this.state.passengers;</p>
                <p>updatedPassengers.push('Mitchell, Vincent M.');</p>
                <p>{"this.setState({passengers:updatedPassengers})"}</p>
                </li>
                <li>上は同じコンポーネント内の同じstateの配列に新しい参照先を作っているだけ。コピーしていない。直接その状態を変異してしまいます。
                その後のsetState呼び出しで潜在的な危険をはらむことになる</li>
              <li>新しい配列を作りる非破壊メソッドを使ってコピーする必要がある</li>
            </ul>
            <h3>ArrayをsetStateで更新する場合</h3>
            <div>{this.state.passengers}</div>
            <button className='btn btn-primary' onClick={this._addPassenger}>Array値を安全にsetStateする</button>
            {/*<p>ObjectをsetStateで更新する場合</p>
            <div>{this.state.ticket}</div>
            <button key={this.state.ticket} onClick={this._addTicket.bind(key, event);}>object値を安全にsetStateする</button>*/}
            <h3>Immutable as React state</h3>
            <p><a href="https://github.com/facebook/immutable-js/wiki/Immutable-as-React-state">https://github.com/facebook/immutable-js/wiki/Immutable-as-React-state</a></p>
            <p><a href="http://jsbin.com/rapadavidu/edit?js,output">http://jsbin.com/rapadavidu/edit?js,output</a></p>
          <hr />
      </div>
    );
  }
};
