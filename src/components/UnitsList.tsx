import React, { FC } from 'react';
import { connect } from 'react-redux';

import { RootReducer } from '../redux/reducers/rootReducer';
import { setPlayerUnit } from '../redux/actions/player';

import { IUnit } from '../redux/interfaces';
import { GameMemberType, UnitType } from '../redux/types';
import { setWhoSelecting } from '../redux/actions/game';
import { Computer } from '../redux/constants';

interface Props {
  items: IUnit[];
  setPlayerUnit: (type: UnitType) => void;
  setWhoSelecting: (gameMember: GameMemberType) => void;
}

const UnitsList: FC<Props> = ({ items, setPlayerUnit, setWhoSelecting }) => {
  const handleUnitSelect = (type: UnitType) => {
    setPlayerUnit(type);
    setWhoSelecting(Computer);
  };

  return (
    <ul className="units-list">
      {items.length !== 0
        ? items.map((item) => {
            return (
              <li key={item.id} className="units-list-item">
                <p className="unit-type">{item.type}</p>
                <img onClick={() => handleUnitSelect(item.type)} className="unit-image" src={item.image} alt="" />
              </li>
            );
          })
        : null}
    </ul>
  );
};

export const mapStateToProps = (state: RootReducer) => {
  return {};
};

export const mapDispatchToProps = {
  setPlayerUnit,
  setWhoSelecting,
};

export default connect(mapStateToProps, mapDispatchToProps)(UnitsList);
