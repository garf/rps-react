import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PlayerScore from './PlayerScore';
import './Choice.scss';
import ChoiceIcon from '@c/ChoiceIcon'

class Choice extends Component {
  render() {
    const {choice} = this.props;

    return (
      <div className="choice" tabIndex="0" onClick={this.props.onPress}>
        <ChoiceIcon size={3} choice={choice}/>
      </div>
    );
  }
}

PlayerScore.propTypes = {
  choice: PropTypes.string,
  onPress: PropTypes.func
};

export default Choice;
