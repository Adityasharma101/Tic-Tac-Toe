import React, { useState } from "react";
import Board from "./component/Board/Board";

import "./App.css";
import ScoreBoard from "./component/ScoreBoard/ScoreBoard";
const App = () => {
  const [board, setboard] = useState(Array(9).fill(null));
  const [playing, setplaying] = useState(true);
  const [XScore, setXScore] = useState(0);
  const [OScore, setOScore] = useState(0);
  const [gameOver, setgameOver] = useState(false);
  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const onHandleClick = (id) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === id) {
        return playing === true ? "X" : "O";
      } else {
        return value;
      }
    });

    setboard(updatedBoard);
    const winner = checkWinner(updatedBoard);
    setplaying(!playing);

    if (winner === "X") {
      setXScore(XScore + 1);
      setgameOver(true);
    } else if (winner === "O") {
      setOScore(OScore + 1);
      setgameOver(true);
    }
  };

  const checkWinner = (board) => {
    for (let i = 0; i < winCondition.length; i++) {
      const [a, b, c] = winCondition[i];
      // console.log(board[a].type);

      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
  };

  const reset = () => {
    setgameOver(false);
    setboard(Array(9).fill(null));
    setplaying(true);
  };
  const restart = () => {
    setgameOver(false);
    setboard(Array(9).fill(null));
    setOScore(0);
    setXScore(0);
    setplaying(true);
  };

  return (
    <div className="app">
      <h1>TIC-TAC-TOE</h1>
      <ScoreBoard XScore={XScore} OScore={OScore} playing={playing} />
      <Board
        board={board}
        onHandleClick={gameOver === true ? reset : onHandleClick}
      />
      <div className="gameBtn"> 
        <button onClick={()=>reset()} className="Btn">reset</button>
        <button onClick={()=>restart()}className="Btn" >restart </button>
      </div>
    </div>

  );
};

export default App;
