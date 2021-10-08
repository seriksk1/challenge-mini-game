import * as React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import { RootReducer } from '../redux/reducers/rootReducer';
import { AppRoot, mapStateToProps } from '../App';
import { Props as AppProps } from '../App';

import { initialState as appInitialState } from '../redux/reducers/app';
import { initialState as gameInitialState } from '../redux/reducers/game';
import { initialState as computerInitialState } from '../redux/reducers/computer';
import { initialState as playerInitialState } from '../redux/reducers/player';

describe('Root App component rendering', () => {
  beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  });

  it('renders without crashing', () => {
    const props: AppProps = {
      started: true,
      onStart: () => null,
    };

    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <AppRoot {...props} />;
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders loading state', () => {
    const props = {
      started: false,
      onStart: jest.fn(),
    };
    const wrapper = shallow(<AppRoot {...props} />);
    expect(wrapper.find('.loading').exists()).toBe(true);
    expect(wrapper.find('.app').exists()).toBe(false);
  });

  it('renders started state', () => {
    const props = {
      started: true,
      onStart: jest.fn(),
    };
    const wrapper = shallow(<AppRoot {...props} />);
    expect(wrapper.find('.loading').exists()).toBe(false);
    expect(wrapper.find('.app').exists()).toBe(true);
  });

  it('properly binds state', () => {
    const state: RootReducer = {
      app: { ...appInitialState, started: true },
      game: { ...gameInitialState },
      computer: { ...computerInitialState },
      player: { ...playerInitialState },
    };
    const props = mapStateToProps(state);
    expect(props.started).toEqual(true);
  });
});
