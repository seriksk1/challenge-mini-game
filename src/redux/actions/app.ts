import { ActionCreator } from 'redux';
import { IAppStartAction } from '../interfaces';
import { APP_START } from '../constants';

export const appStartAction: ActionCreator<IAppStartAction> = () => ({
  type: APP_START,
});
