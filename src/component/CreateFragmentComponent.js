import React from 'react';
import ReactDOM from 'react-dom';
import createFragment from 'react-addons-create-fragment';

export default class CreateFragmentComponent extends React.Component {
  static propTypes = {
    rightChildren: React.PropTypes.node,
    leftChildren: React.PropTypes.node,
    swapped: React.PropTypes.bool
  }

  constructor(props){
      super(props);
      this.state = {
        swapped: true
      };
  }
  componentWillMount(){
    console.log('createFragment willMount');
  }
  componentDidMount(){
    console.log('createFragment DidMount');
  }
  checkFragment = ()=> {
    this.setState({
      swapped: !this.state.swapped
    });
  }

  render(){
    let children;
    {/*dhildrenはpropsが渡る度unMountしてreMountするkeyがchildrenに割り当てられていないから*/}
    if (this.state.swapped) {
      children = [this.props.rightChildren, this.props.leftChildren];
    } else {
      children = [this.props.leftChildren, this.props.rightChildren];
    }

    {/*prposが渡る度にDOMのなかでreloadする*/}
    let keyedChildren;
    if (this.state.swapped) {
      keyedChildren = createFragment({
        right: this.props.rightChildren,
        left: this.props.leftChildren
      });} else {
        keyedChildren = createFragment({
          left: this.props.leftChildren,
          right: this.props.rightChildren
      });
    };
    return (
      <div>
        <h2>Keyed Fragments</h2>
        <p>use CreateFragment/spread Attribute</p>
        <a href="https://facebook.github.io/react/docs/create-fragment.html">https://facebook.github.io/react/docs/create-fragment.html</a>
        <ul>
          <li>spreadAttributeによって親から渡されたcreateClassが渡っていることを確認してください</li>
          <li>clickすると、createFragmentで処理されたkeyedChildren方は
            this.props.children[0].keyが変わることを確認してください</li>
          <li>この処理により子供に全セットのkeyとして使用され、
            オブジェクトのkeyの順番はレンダリングの順番を決定するために使われる。
            子供の2組は適切にunMountなしでDOMに並び替えされる</li>
        </ul>
        {/*dhildrenはpropsが渡る度unMountしてreMountするkeyがchildrenに割り当てられていないから*/}
        <p>keyed処理されていないDOM</p>
        <div>{children}</div>
        {/*prposが渡る度にDOMのなかでreloadする*/}f
        {/*this.props.children[{ key: keyname}];*/}
        <p>keyed処理されているDOM</p>
        <div>{keyedChildren}</div>
        <button className='btn btn-primary' onClick={this.checkFragment}>click</button>
        <hr />
      </div>
    );
  }
};
