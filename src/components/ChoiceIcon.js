import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CHOICE} from '@/constants';
import Icon from '@mdi/react';
import { mdiContentCut, mdiNoteOutline, mdiDiamondStone } from '@mdi/js';

class ChoiceIcon extends Component {
  render() {
    const {choice, size, color} = this.props;

    const iconsMap = {
      [CHOICE.ROCK]: <Icon path={mdiDiamondStone} size={size} color={color}/>,
      [CHOICE.PAPER]: <Icon path={mdiNoteOutline} size={size} color={color}/>,
      [CHOICE.SCISSORS]: <Icon path={mdiContentCut} size={size} color={color}/>,
    };

    return iconsMap[choice];
  }
}

ChoiceIcon

ChoiceIcon.propTypes = {
  choice: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
};

export default ChoiceIcon;
