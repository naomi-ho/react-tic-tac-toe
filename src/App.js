import { useState } from "react";

function Square({value, onSquareClick}) {
  return (
    <button // <button> is a JSX element
      className="square" // className="square" is a button prop that tells CSS how to style the button
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

// export makes the Board function accessible outside of this file
// default tells other files using the code that it's the main function in the file
export default function Board() {
  // Array(9).fill(null) creates an array with 9 elements and sets each of them to null
  const [squares, setSquares] = useState(Array(9).fill(null)); 

  function handleClick(i) {
    // create a copy of the squares array (nextSquares) with the slice() array method
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    // calling setSquares lets React know the component's state has changed
    // this triggers a re-render of the components that use the squares state (Board) as well as its child components (Square)
    setSquares(nextSquares);
  }

  return (
    <> {/* fragments are used to return a single JSX element by wrapping multiple adjacent JSX elements */}
      <div className="board-row"> {/* group squares into rows to make a row */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}