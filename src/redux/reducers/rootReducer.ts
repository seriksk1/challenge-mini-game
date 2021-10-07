import { combineReducers } from 'redux';

import { IAppState } from '../interfaces';
import { appReducer } from './';

export interface RootReducer {
  app: IAppState;
}

const rootReducer = combineReducers<RootReducer>({
  app: appReducer,
});

export default rootReducer;
