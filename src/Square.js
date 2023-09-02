import './Square.css';


function Square({dataPosition, handleBoxClick, board}) {

    const x = 'x';
    const oo = 'o';
    return (
      <div
        className="square"
        data-position={dataPosition}
        onClick={() => handleBoxClick(dataPosition)}
        >
          { (board[dataPosition] !== null) ? (board[dataPosition] === 1? x : oo) : ''}
      </div>
    );
  }

  export default Square;