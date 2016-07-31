import React from 'react';
import {render} from 'react-dom';

export default class AnswerRadioInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        checked: !!this.props.checked,//!!は値が真偽値であることを保証するため
        id: this.props.id ? this.props.id : ''
    };
  }

  render() {
    return(
      <div className='radio'>
        <label　htmlFor={this.state.id}>
          <input
            type="radio"
            name={this.props.name}
            id={this.state.id}
            value={this.props.value}
            checked={this.state.checked}
            />
          {this.props.label}
        </label>
      </div>
    );
  }
};
AnswerRadioInput.PropTypes = {
  id : React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  checked : React.PropTypes.bool
};
AnswerRadioInput.DefaultProps = {
  //defaultPropsはインスタンスが生成される旅に呼ばれるのではなく
  //クラス毎に一度しか呼ばれないためユニークなidをここで決定することはできない
  //なのでstateとして定義される
  //statとして定義されたidは時間と共に変化しないがインスタンス毎にユニークなのでstate
  //checkedはユーザーアクションにより常に変化するためstate。
  id : null,
  name:'',
  checked : false
};
