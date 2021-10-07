import { Action } from 'redux';

import { GameActions } from '../types';
import { IGameState } from '../interfaces';
import { GAME_START, Player, SET_WHO_SELECTING, START_NEXT_ROUND } from '../constants';

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

    default:
      return state;
  }
}
