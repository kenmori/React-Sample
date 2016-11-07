import React from 'react';
import reactDOM from 'react-dom';
import Modal from 'react-modal';
import ChildComponent from './ChildComponent';
import FormParentComponent from './FormParentComponent';
import InputValidation from './InputValidation';
import TodoComponent from './TodoComponent';
import ReactCSSTransitionGroupExample from './ReactCSSTransitionGroupExample';
import UpdateComponent from './UpdateComponent';
import ImmutableComponent from './ImmutableComponent';
import TimerMixinComponent from './TimerMixinComponent';
import ModalComponent from './ModalComponent';
// import ReactCSSTransitionGroupImageCarousel from
// './ReactCSSTransitionGroupImageCarousel';
import CreateFragmentComponent from './CreateFragmentComponent';
import TabComponent from './TabComponent';
import TodoList from './TodoList';

const appElement = document.getElementById('content');
Modal.setAppElement(appElement);
export default class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'morita',
      renderType: null,
      id: 11,
      count: 0,
       modalIsOpen: false
    };
    // console.log(this._click.bind(this))
    // console.log(this._click)
    this._click = this._click.bind(this);
    this._changeStateClick = this._changeStateClick.bind(this);
    this._upDateChildClickCount = this._upDateChildClickCount.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReciveProps');
  }
  // shouldComponentUpdate(nextProps, nextState, context) {
  //   console.log(nextState);
  //   console.log(this.state.name);
  //   console.log(context);
  //   // if(nextState.name == 'kenji'){
  //   //   return true;
  //   // } else {
  //   //   return false;
  //   // }
  // }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  componentWiiUnmount() {
    console.log('componentWiiUnmount');
  }
  _click() {
    this.setState({
      name: 'kenji',
      swapped: false
    });
  }
  _changeStateClick(addCount) {
    this.setState({
      renderType: addCount
    });
  }
  _upDateChildClickCount() {
    this.setState({count: this.state.count + 1});
  }
    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }
render() {
  //オブジェクトをprops経由で渡す
  let user = {
    "id": 3,
    "age": 22
  };
  //spread Attribute;
  let props = {};
  props.swapped=true;
  props.text='default';
  props.rightChildren=<Right />;
  props.leftChildren=<Left />;
  // const map = ['待機中','鑑定中', '予約受付中', '時間外'];
    //modalSetting
    const customStyles = {
        overlay : {
            background: 'rgba(0,0,0, .4)'
        },
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            width                 : '72%'
        }
    };

    return  (
      <div>
      {/*<div className={`ratewrap${this.state.id} iii`}>
       <p className='rate'>{`${map[this.state.id]}`}</p>
       { this.state.id == 10 ? <div>eee</div> : ''}
       </div>*/}
      <TabComponent />
      <ReactCSSTransitionGroupExample />
      <UpdateComponent />
      <InputValidation />

            <h2 id="modal">react-modal</h2>
        <button  className='btn btn-primary' onClick={this.openModal}>Open Modal</button>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        shouldCloseOnOverlayClick={true}
        style={customStyles} >
            <h2 ref="subtitle">Hello</h2>
      <button className='btn btn-primary' onClick={this.closeModal}>close</button>
      <div>I am a modal</div>
          <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
            <p>//github.com/reactjs/react-modal</p>
          </form>
        </Modal>
      <hr />
        <FormParentComponent {...props} text={'override'} renderType={this.state.renderType} />
        <hr />
        
      <h2>ここから下調整中(2016/08/01)</h2>
      <h2>Im ParentComponent</h2>
      <ChildComponent user={user} func={this._upDateChildClickCount} count={this.state.count} name={this.state.name} renderType={1} />
      <hr />
      <ChildComponent user={user} name={this.state.name} renderType={2} />

      <button className='btn btn-primary' onClick={this._click}>push</button>

      <ImmutableComponent />
      <listElementRoot />
      <Element />
      <TodoList />
      <TimerMixinComponent />
      <TodoComponent />
      {/*<ReactCSSTransitionGroupImageCarousel />*/}
      <CreateFragmentComponent func={this._changeStateClick} />
</div>

);
}
}



var contacts = [
    {key: 1, name: "James Nelson", email: "james@jamesknelson.com"},
    {key: 2, name: "kenji", email: "kenji@fafafafa.com"},
    {key: 3, name: "koiufa Nelson", email: "koifa@jamesknelson.com"},
    {key: 4, name: "Bob", email: "ooo.com"}
  ];

  var email = contacts.map(function(elm, i){
        return elm["email"];
    });
    var listObj = email.forEach(function (obj, i){
      return (
        React.createElement('li', {email: obj[i]},
          React.createElement('span', {},
            React.createElement('a', { href: 'mailto' + obj[i] },
             'email' + obj[i]
              )
          )
        )
      );
    });
  let listElementRoot = React.createClass({
      render(){
        return (
          React.createElement('div', {},
            React.createElement('p', {}, 'contact',
              React.createElement('ul', {}, listObj)
            )
          )
        );
      }
    });

  let Element = React.createClass({
      render(){
        return (
          React.createElement('div', {age: 20},
            React.createElement('span', {},
              React.createElement('a', {href: 'http://kenjimorita.jp'},"kokokara")))
        );
      }
  });
  let Right = React.createClass({
      render(){
        return (
          <div>right</div>
        );
      }
  });
  let Left = React.createClass({
    render(){
      return (
        <div>left</div>
      );
    }
  });
