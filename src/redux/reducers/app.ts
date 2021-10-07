import { Action } from 'redux';
import { AppActions } from '../types';
import { IAppState } from '../interfaces';
import { APP_START } from '../constants';

export const initialState: IAppState = {
  started: false,
};

export default function appReducer(state: IAppState = initialState, action: AppActions | Action) {
  switch (action.type) {
    case APP_START:
      return {
        ...state,
        started: true,
      };

    default:
      return state;
  }
}
