import React from 'react';
import Immutable from 'immutable';
export default class ImmutableComponent extends React.Component {
  constructor(props){
      super(props);
      this._cansel = this._cansel.bind(this);
      this._add = this._add.bind(this);
      this._save = this._save.bind(this);
	  this._randomList = this._randomList.bind(this);
      this.state = {
        value: 1,
        initializeObj: null,
		  saveValue: [],
		  data: ['東京','名古屋','大阪','博多','札幌'],
		  randomCurrentValue: ''
      }
  }
    _add() {
        this.setState({
            value: this.state.value + 1
        })
    }
	_randomList() {
		const randomed = this.state.data[Math.round(Math.random() * this.state.data.length -1)];
		this.setState({
			randomCurrentValue : randomed
		})
	}
	_save() {
		const saveObject = Immutable.Map({
			value: this.state.value,
			randomCurrentValue : this.state.randomCurrentValue
		});
		const saveImmutable = Immutable.Iterable(saveObject);
		
		this.setState({
			saveValue: saveImmutable.set(saveImmutable)
		})

	}
    _cansel(){
    this.setState({

    })
  }
  render(){


    return (
      <div>
        <h2>immutableButton</h2>
        <button onClick={this._cansel}>初期値</button>
      <button onClick={this._save}>セーブ</button>
	  <button onClick={this._randomList}>ランダム取得</button>
	  <button onClick={this._add}>追加</button>
	  <p>{this.state.value}</p>
	  <p>現在のランダム値は: {this.state.randomCurrentValue}</p>
		  <p>saveされた値は: {this.state.saveValue}</p>
      </div>);
  }
};
