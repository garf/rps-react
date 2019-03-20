import React, {Component} from 'react';
import MainLayout from '../layouts/MainLayout'
import GameField from '../components/GameField'
import Scoreboard from '../components/Scoreboard'

class GamePage extends Component {
  render() {
    return (
      <MainLayout
        content={<GameField/>}
        sidebar={<Scoreboard/>}
      />
    );
  }
}

export default GamePage;
