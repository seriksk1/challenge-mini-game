import { RootReducer } from './reducers/rootReducer';

// For app reducer
export const isAppStarted = (state: RootReducer) => state.app.started;
