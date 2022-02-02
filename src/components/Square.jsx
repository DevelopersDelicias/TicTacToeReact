import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Square = ({ square: player, number, onPlay, nextPlayer }) => {
  const style = {
    backgroundColor: player?.bgColor ?? "#78bec5",
  };

  return (
    <div
      className={classNames({
        square: true,
        empty: !player,
        [`player-${player?.id ?? "empty"}`]: true,
      })}
      style={style}
      onClick={() => {
        onPlay(number);
      }}
    >
      <span>{player?.mark ?? nextPlayer.mark}</span>
    </div>
  );
};

Square.propTypes = {
  square: PropTypes.object,
  number: PropTypes.number.isRequired,
  onPlay: PropTypes.func.isRequired,
  nextPlayer: PropTypes.object.isRequired,
};

export default Square;
