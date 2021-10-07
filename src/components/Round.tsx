import React, { FC } from 'react';
import { connect } from 'react-redux';

import { getComputerUnit, getGameRounds, getPlayerUnit } from '../redux/selectors';
import { setWhoSelecting, startNextRound, addPointToPlayer, addPointToComputer, gameOver } from '../redux/actions/game';

import { GameMemberType, UnitType, Winner } from '../redux/types';
import { Computer, Draw, Player } from '../redux/constants';

import { RootReducer } from '../redux/reducers/rootReducer';
import { setComputerUnit } from '../redux/actions/computer';

import gameEngine from '../redux/services/gameEngine';

interface Props {
  playerUnit: UnitType;
  computerUnit: UnitType;
  gameRounds: number;
  setComputerUnit: (unit: UnitType) => void;
  startNextRound: () => void;
  setWhoSelecting: (gameMember: GameMemberType) => void;
  addPointToPlayer: (points: number) => void;
  addPointToComputer: (points: number) => void;
  gameOver: () => void;
}

const Round: FC<Props> = ({
  gameRounds,
  playerUnit,
  computerUnit,
  setComputerUnit,
  startNextRound,
  setWhoSelecting,
  addPointToPlayer,
  addPointToComputer,
  gameOver,
}) => {
  const roundWinner = gameEngine.checkRoundWinner(playerUnit, computerUnit);

  const addPointTo = (roundWinner: Winner) => {
    if (roundWinner === Player) {
      addPointToPlayer(1);
      addPointToComputer(-1);
    } else if (roundWinner === Computer) {
      addPointToComputer(1);
      addPointToPlayer(-1);
    } else if (roundWinner === Draw) {
      addPointToPlayer(1);
      addPointToComputer(1);
    }
  };

  const handleStartNextRound = () => {
    addPointTo(roundWinner);
    startNextRound();

    if (gameRounds + 1 < 20) {
      setWhoSelecting(Player);
    } else {
      gameOver();
    }
  };

  React.useEffect(() => {
    setComputerUnit(gameEngine.getRandomUnit());
  }, [setComputerUnit]);

  return (
    <div className="round-container">
      <div className="round-units">
        <div className="round-unit">
          <p className="unit-type">Player: {playerUnit}</p>
        </div>
        <div className="round-unit">
          <p className="unit-type">Computer: {computerUnit}</p>
        </div>
      </div>
      <div className="round-results">Round winner: {roundWinner}</div>
      <button className="btn-next-round" onClick={handleStartNextRound}>
        {'-->'}
      </button>
    </div>
  );
};

export const mapStateToProps = (state: RootReducer) => {
  return {
    computerUnit: getComputerUnit(state),
    playerUnit: getPlayerUnit(state),
    gameRounds: getGameRounds(state),
  };
};

export const mapDispatchToProps = {
  setComputerUnit,
  setWhoSelecting,
  startNextRound,
  addPointToPlayer,
  addPointToComputer,
  gameOver,
};

export default connect(mapStateToProps, mapDispatchToProps)(Round);
