import React, {Component} from 'react';
import './MainLayout.scss';

class MainLayout extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="container">
        <div className="box columns">
          <div className="container__content column">{this.props.content}</div>
          <div className="container__sidebar column is-one-quarter">{this.props.sidebar}</div>
        </div>
      </div>
    );
  }
}

export default MainLayout;
