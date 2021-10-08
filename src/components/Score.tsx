import React, { FC } from 'react';
import { connect } from 'react-redux';

import { RootReducer } from '../redux/reducers/rootReducer';
import { getComputerScore, getGameRounds, getPlayerScore, isGameStarted } from '../redux/selectors';

import gameEngine from '../redux/services/gameEngine';

interface Props {
  playerScore: number;
  computerScore: number;
  started: boolean;
  gameRounds: number;
}

const Score: FC<Props> = ({ started, playerScore, computerScore, gameRounds }) => {
  return (
    <>
      <h1 className="rounds">Round {gameRounds}</h1>
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
    gameRounds: getGameRounds(state),
  };
};

export const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Score);
