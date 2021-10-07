import { Archer, Cavalry, Pikeman } from '../constants';
import { UnitType } from '../types';

interface GameEngine {
  units: UnitType[];

  //   initialize: () => void;
  //   setPreferredUnit: () => void;
  getRandomUnit: () => UnitType;
  checkRoundWinner: (playerUnit: UnitType, computerUnit: UnitType) => string;
  checkGameWinner: (playerScore: number, computerScore: number) => string;
}

const gameEngine: GameEngine = {
  units: [Pikeman, Archer, Cavalry],

  //   initialize: function() {
  //     this.setPreferredUnit();
  //   },

  getRandomUnit: function() {
    const randIndex = Math.floor(Math.random() * this.units.length);
    return this.units[randIndex];
  },

  //   setPreferredUnit: function() {
  //     this.units.push(this.getRandomUnit());
  //   },

  checkRoundWinner: (playerUnit, computerUnit) => {
    if (playerUnit === Archer) {
      if (computerUnit === Pikeman) {
        return 'Player';
      } else if (computerUnit === Cavalry) {
        return 'Computer';
      } else if (computerUnit === Archer) {
        return 'Draw';
      }
    } else if (playerUnit === Cavalry) {
      if (computerUnit === Archer) {
        return 'Player';
      } else if (computerUnit === Pikeman) {
        return 'Computer';
      } else if (computerUnit === Cavalry) {
        return 'Draw';
      }
    } else if (playerUnit === Pikeman) {
      if (computerUnit === Cavalry) {
        return 'Player';
      } else if (computerUnit === Archer) {
        return 'Computer';
      } else if (computerUnit === Pikeman) {
        return 'Draw';
      }
    }
    return 'Error';
  },
  checkGameWinner: (playerScore, computerScore) => {
    if (playerScore > computerScore) {
      return 'Player';
    } else if (computerScore > playerScore) {
      return 'Computer';
    } else return 'Draw';
  },
};

export default gameEngine;
