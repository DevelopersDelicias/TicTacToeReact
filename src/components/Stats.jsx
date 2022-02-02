import React from "react";
import PropTypes from "prop-types";

const Stats = ({ nextPlayer, winner, marksInBoard }) => {
  return (
    <div className="stats">
      <div>
        <label>Next Player: </label>
        <span>
          {nextPlayer
            ? `Player ${nextPlayer.id} (${nextPlayer.mark})`
            : "Nobody"}
        </span>
      </div>
      <div>
        <label>Number of marks: </label>
        <span>{marksInBoard}</span>
      </div>
      <div>
        <label>Winner: </label>
        <span>
          {winner ? `Player ${winner.id} (${winner.mark})` : "Nobody"}
        </span>
      </div>
    </div>
  );
};

Stats.propTypes = {
  nextPlayer: PropTypes.object,
  winner: PropTypes.object,
  marksInBoard: PropTypes.number.isRequired,
};

export default Stats;
