import  React from 'react';

export default class InputValidation extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        myText: 'texthere',
        valid: false,
        result: ''
      };
    }
    componentDidMount(){
      console.log(this.refs.secondName);
      console.log(this.refs.secondName.props);
      // console.log(this.refs.secondName.props.children);//morita
      //props.children is nessesary eval,
      // some time return value has 'string'(like above),
      //'Array'(react Element) ,undefined
      // console.log(this.refs.myText.props.children);

      //DOM
      // let count = this.refs.firstName.props.children;
    }
    onChange(event){
        this.setState({
            myText: this.refs.inputText.value//or event.target.value
        });
    }
    onBlur(event){
      this.chkValidateText(this.state.myText);
    }
    chkValidateText(chkValue){
        if(chkValue.length < 5){
          this.setState({
            valid : false
          });
        } else {
          this.setState({
            valid : true
          });
        }
        this.chkInvalid();
    }
    chkInvalid(){
      this.refs.result.value = this.state.valid ? 'ok' : '5文字以上入力してください';
      this.setState({
        result: this.refs.result.value
      });
    }
    render(){
      return (
        <div>
          <div ref='secondName'>
            morita
          </div>
          <hr />
          <h2>validation</h2>
          <ul>
            <li>5文字未満の入力でcheckボタン押下時、バリデーションが走ります</li>
            <li>angularのような2wayBinding風です</li>
          </ul>
          <p>uper 5 of string length appear valid text</p>
          <div ref='myTextDest'>{this.state.myText}</div>
          <input
            type='text'
            ref='inputText'
            onBlur={this.onBlur.bind(this)}
            onChange={this.onChange.bind(this)}/>
          <div ref='result'
             className={this.state.vaild ? '' : 'red'}>
             {this.state.result}
           </div>
          <button className='btn btn-primary' onClick={this.chkInvalid.bind(this)}>check</button>
          <hr />
        </div>
      );
    }
  };
