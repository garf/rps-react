import decider from '@/services/decider';
import {CHOICE} from '../../constants';

describe('RPS Decider', () => {

  it('decides correct scores', () => {
    expect(decider.decide([CHOICE.ROCK, CHOICE.PAPER])).toEqual([0, 1]);
    expect(decider.decide([CHOICE.ROCK, CHOICE.SCISSORS])).toEqual([1, 0]);
    expect(decider.decide([CHOICE.PAPER, CHOICE.SCISSORS])).toEqual([0, 1]);
    expect(decider.decide([CHOICE.SCISSORS, CHOICE.PAPER])).toEqual([1, 0]);
  });

  it('handles draw', () => {
    expect(decider.decide([CHOICE.ROCK, CHOICE.ROCK])).toEqual([0, 0]);
    expect(decider.decide([CHOICE.PAPER, CHOICE.PAPER])).toEqual([0, 0]);
    expect(decider.decide([CHOICE.SCISSORS, CHOICE.SCISSORS])).toEqual([0, 0]);
  });

});
