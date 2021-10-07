import { RootReducer } from './reducers/rootReducer';

// For app reducer
export const isAppStarted = (state: RootReducer) => state.app.started;

// For game reducer
export const isGameStarted = (state: RootReducer) => state.game.started;
export const getWhoSelecting = (state: RootReducer) => state.game.whoSelecting;
export const getGameRounds = (state: RootReducer) => state.game.currentRound;
export const getPlayerScore = (state: RootReducer) => state.game.playerScore;
export const getComputerScore = (state: RootReducer) => state.game.computerScore;

// For player reducer
export const getPlayerUnit = (state: RootReducer) => state.player.unit;

// For computer reducer
export const getComputerUnit = (state: RootReducer) => state.computer.unit;
