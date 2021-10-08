// general

export interface IUnit {
  id: number;
  type: UnitType;
  image: string;
}

export interface IUnitWithChance {
  type: UnitType;
  chance: number;
}

export interface IGameResults {
  winner?: GameResultType;
  looser?: GameResultType;
  isDraw?: boolean;
}

export interface IGameEngine {
  initialize: () => void;
  setPreferredUnit: () => void;
  getRandomUnit: () => UnitType;
  resetChances: () => void;
  checkRoundWinner: (playerUnit: UnitType, computerUnit: UnitType) => GameResults;
  checkGameWinner: (playerScore: number, computerScore: number) => string;
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
  score: {
    player: number;
    computer: number;
  };
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

export interface IGameDistributePoints extends Action<DISTRIBUTE_POINTS> {
  type: DISTRIBUTE_POINTS;
  payload: GameResults;
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
