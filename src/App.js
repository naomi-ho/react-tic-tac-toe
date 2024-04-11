// this creates a component
// export makes the Square function accessible outside of this file
// default tells other files using the code that it's the main function in the file
export default function Square() { 
  // <button> is a JSX element
  // className="square" is a button property/prop that tells CSS how to style the button
  return <button className="square">X</button>;
}
