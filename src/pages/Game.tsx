import React, { FC } from 'react';
import { connect } from 'react-redux';

import cavalryImg from '../assets/cavalry.png';
import archerImg from '../assets/archer.png';
import pikemanImg from '../assets/spearman.png';

import { RootReducer } from '../redux/reducers/rootReducer';
import { startGameAction } from '../redux/actions/game';
import { isGameStarted } from '../redux/selectors';

import { IUnit } from '../redux/interfaces';
import { Cavalry, Archer, Pikeman } from '../redux/constants';

import UnitsList from '../components/UnitsList';

interface Props {
  started: boolean;
  playerUnit: IUnit;
  onStart: () => void;
}

const Game: FC<Props> = ({ started, onStart }) => {
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
      {started ? (
        <>
          <p className="title">Choose unit</p>
          <UnitsList items={units} />
        </>
      ) : (
        <h1>Loading units...</h1>
      )}
    </div>
  );
};

export const mapStateToProps = (state: RootReducer) => {
  return {
    started: isGameStarted(state),
  };
};

export const mapDispatchToProps = {
  onStart: startGameAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
