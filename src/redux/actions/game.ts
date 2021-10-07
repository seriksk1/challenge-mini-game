import { ActionCreator } from 'redux';

import { IGameStartAction } from '../interfaces';
import { GAME_START } from '../constants';

export const startGameAction: ActionCreator<IGameStartAction> = () => ({
  type: GAME_START,
});
