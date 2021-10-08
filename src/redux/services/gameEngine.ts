import {
  Archer,
  Cavalry,
  Pikeman,
  Player,
  Computer,
  Draw,
  ResultsPlayerWin,
  ResultsComputerWin,
  ResultsDraw,
} from '../constants';
import { IGameEngine, IUnitWithChance } from '../interfaces';
import { UnitType } from '../types';

class GameEngine implements IGameEngine {
  private units: IUnitWithChance[] = [
    { type: Pikeman, chance: 0 },
    { type: Archer, chance: 0 },
    { type: Cavalry, chance: 0 },
  ];

  constructor() {
    this.initialize();
  }

  initialize() {
    this.resetChances();
    this.setPreferredUnit();
    console.log(this.units);
  }

  resetChances() {
    this.units.forEach((unit) => (unit.chance = 0.25));
  }

  setPreferredUnit() {
    const randIndex = Math.floor(Math.random() * this.units.length);
    this.units[randIndex].chance = 0.5;
  }

  getRandomUnit() {
    const lerp = (min: number, max: number, value: number) => (1 - value) * min + value * max;

    const total = this.units.reduce((accumulator: number, item: IUnitWithChance) => (accumulator += item.chance), 0);
    const chance = lerp(0, total, Math.random());

    let current = 0;
    for (const item of this.units) {
      if (current <= chance && chance < current + item.chance) {
        return item.type;
      }
      current += item.chance;
    }

    // if Error
    return 'Cavalry';
  }

  checkRoundWinner(playerUnit: UnitType, computerUnit: UnitType) {
    if (playerUnit === Archer) {
      if (computerUnit === Pikeman) {
        return ResultsPlayerWin;
      } else if (computerUnit === Cavalry) {
        return ResultsComputerWin;
      } else if (computerUnit === Archer) {
        return ResultsDraw;
      }
    } else if (playerUnit === Cavalry) {
      if (computerUnit === Archer) {
        return ResultsPlayerWin;
      } else if (computerUnit === Pikeman) {
        return ResultsComputerWin;
      } else if (computerUnit === Cavalry) {
        return ResultsDraw;
      }
    } else if (playerUnit === Pikeman) {
      if (computerUnit === Cavalry) {
        return ResultsPlayerWin;
      } else if (computerUnit === Archer) {
        return ResultsComputerWin;
      } else if (computerUnit === Pikeman) {
        return ResultsDraw;
      }
    }
    return {};
  }

  checkGameWinner(playerScore: number, computerScore: number) {
    if (playerScore > computerScore) {
      return Player;
    } else if (computerScore > playerScore) {
      return Computer;
    } else return Draw;
  }
}

export default new GameEngine();
