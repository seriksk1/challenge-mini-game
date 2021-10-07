import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { RootReducer } from './reducers/rootReducer';

export type ReduxStore = Store<RootReducer>;

export default function getStore(): ReduxStore {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
  return store;
}
