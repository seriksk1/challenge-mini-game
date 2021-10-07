import { ActionCreator } from 'redux';

import { IPlayerSetUnitAction } from '../interfaces';
import { UnitType } from '../types';
import { SET_PLAYER_UNIT } from '../constants';

export const setPlayerUnit: ActionCreator<IPlayerSetUnitAction> = (type: UnitType) => ({
  type: SET_PLAYER_UNIT,
  payload: type,
});
