import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addScores} from "../store/actions";
import _ from 'lodash';
import Choice from './Choice';
import Result from './Result';
import {CHOICE} from '../constants';
import decider from '../services/decider';
import './GameField.scss';

class GameField extends Component {
  constructor(props) {
    super(props);
    this.state = {winner: null};
  }

  getRandomChoice = () => {
    return _.sample(CHOICE);
  }

  makeChoice = playerOneChoice => {
    const playerTwoChoice = this.getRandomChoice();

    const results = decider.decide([playerOneChoice, playerTwoChoice]);
    const winnerIndex = _.findIndex(results, score => score === 1);

    this.props.addScores(results);
    this.setState({winner: winnerIndex});
  }

  render() {
    const {players} = this.props;
    const {winner} = this.state;


    return (
      <div className="game-field">

        <div className="game-field__title">ROCK! Paper, scissors!</div>

        <div className="game-field__choices">
          <Choice onPress={() => {this.makeChoice(CHOICE.ROCK)}} name="ROCK!"/>
          <Choice onPress={() => {this.makeChoice(CHOICE.PAPER)}} name="Paper"/>
          <Choice onPress={() => {this.makeChoice(CHOICE.SCISSORS)}} name="Scissors"/>
        </div>

        <div className="game-field__result">
          {<Result name={!_.includes([null, -1], winner) ? players[winner].name : ''} isDraw={winner === -1} />}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addScores: results => dispatch(addScores(results)),
});

const mapStateToProps = state => ({
  players: state.scores.players
});


export default connect(mapStateToProps, mapDispatchToProps)(GameField);
