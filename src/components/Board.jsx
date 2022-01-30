import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

const Board = ({ board: squares, onPlay }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square
          square={square}
          number={index + 1}
          key={index + 1}
          onPlay={onPlay}
        />
      ))}
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.array.isRequired,
  onPlay: PropTypes.func.isRequired,
};

export default Board;
