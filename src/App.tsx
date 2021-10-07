import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { isAppStarted } from './redux/selectors';
import { appStartAction } from './redux/actions/app';

import './App.css';
import { RootReducer } from './redux/reducers/rootReducer';
import { Home, Game, Results } from './pages';

export interface Props {
  started: boolean;
  onStart: () => void;
}

export const AppRoot: React.FC<Props> = ({ started, onStart }) => {
  React.useEffect(() => {
    onStart();
  }, [onStart]);

  if (!started) {
    return <span className="loading">Loading...</span>;
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </div>
  );
};

export const mapStateToProps = (state: RootReducer) => {
  return {
    started: isAppStarted(state),
  };
};

export const mapDispatchToProps = {
  onStart: appStartAction,
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppRoot);
export default App;
