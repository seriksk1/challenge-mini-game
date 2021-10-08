import React, { FC } from 'react';
import { connect } from 'react-redux';

import { getComputerUnit, getGameRounds, getPlayerUnit } from '../redux/selectors';
import { setWhoSelecting, startNextRound, distributePoints, gameOver } from '../redux/actions/game';

import { GameMemberType, UnitType } from '../redux/types';
import { Player } from '../redux/constants';

import { RootReducer } from '../redux/reducers/rootReducer';
import { setComputerUnit } from '../redux/actions/computer';

import { IGameResults, IGameEngine } from '../redux/interfaces';

interface Props {
  gameRounds: number;
  gameEngine: IGameEngine;
  playerUnit: UnitType;
  computerUnit: UnitType;
  setComputerUnit: (unit: UnitType) => void;
  startNextRound: () => void;
  setWhoSelecting: (gameMember: GameMemberType) => void;
  distributePoints: (results: IGameResults) => void;
  gameOver: () => void;
}

const Round: FC<Props> = ({
  gameRounds,
  playerUnit,
  computerUnit,
  gameEngine,
  setComputerUnit,
  startNextRound,
  setWhoSelecting,
  distributePoints,
  gameOver,
}) => {
  const roundResults = gameEngine.checkRoundWinner(playerUnit, computerUnit);

  const handleStartNextRound = () => {
    if (!roundResults.isDraw) {
      distributePoints(roundResults);
    }

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
      <div className="round-results">Round winner: {roundResults.isDraw ? 'Draw' : roundResults.winner}</div>
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
  distributePoints,
  gameOver,
};

export default connect(mapStateToProps, mapDispatchToProps)(Round);
