import { Action } from 'redux';

import { GameActions, GameMemberType } from '../types';
import { IGameState } from '../interfaces';
import {
  Player,
  GAME_OVER,
  GAME_START,
  GAME_RESTART,
  START_NEXT_ROUND,
  SET_WHO_SELECTING,
  DISTRIBUTE_POINTS,
} from '../constants';

export const initialState: IGameState = {
  started: false,
  currentRound: 1,
  whoSelecting: Player,
  score: {
    player: 0,
    computer: 0,
  },
};

export default function gameReducer(state: IGameState = initialState, action: GameActions | Action) {
  switch (action.type) {
    case GAME_START:
      return {
        ...state,
        started: true,
      };

    case GAME_RESTART:
      return {
        ...state,
        ...initialState,
        started: true,
      };

    case GAME_OVER:
      return {
        ...state,
        started: false,
      };

    case START_NEXT_ROUND:
      return {
        ...state,
        currentRound: state.currentRound + 1,
      };

    case SET_WHO_SELECTING:
      return {
        ...state,
        whoSelecting: action.payload,
      };

    case DISTRIBUTE_POINTS: {
      const winner: GameMemberType = action.payload.winner;
      const looser: GameMemberType = action.payload.looser;

      return {
        ...state,
        score: {
          ...state.score,
          [winner]: state.score[winner] + 1,
          [looser]: state.score[looser] - 1,
        },
      };
    }

    default:
      return state;
  }
}
