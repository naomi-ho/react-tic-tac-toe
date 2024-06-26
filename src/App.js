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

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    // if square is already filled or if a player has already won, return the handleClick function early
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    // create a copy of the squares array (nextSquares) with the slice() array method
    const nextSquares = squares.slice();
    // flip the value of xIsNext
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // Game component updates the Board when the user clicks a square
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <> {/* fragments are used to return a single JSX element by wrapping multiple adjacent JSX elements */}
      <div className="status">{status}</div>
      <div className="board-row">
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

// export makes the Board function accessible outside of this file
// default tells other files using the code that it's the main function in the file
export default function Game() {
  // state to track the history of moves
  // creates an array with a single item, which itself is an array of 9 nulls
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // keep track of which step the user is currently viewing
  const [currentMove, setCurrentMove] = useState(0);
  // set xIsNext to true if number currentMove being changed to is even
  const xIsNext = currentMove % 2 === 0;
  // render the currently selected move
  const currentSquares = history[currentMove];

  // this function will be called by the Board component to update the game
  function handlePlay(nextSquares) {
    // only keeps a portion of the old history
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    // each time a move is made, update currentMove to point to the latest history entry
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    // updates currentMove
    setCurrentMove(nextMove);
  }

  // squares argument goes through each element of history and move argument goes through each array index
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    // for each move in the game's history, create a list item which contains a button
    // use move index as a key since moves will never be re-ordered, deleted, or inserted in the middle
    return (
      <li key={move}> 
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        {/* pass xIsNext, currentSquares, handlePlay as props to the Board component */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}