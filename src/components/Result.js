import React, {Component} from 'react';
import {Transition} from 'react-transition-group';
import './Result.scss';
import _ from 'lodash';
import ChoiceIcon from '@c/ChoiceIcon'

const animationDuration = 300;
const showDelay = 4000;
let timeout = null;

const defaultStyle = {
  transition: `opacity ${animationDuration}ms ease-in-out`,
  opacity: 1,
}

const transitionStyles = {
  exiting:  { opacity: 1 },
  exited:  { opacity: 0 },
};

const WinningPlayers = ({result}) =>
  _.some(result, entry => entry.result !== 0)
    ? result.map(entry => entry.result !== 0 ? <div key={entry.name}>{entry.name} Wins</div> : false)
    : 'DRAW';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      result: [],
    };
  }

  showResult(result) {
    this.setState({display: true, result});
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      this.setState({display: false});
    }, showDelay);
  }

  render() {
    const {result} = this.state;

    return (
      <div className="result">
        <h3 className="has-text-centered is-size-3">Results</h3>
        <Transition in={this.state.display} timeout={animationDuration}>
          {state => (
            <div className="result__wrapper" style={{...defaultStyle, ...transitionStyles[state]}}>

              <div className="result__selections selections">
                {result.map(entry => (
                  <div key={entry.name} className="selections__choice">
                    <div className="selections__name">{entry.name}</div>
                    <div className={`selections__icon ${entry.result !== 0 ? 'has-text-success' : 'has-text-danger'}`}>
                      <ChoiceIcon choice={entry.choice} size={2} color={entry.result !== 0 ? 'green' : 'red'} />
                    </div>
                  </div>
                ))}
              </div>

              <hr />

              <div className="result__players">
                <WinningPlayers result={result} />
              </div>

            </div>
          )}
        </Transition>
      </div>
    );
  }
}

export {WinningPlayers, Result};

export default Result;
