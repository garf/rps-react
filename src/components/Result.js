import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Transition} from 'react-transition-group';
import './Result.scss';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 1,
}

const transitionStyles = {
  exiting:  { opacity: 1 },
  exited:  { opacity: 0 },
};

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {display: false};
  }

  componentWillReceiveProps() {
    this.setState({display: true});

    setTimeout(() => {
      this.setState({display: false});
    }, 2000)
  }

  render() {
    return (
      <div className="result">
        <Transition in={this.state.display} timeout={duration}>
          {state => (
            <div style={{...defaultStyle, ...transitionStyles[state]}}>
              {this.props.isDraw ? 'DRAW' : `${this.props.name} WIN!`}
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

Result.propTypes = {
  name: PropTypes.string,
  isDraw: PropTypes.bool
};

export default Result;
