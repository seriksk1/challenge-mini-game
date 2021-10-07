// general

export interface IUnit {
  id: number;
  type: UnitType;
  image: string;
}

// For app reducer

export interface IAppState {
  started: boolean;
}

export interface IAppStartAction extends Action<APP_START> {
  type: APP_START;
}

// For game reducer

export interface IGameState {
  started: boolean;
  playerScore: number;
  computerScore: number;
  currentRound: number;
  whoSelecting: GameMemberType;
}

export interface IGameStartAction extends Action<GAME_START> {
  type: GAME_START;
}

export interface IGameOverAction extends Action<GAME_OVER> {
  type: GAME_OVER;
}

export interface IGameRestartAction extends Action<GAME_RESTART> {
  type: GAME_RESTART;
}

export interface IGameStartNextAction extends Action<START_NEXT_ROUND> {
  type: START_NEXT_ROUND;
}

export interface IGameSetWhoSelecting extends Action<SET_WHO_SELECTING> {
  type: SET_WHO_SELECTING;
  payload: GameMemberType;
}

export interface IGameAddPointToPlayer extends Action<ADD_POINT_TO_PLAYER> {
  type: ADD_POINT_TO_PLAYER;
  payload: number;
}

export interface IGameAddPointToComputer extends Action<ADD_POINT_TO_COMPUTER> {
  type: ADD_POINT_TO_COMPUTER;
  payload: number;
}

// For player reducer

export interface IPlayerState {
  unit: UnitType;
}

export interface IPlayerSetUnitAction extends Action<SET_PLAYER_UNIT> {
  type: SET_PLAYER_UNIT;
}

export interface IPlayerWonRoundAction extends Action<PLAYER_WON_ROUND> {
  type: PLAYER_WON_ROUND;
}

// For computer reducer

export interface IComputerState {
  unit: UnitType;
}

export interface IComputerSetUnitAction extends Action<SET_COMPUTER_UNIT> {
  type: SET_COMPUTER_UNIT;
}

export interface IComputerWonRoundAction extends Action<COMPUTER_WON_ROUND> {
  type: COMPUTER_WON_ROUND;
}
