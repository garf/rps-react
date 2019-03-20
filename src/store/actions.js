import {ADD_SCORES, RESET_SCORES} from './actionTypes'

export const addScores = (scores) => ({
  type: ADD_SCORES,
  payload: {
    scores
  }
});

export const resetScores = () => ({
  type: RESET_SCORES
});
