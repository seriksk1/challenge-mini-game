import React, { FC } from 'react';
import { connect } from 'react-redux';

import { RootReducer } from '../redux/reducers/rootReducer';
import { setPlayerUnit } from '../redux/actions/player';

import { IUnit } from '../redux/interfaces';
import { UnitType } from '../redux/types';

interface Props {
  items: IUnit[];
  setPlayerUnit: (type: UnitType) => void;
}

const UnitsList: FC<Props> = ({ items, setPlayerUnit }) => {
  const handleUnitSelect = (type: UnitType) => {
    setPlayerUnit(type);
  };

  return (
    <ul className="units-list">
      {items.length !== 0
        ? items.map((item) => {
            return (
              <li key={item.id} onClick={() => handleUnitSelect(item.type)} className="units-list-item">
                <p className="unit-type">{item.type}</p>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(UnitsList);
