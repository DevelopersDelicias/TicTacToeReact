import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

const Board = ({ board: squares, onPlay, nextPlayer }) => {
  return (
    <div className="board">
      {console.log("next player",nextPlayer)}
      {squares.map((square, index) => (
        <Square
          square={square}
          number={index + 1}
          key={index + 1}
          onPlay={onPlay}
          nextPlayer={nextPlayer}
        />
      ))}
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.array.isRequired,
  onPlay: PropTypes.func.isRequired,
  nextPlayer: PropTypes.object.isRequired,
};

export default Board;
