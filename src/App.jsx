import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Button from './components/Button';

function App() {
  const [filledSquares, setFilledSquares] = useState([]);

  function addNewMark(ind){
    setFilledSquares( prev => [{ sqInd: ind, sqMark: prev[0]?.sqMark === 'X' ? 'O' : 'X'}, ...prev] );
  }

  function startNewGame(){
    setFilledSquares([]);
  }

  return (
    <>
      <GameBoard filledSquares={filledSquares} addNewMark={addNewMark}/>
      <Button handleOnClick={startNewGame}>New Game</Button>
    </>
  );
} 

export default App;
