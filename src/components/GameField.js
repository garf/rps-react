import React, {Component} from 'react';
import store from "../store/store";
import {addScores} from "../store/actions";
import _ from 'lodash';
import Choice from './Choice';
import {CHOICE} from '../constants';
import decider from '../services/decider';
import './GameField.scss';

class GameField extends Component {
  getRandomChoice = () => {
    return _.sample(CHOICE);
  }

  makeChoice = playerOneChoice => {
    const playerTwoChoice = this.getRandomChoice();

    const results = decider.decide([playerOneChoice, playerTwoChoice]);
    store.dispatch(addScores(results));
  }

  render() {
    return (
      <div className="game-field">
        <div className="game-field_header">

        </div>
        <div className="choices">
          <Choice onPress={() => {this.makeChoice(CHOICE.ROCK)}} name="ROCK!"/>
          <Choice onPress={() => {this.makeChoice(CHOICE.PAPER)}} name="Paper"/>
          <Choice onPress={() => {this.makeChoice(CHOICE.SCISSORS)}} name="Scissors"/>
        </div>

        <div className="game-field__result">

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setScores: () => dispatch({ type: 'INCREMENT' }),
  }
}

export default GameField;
