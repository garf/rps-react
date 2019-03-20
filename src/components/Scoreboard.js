import React, {Component} from 'react';
import {connect} from 'react-redux';
import PlayerScore from './PlayerScore';
import './Scoreboard.scss';
import {resetScores} from '../store/actions'

class Scoreboard extends Component {
  render() {
    return (
      <div className="scoreboard">
        <div className="scoreboard__title">Scoreboard</div>
        <div className="scoreboard__scores">
          {this.props.players.map(player => (
            <PlayerScore name={player.name} score={player.score} key={player.name}/>
          ))}
        </div>
        <div className="scoreboard__actions">
          <button onClick={this.props.resetScores}>Let's start again!</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.scores.players
});


const mapDispatchToProps = dispatch => ({
  resetScores: () => dispatch(resetScores()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
