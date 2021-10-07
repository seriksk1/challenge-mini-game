import React, { FC } from 'react';
import { connect } from 'react-redux';

import { RootReducer } from '../redux/reducers/rootReducer';
import { startGameAction } from '../redux/actions/game';
import { getPlayerUnit, isGameStarted } from '../redux/selectors';

import { IUnit } from '../redux/interfaces';
import { Cavalry, Archer, Pikeman } from '../redux/constants';

import UnitsList from '../components/UnitsList';

interface Props {
  started: boolean;
  playerUnit: IUnit;
  onStart: () => void;
}

const Game: FC<Props> = ({ started, onStart, playerUnit }) => {
  const units: IUnit[] = [
    { id: 0, type: Cavalry },
    { id: 1, type: Archer },
    { id: 2, type: Pikeman },
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
    playerUnit: getPlayerUnit(state),
  };
};

export const mapDispatchToProps = {
  onStart: startGameAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
