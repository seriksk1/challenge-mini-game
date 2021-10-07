import React, { FC } from 'react';
import { connect } from 'react-redux';

import cavalryImg from '../assets/cavalry.png';
import archerImg from '../assets/archer.png';
import pikemanImg from '../assets/spearman.png';

import { RootReducer } from '../redux/reducers/rootReducer';
import { startGameAction } from '../redux/actions/game';
import { getWhoSelecting, isGameStarted } from '../redux/selectors';

import { IUnit } from '../redux/interfaces';
import { Cavalry, Archer, Pikeman, Player, Computer } from '../redux/constants';

import UnitsList from '../components/UnitsList';
import { Round } from '../components';
import { GameMemberType } from '../redux/types';

interface Props {
  started: boolean;
  playerUnit: IUnit;
  whoIsSelecting: GameMemberType;
  onStart: () => void;
}

const Game: FC<Props> = ({ started, whoIsSelecting, onStart }) => {
  const units: IUnit[] = [
    { id: 0, type: Cavalry, image: cavalryImg },
    { id: 1, type: Archer, image: archerImg },
    { id: 2, type: Pikeman, image: pikemanImg },
  ];
  React.useEffect(() => {
    onStart();
  }, [onStart]);

  return (
    <div>
      {started && whoIsSelecting === Player ? (
        <>
          <p className="title">Choose unit</p>
          <UnitsList items={units} />
        </>
      ) : whoIsSelecting === Computer ? (
        <Round />
      ) : (
        <h1>Loading units...</h1>
      )}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
