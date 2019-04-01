import React from 'react';
import {shallow} from 'enzyme';
import PlayerScore from '@c/PlayerScore';

describe('PlayerScore component', () => {
  it('should render correct score for player', () => {
    const component = shallow(<PlayerScore name='Chuck Norris' score={3} />);

    expect(component).toMatchSnapshot();
  });
});
