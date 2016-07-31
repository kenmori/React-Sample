import React from 'react';
import dom from 'react-dom';
import CommentChildComponent  from './CommentChildComponent';
export default class CommentComponent extends React.Component {
  constructor(props){
      super(props);
  }

  // createItems(items) {
  //     let output = [];
  //     for (let i = 0; i < items.length; i++) output.push(<li>{items[i]}</li>);
  //     return output;
  // }
  render() {
    // TODO:this.props.dataを受けてlistの描画
    // var lists = this.props.data.forEach((data,index) => {
    //     return (
    //       <div>{data[index]}</div>
    //   );
    // });
    let isShowComponent = true;
    return (
      <div>
        <div>
          <Comment name='kenji' />
          {/*{<ul>{this.createItems(this.props.items)}</ul>}*/}
        </div>
        <hr />
        <h2>【WIP】isShowComponentがtrueの場合コンポーネント
          CommentChildComponent自体返しfalseの場合null返しています</h2>
        <div>
          {isShowComponent ? <CommentChildComponent /> : null}
        </div>
        <hr />
      </div>
    );
  }
};


//ES5-way
//

let Comment = React.createClass({
 componentDidMount(){
 },
 itemName(item) {
  return `${item.name}:${item.count}`;
},
 render(){
  //  let Factory = React.createFactory();
  //  let FactoryDom = Factory({ custom: 'prop' });
  //  React.createClass({
  //    render() {
  //      return <div>{this.props.custom}</div>;
  //  }});
   //how to set style
   let style = {
    fontSize: 14
   };

   let childChild = React.createElement('span', null, 'わたしです');
   let child = React.createElement('div', {job: 'webdesign', style: {color: 'red' }}, childChild);
   let items = this.props.items.map(item => <span>{this.itemName(item)}</span>);
   return (
     <div style={style}>{this.props.name}
       こめんと{this.props.data}
       <div>{child}{this.props.name}</div>
       <div>{this.props.job}</div>
       <div>{items}</div>
        {React.DOM.ul({className: 'color14'}, React.DOM.li(null,'text!!!!!!'))}
        <div></div>
     </div>
   );
 }
});


 Comment.defaultProps = {
   data : 'eee',
   name: 'morita',
   job: 'webenginier',
   items: [
     {
       name:'ramen',
       count: 1
     },
     {
       name: 'gohan',
       count: 2
     },
     {
       name: 'misoshiru',
       count: 3
     }]
 };

CommentComponent.dedaultProps = {
  data : []
};
