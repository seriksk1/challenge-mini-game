import { Action } from 'redux';

import { GameActions } from '../types';
import { IGameState } from '../interfaces';
import { GAME_START } from '../constants';

export const initialState: IGameState = {
  started: false,
  playerScore: 0,
  computerScore: 0,
  currentRound: 1,
};

export default function gameReducer(state: IGameState = initialState, action: GameActions | Action) {
  switch (action.type) {
    case GAME_START:
      return {
        ...state,
        started: true,
      };

    default:
      return state;
  }
}
