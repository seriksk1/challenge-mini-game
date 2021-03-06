import React, { FC } from 'react';
import { connect } from 'react-redux';

import cavalryImg from '../assets/cavalry.png';
import archerImg from '../assets/archer.png';
import pikemanImg from '../assets/spearman.png';

import { RootReducer } from '../redux/reducers/rootReducer';
import { startGameAction, restartGame } from '../redux/actions/game';
import { getWhoSelecting, isGameStarted } from '../redux/selectors';

import { IUnit } from '../redux/interfaces';
import { GameMemberType } from '../redux/types';
import { Cavalry, Archer, Pikeman, Player, Computer } from '../redux/constants';

import { Score, Round, UnitsList } from '../components';
import gameEngine from '../redux/services/gameEngine';

export interface Props {
  started: boolean;
  whoIsSelecting: GameMemberType;

  onStart: () => void;
  restartGame: () => void;
}

export const GameRoot: FC<Props> = ({ started, whoIsSelecting, onStart, restartGame }) => {
  const units: IUnit[] = [
    { id: 0, type: Cavalry, image: cavalryImg },
    { id: 1, type: Archer, image: archerImg },
    { id: 2, type: Pikeman, image: pikemanImg },
  ];

  const handleRestartGame = () => {
    gameEngine.initialize();
    restartGame();
  };

  React.useEffect(() => {
    gameEngine.initialize();
    onStart();
  }, [onStart]);

  return (
    <div>
      <Score />

      {started && whoIsSelecting === Player ? (
        <>
          <p className="title">Choose unit</p>
          <UnitsList items={units} />
        </>
      ) : started && whoIsSelecting === Computer ? (
        <Round gameEngine={gameEngine} />
      ) : null}

      <button onClick={handleRestartGame} className="btn-restart">
        Restart
      </button>
    </div>
  );
};

export const mapStateToProps = (state: RootReducer) => {
  return {
    started: isGameStarted(state),
    whoIsSelecting: getWhoSelecting(state),
  };
};

export const mapDispatchToProps = {
  onStart: startGameAction,
  restartGame,
};
const Game = connect(mapStateToProps, mapDispatchToProps)(GameRoot);
export default Game;
