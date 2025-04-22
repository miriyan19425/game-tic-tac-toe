import Button from './Button';

const emptyGameBoard = new Array(9).fill(null);

function GameBoard() {

  return  (
    <ul>
     { emptyGameBoard.map( (_, i) => <li key={i}><Button /></li> ) }
    </ul>   
  );
  
}

export default GameBoard;
