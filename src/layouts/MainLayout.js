import React, {Component} from 'react';
import './MainLayout.scss';

class MainLayout extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="container">
        <div className="container__content">{this.props.content}</div>
        <div className="container__sidebar">{this.props.sidebar}</div>
      </div>
    );
  }
}

export default MainLayout;
