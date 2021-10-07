import { RootReducer } from './reducers/rootReducer';

// For app reducer
export const isAppStarted = (state: RootReducer) => state.app.started;

// For game reducer
export const isGameStarted = (state: RootReducer) => state.game.started;

// For player reducer
export const getPlayerUnit = (state: RootReducer) => state.player.unit;

// For computer reducer
export const getComputerUnit = (state: RootReducer) => state.computer.unit;
