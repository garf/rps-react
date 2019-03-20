import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PlayerScore extends Component {
  render() {
    return (
      <div>{this.props.name}: {this.props.score}</div>
    );
  }
}

PlayerScore.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number
};


export default PlayerScore;
