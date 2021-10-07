import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { RootReducer } from '../redux/reducers/rootReducer';
import { GameMemberType, UnitType } from '../redux/types';
import { Player } from '../redux/constants';

import { getComputerUnit, getGameRounds, getPlayerUnit } from '../redux/selectors';
import { setWhoSelecting, startNextRound } from '../redux/actions/game';
import { setComputerUnit } from '../redux/actions/computer';

import gameEngine from '../redux/services/gameEngine';

interface Props {
  playerUnit: UnitType;
  computerUnit: UnitType;
  gameRounds: number;
  setComputerUnit: (unit: UnitType) => void;
  startNextRound: () => void;
  setWhoSelecting: (gameMember: GameMemberType) => void;
}

const Round: FC<Props> = ({
  gameRounds,
  playerUnit,
  computerUnit,
  setComputerUnit,
  startNextRound,
  setWhoSelecting,
}) => {
  const history = useHistory();

  const handleStartNextRound = () => {
    if (gameRounds + 1 >= 20) {
      history.push('/results');
    } else {
      startNextRound();
      setWhoSelecting(Player);
    }
  };

  React.useEffect(() => {
    setComputerUnit(gameEngine.getRandomUnit());
  }, []);

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
      <div className="round-results">Round winner: {gameEngine.checkRoundWinner(playerUnit, computerUnit)} </div>
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
  startNextRound,
  setWhoSelecting,
};

export default connect(mapStateToProps, mapDispatchToProps)(Round);
