import React, { FC } from 'react';
import { connect } from 'react-redux';

import { RootReducer } from '../redux/reducers/rootReducer';
import { getComputerScore, getPlayerScore, isGameStarted } from '../redux/selectors';

import gameEngine from '../redux/services/gameEngine';

interface Props {
  playerScore: number;
  computerScore: number;
  started: boolean;
}

const Score: FC<Props> = ({ playerScore, computerScore, started }) => {
  return (
    <>
      <div className="score">
        <p>Player</p>
        <h1>
          {playerScore}:{computerScore}
        </h1>
        <p>Computer</p>
      </div>
      {!started ? (
        <div className="game-winner">Winner: {gameEngine.checkGameWinner(playerScore, computerScore)}</div>
      ) : null}
    </>
  );
};

export const mapStateToProps = (state: RootReducer) => {
  return {
    started: isGameStarted(state),
    computerScore: getComputerScore(state),
    playerScore: getPlayerScore(state),
  };
};

export const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Score);
