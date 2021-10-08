import { shallow } from 'enzyme';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { GameRoot, Props as GameProps } from '../pages/Game';
import { Player } from '../redux/constants';
import getStore from '../redux/store';

describe('Game component rendering', () => {
  beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  });

  it('renders without crashing', () => {
    const props: GameProps = {
      started: true,
      whoIsSelecting: Player,
      onStart: jest.fn(),
      restartGame: jest.fn(),
    };

    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={getStore()}>
        <GameRoot {...props} />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders loading state', () => {
    const props: GameProps = {
      started: true,
      whoIsSelecting: Player,
      onStart: jest.fn(),
      restartGame: jest.fn(),
    };
    const wrapper = shallow(<GameRoot {...props} />);
    expect(wrapper.find('.btn-restart').exists()).toBe(true);
  });
});
