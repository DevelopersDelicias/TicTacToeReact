import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

const Board = ({ board: squares, onPlay, nextPlayer }) => {
  const toSquare = (square, index) => (
    <Square
      square={square}
      number={index + 1}
      key={index + 1}
      onPlay={onPlay}
      mark={square?.mark ?? nextPlayer?.mark}
    />
  );
  return <div className="board">{squares.map(toSquare)}</div>;
};

Board.propTypes = {
  board: PropTypes.array.isRequired,
  onPlay: PropTypes.func.isRequired,
  nextPlayer: PropTypes.object,
};

export default Board;
