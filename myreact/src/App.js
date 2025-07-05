import { useState } from "react";
import "./app.css";

function Square({ val, handleClick }) {
  return (
    <button className="square" onClick={handleClick}>
      {val}
    </button>
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
    console.log(squares[a], squares[b], squares[c]);

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board({ states, handleClick }) {
  return (
    <>
      <div className="row">
        <Square val={states[0]} handleClick={() => handleClick(0)}></Square>
        <Square val={states[1]} handleClick={() => handleClick(1)}></Square>
        <Square val={states[2]} handleClick={() => handleClick(2)}></Square>
      </div>
      <div className="row">
        <Square val={states[3]} handleClick={() => handleClick(3)}></Square>
        <Square val={states[4]} handleClick={() => handleClick(4)}></Square>
        <Square val={states[5]} handleClick={() => handleClick(5)}></Square>
      </div>
      <div className="row">
        <Square val={states[6]} handleClick={() => handleClick(6)}></Square>
        <Square val={states[7]} handleClick={() => handleClick(7)}></Square>
        <Square val={states[8]} handleClick={() => handleClick(8)}></Square>
      </div>
    </>
  );
}

export default function Game() {
  let [states, setStates] = useState(new Array(9).fill(null));
  let [nextState, setNextState] = useState("X");
  // let [history, setHistory] = useState(Array(9))
  let win = calculateWinner(states);
  function handleClick(i) {
    let currentMove = states;
    let statesCopy = states.slice();
    let r = calculateWinner(statesCopy);
    console.log(r);
    if (r != null) {
      alert(`${r} is win`);
    }
    if (statesCopy[i] == null && r == null) {
      statesCopy[i] = nextState;
      if (nextState == "X") {
        setNextState("O");
      } else {
        setNextState("X");
      }
      setStates(statesCopy);
      // setHistory(...history.slice())
    } else {
      console.log(statesCopy[i]);
    }
  }

  return (
    <>
      <div className="game">
        <Board states={states} handleClick={handleClick}></Board>
        <div>winer is : {win ? `${win}` : ""}</div>
        {/* <div>{history}</div> */}
      </div>
    </>
  );
}
