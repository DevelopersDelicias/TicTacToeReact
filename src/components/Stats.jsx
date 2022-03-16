import PropTypes from 'prop-types'
import React from 'react'
import { getPlayerMessage } from '../helpers/game.helpers'
import Section from './Section'

const Stats = ({ nextPlayer, winner, marksInBoard }) => {
  return (
    <div className='stats'>
      <Section
        id='nextPlayer'
        label='Next Player:'
        message={getPlayerMessage(nextPlayer)}
      />
      <Section
        id='numberOfMarks'
        label='Number of marks:'
        message={marksInBoard}
      />
      <Section id='winner' label='Winner:' message={getPlayerMessage(winner)} />
    </div>
  )
}

Stats.propTypes = {
  nextPlayer: PropTypes.object,
  winner: PropTypes.object,
  marksInBoard: PropTypes.number.isRequired,
}

export default Stats
