import React from "react";
import PropTypes from "prop-types";

const Section = ({ label, message }) => {
  return (
    <div>
      <label>{label}</label>
      <span>{message}</span>
    </div>
  );
};

Section.propTypes = {
  label: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

const Stats = ({ nextPlayer, winner, marksInBoard }) => {
  return (
    <div className="stats">
      <Section
        label="Next Player: "
        message={
          nextPlayer ? `Player ${nextPlayer.id} (${nextPlayer.mark})` : "Nobody"
        }
      />
      <Section label="Number of marks: " message={marksInBoard} />
      <Section
        label="Winner: "
        message={winner ? `Player ${winner.id} (${winner.mark})` : "Nobody"}
      />
    </div>
  );
};

Stats.propTypes = {
  nextPlayer: PropTypes.object,
  winner: PropTypes.object,
  marksInBoard: PropTypes.number.isRequired,
};

export default Stats;
