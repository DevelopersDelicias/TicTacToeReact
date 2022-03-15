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
  message: PropTypes.any.isRequired,
};

const getPlayerMessage = (player) =>
  player ? `Player ${player.id} (${player.mark})` : "Nobody";

const Stats = ({ nextPlayer, winner, marksInBoard }) => {
  return (
    <div className="stats">
      <Section label="Next Player:" message={getPlayerMessage(nextPlayer)} />
      <Section label="Number of marks:" message={marksInBoard} />
      <Section label="Winner:" message={getPlayerMessage(winner)} />
    </div>
  );
};

Stats.propTypes = {
  nextPlayer: PropTypes.object,
  winner: PropTypes.object,
  marksInBoard: PropTypes.number.isRequired,
};

export default Stats;
