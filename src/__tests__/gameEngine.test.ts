import {
  Archer,
  Cavalry,
  Pikeman,
  Draw,
  Player,
  Computer,
  ResultsComputerWin,
  ResultsDraw,
  ResultsPlayerWin,
} from '../redux/constants';
import { IGameResults } from '../redux/interfaces';
import { GameResultType } from '../redux/types';

import gameEngine from '../redux/services/gameEngine';

describe('Testing game engine', () => {
  // test setPrefferedUnit

  it('setPrefferedUnit should update chance of random unit to 0.5', () => {
    gameEngine.setPreferredUnit();
    const updatedUnits = gameEngine.getUnits();

    expect(updatedUnits.some((unit) => unit.chance === 0.5)).toBe(true);
  });

  // test resetChances

  it('resetChances should reset units chance to 0.25', () => {
    gameEngine.resetChances();
    const updatedUnits = gameEngine.getUnits();

    expect(updatedUnits.every((unit) => unit.chance === 0.25)).toBe(true);
  });

  //test getRandomUnit

  it('getRandomUnit', () => {
    const unit = gameEngine.getRandomUnit();
    expect(unit === Cavalry || unit === Archer || unit === Pikeman).toBe(true);
  });

  // test checkGameWinner

  describe('checkGameWinner should return ', () => {
    let score;
    let gameWinner: GameResultType;

    it('Player', () => {
      score = { player: 10, computer: 9 };
      gameWinner = gameEngine.checkGameWinner(score.player, score.computer);

      expect(gameWinner).toEqual(Player);
    });

    it('Computer', () => {
      score = { player: 9, computer: 10 };
      gameWinner = gameEngine.checkGameWinner(score.player, score.computer);

      expect(gameWinner).toEqual(Computer);
    });

    it('Draw', () => {
      score = { player: 10, computer: 10 };
      gameWinner = gameEngine.checkGameWinner(score.player, score.computer);

      expect(gameWinner).toEqual(Draw);
    });
  });

  // test checkRoundWinner

  describe('checkRoundWinner should return', () => {
    let roundWinner: IGameResults;
    let expectedResults: IGameResults;

    it('player win results', () => {
      roundWinner = gameEngine.checkRoundWinner(Archer, Pikeman);
      expectedResults = ResultsPlayerWin;

      expect(roundWinner).toEqual(expectedResults);
    });

    it('computer win results', () => {
      roundWinner = gameEngine.checkRoundWinner(Cavalry, Pikeman);
      expectedResults = ResultsComputerWin;

      expect(roundWinner).toEqual(expectedResults);
    });

    it('draw results', () => {
      roundWinner = gameEngine.checkRoundWinner(Cavalry, Cavalry);
      expectedResults = ResultsDraw;

      expect(roundWinner).toEqual(expectedResults);
    });
  });
});
