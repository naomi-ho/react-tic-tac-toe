// use props to pass the value each square should have from the parent component (Board) to its child (Square)
function Square({ value }) {
  // <button> is a JSX element
  // className="square" is a button prop that tells CSS how to style the button
  return <button className="square">{value}</button>; // escape into JS from JSX using curly braces to get an empty board and not get 'value' text
}

// export makes the Board function accessible outside of this file
// default tells other files using the code that it's the main function in the file
export default function Board() { 
  return (
    <> {/* fragments are used to return a single JSX element by wrapping multiple adjacent JSX elements */}
      <div className="board-row"> {/* group squares into rows to make a row */}
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}