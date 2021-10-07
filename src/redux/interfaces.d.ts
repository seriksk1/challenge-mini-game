// general

export interface IUnit {
  id: number;
  type: UnitType;
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
}

export interface IGameStartAction extends Action<GAME_START> {
  type: GAME_START;
}

export interface IGameStartNextAction extends Action<START_NEXT_ROUND> {
  type: START_NEXT_ROUND;
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
