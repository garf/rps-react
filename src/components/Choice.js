import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PlayerScore from './PlayerScore';
import './Choice.scss';

class Choice extends Component {
  render() {
    return (
      <div className="choice" onClick={this.props.onPress}>{this.props.name}</div>
    );
  }
}

PlayerScore.propTypes = {
  name: PropTypes.string,
  onPress: PropTypes.func
};

export default Choice;
