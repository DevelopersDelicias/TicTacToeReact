import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import { getPlayerMessage } from "../helpers/game.helpers";

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
