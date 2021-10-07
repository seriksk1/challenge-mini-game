import {
  Cavalry,
  Archer,
  Pikeman,
  Player,
  Computer,
  APP_START,
  GAME_START,
  PLAYER_WON_ROUND,
  COMPUTER_WON_ROUND,
  SET_PLAYER_UNIT,
  SET_COMPUTER_UNIT,
  START_NEXT_ROUND,
  SET_WHO_SELECTING,
} from './constants';

// general

export type UnitType = typeof Cavalry | typeof Archer | typeof Pikeman;
export type GameMemberType = typeof Player | typeof Computer;

// For app reducer

export type APP_START = typeof APP_START;
export type AppActions = IAppStartAction;

export type AppReducer = Reducer<IAppState, AppActions | Action>;

// For game reducer

export type GAME_START = typeof GAME_START;
export type START_NEXT_ROUND = typeof START_NEXT_ROUND;
export type SET_WHO_SELECTING = typeof SET_WHO_SELECTING;

export type PLAYER_WON_ROUND = typeof PLAYER_WON_ROUND;
export type COMPUTER_WON_ROUND = typeof COMPUTER_WON_ROUND;

export type GameActions = IGameStartAction | IGameStartNextAction | IGameSetWhoSelecting;

export type GameReducer = Reducer<IGameState, GameActions | Action>;

// For player reducer

export type SET_PLAYER_UNIT = typeof SET_PLAYER_UNIT;

export type PlayerActions = IPlayerWonRoundAction | IPlayerSetUnitAction;

export type PlayerReducer = Reducer<IPlayerState, PlayerActions>;

// For computer reducer

export type SET_COMPUTER_UNIT = typeof SET_COMPUTER_UNIT;

export type ComputerActions = IComputerWonRoundAction | IComputerSetUnitAction;

export type ComputerReducer = Reducer<IComputerState, ComputerActions>;
