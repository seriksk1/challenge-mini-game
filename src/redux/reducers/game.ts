import { Action } from 'redux';

import { GameActions } from '../types';
import { IGameState } from '../interfaces';
import {
  ADD_POINT_TO_COMPUTER,
  ADD_POINT_TO_PLAYER,
  GAME_OVER,
  GAME_RESTART,
  GAME_START,
  Player,
  SET_WHO_SELECTING,
  START_NEXT_ROUND,
} from '../constants';

export const initialState: IGameState = {
  started: false,
  playerScore: 0,
  computerScore: 0,
  currentRound: 1,
  whoSelecting: Player,
};

export default function gameReducer(state: IGameState = initialState, action: GameActions | Action) {
  switch (action.type) {
    case GAME_START:
      return {
        ...state,
        started: true,
      };

    case GAME_OVER:
      return {
        ...state,
        started: false,
      };

    case GAME_RESTART:
      return {
        ...state,
        ...initialState,
        started: true,
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

    case ADD_POINT_TO_PLAYER:
      return {
        ...state,
        playerScore: state.playerScore + action.payload,
      };

    case ADD_POINT_TO_COMPUTER:
      return {
        ...state,
        computerScore: state.computerScore + action.payload,
      };

    default:
      return state;
  }
}
