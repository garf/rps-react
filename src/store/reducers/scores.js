import {ADD_SCORES, RESET_SCORES} from '../actionTypes'

const initialState = {
  players: [
    {name: 'Player 1', score: 0},
    {name: 'CPU', score: 0},
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_SCORES: {
      const { scores } = action.payload;

      return {
        ...state,
        players: state.players.map((player, index) => ({
          name: player.name,
          score: player.score + scores[index],
        }))
      };
    }

    case RESET_SCORES: {
      return {
        ...state,
        players: state.players.map(player => ({
          name: player.name,
          score: 0,
        }))
      };
    }

    default:
      return state;
  }
}
