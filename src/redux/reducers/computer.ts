import { Action } from 'redux';

import { ComputerActions } from '../types';
import { IComputerState } from '../interfaces';
import { SET_COMPUTER_UNIT } from '../constants';

export const initialState: IComputerState = {
  unit: null,
};

export default function computerReducer(state: IComputerState = initialState, action: ComputerActions | Action) {
  switch (action.type) {
    case SET_COMPUTER_UNIT:
      return {
        ...state,
        unit: action.payload,
      };

    default:
      return state;
  }
}
