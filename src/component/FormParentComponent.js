import React from 'react';
import FormChildComponent from './FormChildComponent.js';
import AddList from './AddList';
export default class FormParentComponent extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        count: 0,
        inputValue : ''
      };
      this.addCountFromParent = this.addCountFromParent.bind(this);
  }
  addCountFromParent(value){
    this.setState({
      count : value + 1
    });
  }
  render() {
    return(
        <div>
          <AddList addCountToParent={this.addCountFromParent} count={this.state.count} />
          <hr />
          <h2>input値をsubmitでstateを更新</h2>
          <form>
            <input type='text' value={this.state.inputValue} />
          </form>
          <hr />
          <FormChildComponent num={1} />
        </div>
    );
  }
};

FormParentComponent.defaultProps = {
  data : [
    { name: 'kenji', coment : 'hi!' },
    {name: 'keiko', comment: 'yha'}
  ]
};
