import React, {Component} from 'react';
import {connect} from 'react-redux';
import PlayerScore from './PlayerScore';
import './Scoreboard.scss';

class Result extends Component {
  render() {
    return (
      <div className="scoreboard">
        <h3 className="title">Scoreboard</h3>
        {this.props.players.map(player => (
          <PlayerScore name={player.name} score={player.score} key={player.name}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.scores.players
});

export default connect(mapStateToProps)(Scoreboard);
