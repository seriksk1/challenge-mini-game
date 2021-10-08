import {
  Cavalry,
  Archer,
  Pikeman,
  Player,
  Computer,
  Draw,
  APP_START,
  GAME_OVER,
  GAME_START,
  GAME_RESTART,
  START_NEXT_ROUND,
  SET_WHO_SELECTING,
  DISTRIBUTE_POINTS,
  SET_PLAYER_UNIT,
  SET_COMPUTER_UNIT,
} from './constants';

import { IAppState } from './interfaces';

// general

export type UnitType = typeof Cavalry | typeof Archer | typeof Pikeman;
export type GameMemberType = typeof Player | typeof Computer;
export type GameResultType = GameMemberType | typeof Draw;

// For app reducer

export type APP_START = typeof APP_START;
export type AppActions = IAppStartAction;

export type AppReducer = Reducer<IAppState, AppActions | Action>;

// For game reducer

export type GAME_OVER = typeof GAME_OVER;
export type GAME_START = typeof GAME_START;
export type GAME_RESTART = typeof GAME_RESTART;

export type START_NEXT_ROUND = typeof START_NEXT_ROUND;
export type SET_WHO_SELECTING = typeof SET_WHO_SELECTING;
export type DISTRIBUTE_POINTS = typeof DISTRIBUTE_POINTS;

export type GameActions =
  | IGameOverAction
  | IGameStartAction
  | IGameRestartAction
  | IGameStartNextAction
  | IGameSetWhoSelecting
  | IGameDistributePoints;

export type GameReducer = Reducer<IGameState, GameActions | Action>;

// For player reducer

export type SET_PLAYER_UNIT = typeof SET_PLAYER_UNIT;

export type PlayerActions = IPlayerSetUnitAction;
export type PlayerReducer = Reducer<IPlayerState, PlayerActions>;

// For computer reducer

export type SET_COMPUTER_UNIT = typeof SET_COMPUTER_UNIT;

export type ComputerActions = IComputerSetUnitAction;
export type ComputerReducer = Reducer<IComputerState, ComputerActions>;
