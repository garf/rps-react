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
    this.resultBlock = React.createRef();
  }

  getRandomChoice = () => {
    return _.sample(CHOICE);
  }

  makeChoice = playerOneChoice => {
    const playerTwoChoice = this.getRandomChoice();
    const choices = [playerOneChoice, playerTwoChoice];

    const result = decider.decide(choices);

    this.props.addScores(result);
    this.resultBlock.current.showResult(_prepareResult(this.props.players, result, choices));
  }

  render() {
    const {players} = this.props;

    const choicesMap = [
      CHOICE.ROCK,
      CHOICE.PAPER,
      CHOICE.SCISSORS,
    ];

    return (
      <div className="game-field">

        <div className="game-field__title">ROCK! Paper, scissors!</div>

        <div className="game-field__choices">
          {choicesMap.map(choice => <Choice key={choice} onPress={() => {this.makeChoice(choice)}} choice={choice}/>)}
        </div>

        <div className="game-field__result">
          <Result ref={this.resultBlock} />
        </div>
      </div>
    );
  }
}

const _prepareResult = (players, result, choices) => players.map((player, index) => ({
  name: player.name,
  choice: choices[index],
  result: result[index],
}));

const mapDispatchToProps = dispatch => ({
  addScores: result => dispatch(addScores(result)),
});

const mapStateToProps = state => ({
  players: state.scores.players
});


export default connect(mapStateToProps, mapDispatchToProps)(GameField);
