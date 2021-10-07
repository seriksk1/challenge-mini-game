import { Action } from 'redux';

import { PlayerActions } from '../types';
import { IPlayerState } from '../interfaces';
import { SET_PLAYER_UNIT } from '../constants';

export const initialState: IPlayerState = {
  unit: null,
};

export default function playerReducer(state: IPlayerState = initialState, action: PlayerActions | Action) {
  switch (action.type) {
    case SET_PLAYER_UNIT:
      return {
        ...state,
        unit: action.payload,
      };

    default:
      return state;
  }
}
