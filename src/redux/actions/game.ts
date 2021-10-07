import { ActionCreator } from 'redux';

import { IGameStartAction, IPlayerWonRoundAction, IComputerWonRoundAction, IGameStartNextAction } from '../interfaces';

import { GAME_START, PLAYER_WON_ROUND, COMPUTER_WON_ROUND, START_NEXT_ROUND, SET_WHO_SELECTING } from '../constants';
import { GameMemberType } from '../types';

export const startGameAction: ActionCreator<IGameStartAction> = () => ({
  type: GAME_START,
});

export const playerWonRound: ActionCreator<IPlayerWonRoundAction> = () => ({
  type: PLAYER_WON_ROUND,
});

export const computerWonRound: ActionCreator<IComputerWonRoundAction> = () => ({
  type: COMPUTER_WON_ROUND,
});

export const setWhoSelecting: ActionCreator<IComputerWonRoundAction> = (gameMember: GameMemberType) => ({
  type: SET_WHO_SELECTING,
  payload: gameMember,
});

export const startNextRound: ActionCreator<IGameStartNextAction> = () => ({
  type: START_NEXT_ROUND,
});
