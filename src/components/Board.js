import React, { useState } from "react";
import Tile from "./Tile";
import Cell from "./Cell";
import { Board } from "../helper";
import useEvent from "../hooks/useEvent";
import GameOverlay from "./GameOverlay";
import './App.css';


const BoardView = () => {
  const [board, setBoard] = useState(new Board());

  const handleKeyDown = (event) => {
    if (board.hasWon()) {
      return;
    }

    if (event.keyCode >= 37 && event.keyCode <= 40) {
      let direction = event.keyCode - 37;
      let boardClone = Object.assign(
        Object.create(Object.getPrototypeOf(board)),
        board
      );
      let newBoard = boardClone.move(direction);
      setBoard(newBoard);
    }
  };

  useEvent("keydown", handleKeyDown);

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div key={rowIndex}>
        {row.map((col, colIndex) => {
          return <Cell key={rowIndex * board.size + colIndex} />;
        })}
      </div>
    );
  });

  const tiles = board.tiles
    .filter((tile) => tile.value !== 0)
    .map((tile, index) => {
      return <Tile tile={tile} key={index} />;
    });

  const resetGame = () => {
    setBoard(new Board());
  };

// Virtual buttons added   -------------------------------------------------
// button up  
function Moveup(){
  if (board.hasWon()) {
    return;
  }
else{
  let direction = 1;
  let boardClone = Object.assign(
    Object.create(Object.getPrototypeOf(board)),
    board
  );
  let newBoard = boardClone.move(direction);
  setBoard(newBoard);
}   
}
//-------

// button right  
function Moveright(){
    if (board.hasWon()) {
      return;
    }
  else{
    let direction = 2;
    let boardClone = Object.assign(
      Object.create(Object.getPrototypeOf(board)),
      board
    );
    let newBoard = boardClone.move(direction);
    setBoard(newBoard);
  }   
  }
//-------
// button dowm  
function Movedown(){
  if (board.hasWon()) {
    return;
  }
else{
  let direction = 3;
  let boardClone = Object.assign(
    Object.create(Object.getPrototypeOf(board)),
    board
  );
  let newBoard = boardClone.move(direction);
  setBoard(newBoard);
}   
}
//-------

//button left
  function Moveleft(){
    if (board.hasWon()) {
      return;
    }
  else{
    let direction = 4;
    let boardClone = Object.assign(
      Object.create(Object.getPrototypeOf(board)),
      board
    );
    let newBoard = boardClone.move(direction);
    setBoard(newBoard);
  }   
  }
//-------
//-------- buttons -----

  return (
    <div>
        <div className="header"> Use arrow keys to play the Game.  Alternatively use the buttons provided below. </div>
      
      <div className="details-box">
        <div className="resetButton" onClick={resetGame}>
          new game
        </div>
        <div className="score-box">
          <div className="score-header">SCORE</div>
          <div>{board.score}</div>
        </div>
      </div>
      <div className="board">
        {cells}
        {tiles}
        <GameOverlay onRestart={resetGame} board={board} />
      </div>
        
        <div className="btnbar">
        <div className="movebutton" onClick={Moveleft} > LEFT</div>
        <div className="movebutton" onClick={Movedown} > DOWN</div>
        <div className="movebutton" onClick={Moveup} > UP</div>
        <div className="movebutton" onClick={Moveright} > RIGHT</div>
        </div>
        <div className="header"> This is a clone of popular 2048 game made by <a href="http://www.ruthvik.ml">Ruthvik</a> </div>

        
    </div>
  );


};

export default BoardView;
