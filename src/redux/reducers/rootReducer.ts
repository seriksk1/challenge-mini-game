import { combineReducers } from 'redux';

import { IAppState, IComputerState, IGameState, IPlayerState } from '../interfaces';
import { gameReducer, appReducer, playerReducer, computerReducer } from './';

export interface RootReducer {
  app: IAppState;
  game: IGameState;
  player: IPlayerState;
  computer: IComputerState;
}

const rootReducer = combineReducers<RootReducer>({
  app: appReducer,
  game: gameReducer,
  player: playerReducer,
  computer: computerReducer,
});

export default rootReducer;
