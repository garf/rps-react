import React from 'react';
import {shallow} from 'enzyme';
import {Result, WinningPlayers} from '@c/Result';
import {CHOICE} from '@/constants'

describe('Result component', () => {

  it('should render correct ', () => {
    const component = shallow(<Result />);

    expect(component).toMatchSnapshot();
  });

  describe('WinningPlayers sub-component', () => {


    it('should render correct win message for player 1', () => {
      const result = [
        {
          name: 'User 1',
          result: 1,
          choice: CHOICE.PAPER,
        },
        {
          name: 'User 2',
          result: 0,
          choice: CHOICE.ROCK,
        },
      ];

      const component = shallow(<WinningPlayers result={result} />);

      expect(component).toMatchSnapshot();
    });

    it('should render correct win message for player 2', () => {
      const result = [
        {
          name: 'User 1',
          result: 0,
          choice: CHOICE.SCISSORS,
        },
        {
          name: 'User 2',
          result: 1,
          choice: CHOICE.ROCK,
        },
      ];

      const component = shallow(<WinningPlayers result={result} />);

      expect(component).toMatchSnapshot();
    });

    it('should render correct draw message', () => {
      const result = [
        {
          result: 0,
        },
        {
          result: 0,
        },
      ];

      const component = shallow(<WinningPlayers result={result} />);

      expect(component).toMatchSnapshot();
    });
  });
});
