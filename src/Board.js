import { useState, useEffect } from 'react';
import Square from './Square';
import './Board.css';


function Board() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xoro, setxoro] = useState(1)
  const [winner, setWinner] = useState(null);

  const handleBoxClick = (position) => {

      if(board[position] !== null) {
        return
      }
      let copyBoard = [...board];
      
      copyBoard[position] = xoro;
      setxoro(xoro === 1 ? -1 : 1);
      setBoard(copyBoard);
  }

  const checkWinner = () => {

    for(let i=0; i<3; i++){
      if(board[i] !== null){
        
        if((i+3)<9 && (i+6)<9 && board[i+3] === board[i] && board[i+6] === board[i]){
          return board[i];
        }
      }
    }

    for(let i=0; i<7; i=i+3){
      if(board[i] !== null){
        
        if((i+1)<9 && (i+2)<9 && board[i+1] === board[i] && board[i+2] === board[i]){
          return board[i];
        }
      }
    }

    if(board[0] === board[4] && board[0] === board[8]){
      return board[0];
    }

    if(board[2] === board[4] && board[2] === board[6]){
      return board[2];
    }

    return null;
  }

  useEffect(() => {
    setWinner(checkWinner())
  }, board)

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setxoro(1);
    setWinner(null);
  }

  return (
    <div className="gameBoard">
      {/* <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{xoro === 1 ? 'x' : 'o'}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{winner === null ? 'None' : (winner === 1 ? 'x' : 'o')}</span></div> */}
      <div id="statusArea"  className='instructionsStyle'>Next player: <span>{xoro === 1 ? 'x' : 'o'}</span></div>
      <div id="winnerArea"  className='instructionsStyle'>Winner: <span>{winner === null ? 'None' : (winner === 1 ? 'x' : 'o')}</span></div>
      <button onClick={handleReset}>Reset</button>
      <div className='board'>
        <div className="board-row">
          <Square dataPosition={0} handleBoxClick={handleBoxClick} board={board}/>
          <Square dataPosition={1} handleBoxClick={handleBoxClick} board={board}/>
          <Square dataPosition={2} handleBoxClick={handleBoxClick} board={board}/>
        </div>
        <div className="board-row">
          <Square dataPosition={3} handleBoxClick={handleBoxClick} board={board}/>
          <Square dataPosition={4} handleBoxClick={handleBoxClick} board={board}/>
          <Square dataPosition={5} handleBoxClick={handleBoxClick} board={board}/>
        </div>
        <div className="board-row">
          <Square dataPosition={6} handleBoxClick={handleBoxClick} board={board}/>
          <Square dataPosition={7} handleBoxClick={handleBoxClick} board={board}/>
          <Square dataPosition={8} handleBoxClick={handleBoxClick} board={board}/>
        </div>
      </div>
    </div>
  );
}

export default Board;