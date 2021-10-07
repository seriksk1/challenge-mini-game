import { ActionCreator } from 'redux';

import { SET_COMPUTER_UNIT } from '../constants';
import { IComputerSetUnitAction } from '../interfaces';
import { UnitType } from '../types';

export const setComputerUnit: ActionCreator<IComputerSetUnitAction> = (type: UnitType) => ({
  type: SET_COMPUTER_UNIT,
  payload: type,
});
