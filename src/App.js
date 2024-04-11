// this creates a component
// export makes the Square function accessible outside of this file
// default tells other files using the code that it's the main function in the file
export default function Square() { 
  return (
    <> {/* fragments are used to return a single JSX element by wrapping multiple adjacent JSX elements */}
      <div className="board-row"> {/* group squares into rows to make a grid structure */}
        <button className="square">1</button> {/* <button> is a JSX element */}
        <button className="square">2</button> {/* className="square" is a button prop that tells CSS how to style the button */}
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );

  return <button className="square">X</button>;
}
