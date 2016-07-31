import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ReactCSSTransitionGroupImageCarousel
extends React.Component {
  static defaultProps = {
    imageSrc:
    'http://kenjimorita.jp/wp-content/uploads/2016/02/images-108x108.png'
  }
  static propTypes = {
    imageSrc: React.propTypes.string.isRequired
  }
  constructor(props){
      super(props);
  }
  render(){
    return (
      <div>
        {/*<ReactCSSTransitionGroup
          transitionName="carousel"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          >
          <img
             src={this.props.imageSrc}
             key={this.props.imageSrc} />
         </ReactCSSTransitionGroup>*/}
      </div>);
  }
};
