import getStore from '../redux/store';

import { Archer, Cavalry, Computer, Player } from '../redux/constants';
import { IAppState, IGameResults, IGameState } from '../redux/interfaces';

import appReducer, { initialState as appInitialState } from '../redux/reducers/app';
import { appStartAction } from '../redux/actions/app';

import gameReducer, { initialState as gameInitialState } from '../redux/reducers/game';
import {
  startGameAction,
  restartGame,
  gameOver,
  startNextRound,
  setWhoSelecting,
  distributePoints,
} from '../redux/actions/game';

import playerReducer, { initialState as playerInitialState } from '../redux/reducers/player';
import { setPlayerUnit } from '../redux/actions/player';

import computerReducer, { initialState as computerInitialState } from '../redux/reducers/computer';
import { setComputerUnit } from '../redux/actions/computer';

describe('redux related tests', () => {
  // redux store

  it('creates redux store without crashing', () => {
    const store = getStore();
    expect(store.getState).toBeDefined();
    expect(store.dispatch).toBeDefined();
    expect(store.subscribe).toBeDefined();
  });

  // For app reducer

  it('app reducer should return initial state', () => {
    const state = appReducer(undefined, { type: 'ANY_ACTION' });
    expect(state).toEqual(appInitialState);
  });

  it('app reducer should return started state', () => {
    const testAction = appStartAction();
    const expectedState: IAppState = {
      ...appInitialState,
      started: true,
    };
    const state = appReducer(appInitialState, testAction);
    expect(state).toEqual(expectedState);
  });

  // For game reducer

  it('game reducer should return initial state', () => {
    const state = gameReducer(undefined, { type: 'ANY_ACTION' });
    expect(state).toEqual(gameInitialState);
  });

  it('game reducer should return started true state', () => {
    const testAction = startGameAction();
    const expectedState: IGameState = {
      ...gameInitialState,
      started: true,
    };
    const state = gameReducer(gameInitialState, testAction);
    expect(state).toEqual(expectedState);
  });

  it('game reducer should return initial state with started = true', () => {
    const stateInGame: IGameState = {
      started: true,
      currentRound: 20,
      whoSelecting: Computer,
      score: {
        player: 5,
        computer: 12,
      },
    };

    const testAction = restartGame();
    const expectedState: IGameState = {
      ...gameInitialState,
      started: true,
    };

    const state = gameReducer(stateInGame, testAction);
    expect(state).toEqual(expectedState);
  });

  it('game reducer should return started = false state', () => {
    const stateInGame: IGameState = {
      started: true,
      currentRound: 20,
      whoSelecting: Computer,
      score: {
        player: 5,
        computer: 12,
      },
    };

    const testAction = gameOver();
    const expectedState: IGameState = {
      ...stateInGame,
      started: false,
    };
    const state = gameReducer(stateInGame, testAction);
    expect(state).toEqual(expectedState);
  });

  it('game reducer should return updated currentRound state', () => {
    const testAction = startNextRound();
    const expectedState: IGameState = {
      ...gameInitialState,
      currentRound: gameInitialState.currentRound + 1,
    };
    const state = gameReducer(gameInitialState, testAction);
    expect(state).toEqual(expectedState);
  });

  it('game reducer should return whoSelecting state', () => {
    const testAction = setWhoSelecting(Computer);
    const expectedState: IGameState = {
      ...gameInitialState,
      whoSelecting: Computer,
    };
    const state = gameReducer(gameInitialState, testAction);
    expect(state).toEqual(expectedState);
  });

  it('game reducer should return updated score state', () => {
    const roundResults: IGameResults = {
      winner: Player,
      looser: Computer,
    };

    const testAction = distributePoints(roundResults);
    const expectedState: IGameState = {
      ...gameInitialState,
      score: {
        player: 1,
        computer: -1,
      },
    };
    const state = gameReducer(gameInitialState, testAction);
    expect(state).toEqual(expectedState);
  });

  // For player reducer

  it('player reducer should return initial state', () => {
    const state = playerReducer(undefined, { type: 'ANY_ACTION' });
    expect(state).toEqual(playerInitialState);
  });

  it('player reducer should return unit state', () => {
    const testAction = setPlayerUnit(Archer);
    const expectedState = {
      ...playerInitialState,
      unit: Archer,
    };
    const state = playerReducer(playerInitialState, testAction);
    expect(state).toEqual(expectedState);
  });

  // For computer reducer

  it('computer reducer should return initial state', () => {
    const state = computerReducer(undefined, { type: 'ANY_ACTION' });
    expect(state).toEqual(computerInitialState);
  });

  it('computer reducer should return unit state', () => {
    const testAction = setComputerUnit(Cavalry);
    const expectedState = {
      ...computerInitialState,
      unit: Cavalry,
    };
    const state = computerReducer(computerInitialState, testAction);
    expect(state).toEqual(expectedState);
  });
});
