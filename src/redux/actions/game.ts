import { ActionCreator } from 'redux';

import {
  IGameStartAction,
  IComputerWonRoundAction,
  IGameStartNextAction,
  IGameAddPointToPlayer,
  IGameAddPointToComputer,
  IGameOverAction,
  IGameRestartAction,
} from '../interfaces';

import {
  GAME_START,
  START_NEXT_ROUND,
  SET_WHO_SELECTING,
  ADD_POINT_TO_PLAYER,
  ADD_POINT_TO_COMPUTER,
  GAME_OVER,
  GAME_RESTART,
} from '../constants';
import { GameMemberType } from '../types';

export const startGameAction: ActionCreator<IGameStartAction> = () => ({
  type: GAME_START,
});

export const gameOver: ActionCreator<IGameOverAction> = () => ({
  type: GAME_OVER,
});

export const restartGame: ActionCreator<IGameRestartAction> = () => ({
  type: GAME_RESTART,
});

export const addPointToPlayer: ActionCreator<IGameAddPointToPlayer> = (points: number) => ({
  type: ADD_POINT_TO_PLAYER,
  payload: points,
});

export const addPointToComputer: ActionCreator<IGameAddPointToComputer> = (points: number) => ({
  type: ADD_POINT_TO_COMPUTER,
  payload: points,
});

export const setWhoSelecting: ActionCreator<IComputerWonRoundAction> = (gameMember: GameMemberType) => ({
  type: SET_WHO_SELECTING,
  payload: gameMember,
});

export const startNextRound: ActionCreator<IGameStartNextAction> = () => ({
  type: START_NEXT_ROUND,
});
