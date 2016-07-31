import React from 'react';
export default class CommentChildComponent extends React.Component {
  constructor(props){
      super(props);
      this.getCount = this.getCount.bind(this);
  }
  getCount() {
    let obj = {
      count : this.props.count
    };
    // this.props.func(obj);
  }
  render() {
    return (
        <div>
          <button className='btn btn-primary' onClick={this.getCount}>I'm ComentChildComponent</button>
            { this.props.count % 2 == 0 && this.props.count != 0 ? <span>2の倍数です</span> : ''}
        </div>
    );
  }
};
CommentChildComponent.PropTypes = {
    func: React.PropTypes.func
};
CommentChildComponent.defaultProps = {
    count : 1
};
