import { ActionCreator } from 'redux';

import {
  IGameResults,
  IGameOverAction,
  IGameStartAction,
  IGameRestartAction,
  IGameStartNextAction,
  IGameSetWhoSelecting,
  IGameDistributePoints,
} from '../interfaces';

import {
  GAME_OVER,
  GAME_START,
  GAME_RESTART,
  START_NEXT_ROUND,
  SET_WHO_SELECTING,
  DISTRIBUTE_POINTS,
} from '../constants';
import { GameMemberType } from '../types';

export const startGameAction: ActionCreator<IGameStartAction> = () => ({
  type: GAME_START,
});

export const restartGame: ActionCreator<IGameRestartAction> = () => ({
  type: GAME_RESTART,
});

export const gameOver: ActionCreator<IGameOverAction> = () => ({
  type: GAME_OVER,
});

export const startNextRound: ActionCreator<IGameStartNextAction> = () => ({
  type: START_NEXT_ROUND,
});

export const setWhoSelecting: ActionCreator<IGameSetWhoSelecting> = (gameMember: GameMemberType) => ({
  type: SET_WHO_SELECTING,
  payload: gameMember,
});

export const distributePoints: ActionCreator<IGameDistributePoints> = (results: IGameResults) => ({
  type: DISTRIBUTE_POINTS,
  payload: results,
});
