import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  const handleStartGame = () => {
    history.push('/game');
  };

  return (
    <div>
      <button onClick={handleStartGame}>Start game</button>
    </div>
  );
}

export default Home;
