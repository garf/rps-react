import {CHOICE} from '../constants';
import _ from 'lodash';

export default {
  decide: ([choiceOne, choiceTwo]) => {
    if (choiceOne === choiceTwo) {
      return [0, 0];
    }

    // Values are an arrays that win this option
    const decisionMap = {
      [CHOICE.ROCK]: [CHOICE.PAPER],
      [CHOICE.PAPER]: [CHOICE.SCISSORS],
      [CHOICE.SCISSORS]: [CHOICE.ROCK],
    };

    if (_.includes(decisionMap[choiceOne], choiceTwo)) {
      return [0, 1];
    }

    return [1, 0];
  }
}
