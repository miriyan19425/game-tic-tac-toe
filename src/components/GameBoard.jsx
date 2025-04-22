import { useState } from 'react';
import Button from './Button';

const emptyGameBoard = new Array(9).fill(null);

function fillGameBoard(fSqs) {
  const gameBoard = emptyGameBoard;
  for (const fSq of fSqs) { gameBoard[fSq.sqInd] = fSq.sqMark }
  return gameBoard;
}

function GameBoard() {
  const [filledSquares, setFilledSquares] = useState([]);

  const currentGameBoard = fillGameBoard(filledSquares);

  function addNewMark(ind){
    setFilledSquares( prev => [{ sqInd: ind, sqMark: prev[0]?.sqMark === 'X' ? 'O' : 'X'}, ...prev] );
  }

  return  (
    <ul>
     { currentGameBoard.map( (mark, i) => <li key={i}><Button handleOnClick={() => addNewMark(i)}>{mark}</Button></li> ) }
    </ul>   
  );
  
}

export default GameBoard;
