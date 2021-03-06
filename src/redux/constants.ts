// general constants

import { IGameResults } from './interfaces';

export const Cavalry = 'Cavalry';
export const Archer = 'Archer';
export const Pikeman = 'Pikeman';

export const Player = 'player';
export const Computer = 'computer';
export const Draw = 'draw';

export const ResultsPlayerWin: IGameResults = {
  winner: Player,
  looser: Computer,
};
export const ResultsComputerWin: IGameResults = {
  winner: Computer,
  looser: Player,
};
export const ResultsDraw: IGameResults = {
  isDraw: true,
};

// For app reducer

export const APP_START = 'APP_START';

// For game reducer

export const GAME_START = 'GAME_START';
export const GAME_OVER = 'GAME_OVER';
export const GAME_RESTART = 'GAME_RESTART';
export const START_NEXT_ROUND = 'START_NEXT_ROUND';
export const SET_WHO_SELECTING = 'SET_WHO_SELECTING';
export const DISTRIBUTE_POINTS = 'DISTRIBUTE_POINTS';

// For player reducer

export const PLAYER_WON_ROUND = 'PLAYER_WON_ROUND';
export const SET_PLAYER_UNIT = 'SET_PLAYER_UNIT';

// For computer reducer

export const COMPUTER_WON_ROUND = 'COMPUTER_WON_ROUND';
export const SET_COMPUTER_UNIT = 'SET_COMPUTER_UNIT';
