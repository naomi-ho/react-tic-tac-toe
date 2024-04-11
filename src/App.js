import { useState } from "react";

function Square() {
  // value stores the value
  // setValue is a function that can be used to change the value
  // null passed to useState is used as the initial value, so value starts off equal to null
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X'); // calling this set function from an onClick handler tells React to re-render that square whenever its button is clicked
  }
  
  return (
    <button // <button> is a JSX element
      className="square" // className="square" is a button prop that tells CSS how to style the button
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

// export makes the Board function accessible outside of this file
// default tells other files using the code that it's the main function in the file
export default function Board() { 
  return (
    <> {/* fragments are used to return a single JSX element by wrapping multiple adjacent JSX elements */}
      <div className="board-row"> {/* group squares into rows to make a row */}
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}