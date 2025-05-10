import Button from './Button';

const emptyGameBoard = new Array(9).fill(null);
const winCombs = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

function fillGameBoard(fSqs) {
  const gameBoard = [...emptyGameBoard];
  for (const fSq of fSqs) { gameBoard[fSq.sqInd] = fSq.sqMark; }
  return gameBoard;
}

function checkWinner(board) {
  let winner;
  for (const winComb of winCombs) {
    if (board[winComb[0]] && board[winComb[0]] === board[winComb[1]] && board[winComb[1]] === board[winComb[2]] ) { winner = winComb; }
  }
  return winner;
}

function GameBoard({filledSquares, addNewMark}) {
  const currentGameBoard = fillGameBoard(filledSquares);
  const winIndexes = checkWinner(currentGameBoard);
  return  (
    <ul>
     { currentGameBoard.map( (mark, i) => <li key={i}><Button handleOnClick={() => addNewMark(i)} winIndxComb={winIndexes} indx={i}>{mark}</Button></li> ) }
    </ul>   
  );
  
}

export default GameBoard;
