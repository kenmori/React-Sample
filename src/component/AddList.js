import  React from 'react';

export default class AddList extends React.Component {
    constructor(props){
      super(props);
      this.addCount = this.addCount.bind(this);
    }
    addCount(){
        this.props.addCountToParent(this.props.count);
    }
    render(){
      const threeStyle = {
        color :'red'
      };
      return (
        <div>
          <h2>add count in child Component,
            and then receive props to parent</h2>
          <ul>
            <li>addを押してください。contが3の倍数だったらthreeの文字を出力しclassに"three"を付与します</li>
            <li>内部的にはaddする度、親が状態管理しています。子のイベントを親がハンドリングしています</li>
          </ul>
          <p className={this.props.count == (this.props.count % 3 == 0) ? 'three' : ''}>{this.props.count}</p>
          <button className='btn btn-primary' onClick={this.addCount}>add</button>
        </div>
      );
    }
};
// AddList.propTypes = {
//   addCountToParent : React.propTypes.func.isRequired,
//   count: React.propTypes.number
// };
AddList.defaultProps = {
  count: null
};
