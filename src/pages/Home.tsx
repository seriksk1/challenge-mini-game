import React from 'react';
import { useHistory } from 'react-router-dom';
import { restartGame } from '../redux/actions/game';

function Home() {
  const history = useHistory();

  const handleToGame = () => {
    history.push('/game');
  };

  React.useEffect(() => {
    restartGame();
  }, []);

  return (
    <div>
      <button onClick={handleToGame}>Start game</button>
    </div>
  );
}

export default Home;
