import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { getPlayerMessage } from '../helpers/game.helpers'
import Section from './Section'

const StyledDiv = styled.div`
  padding-top: 10px;
`

const Stats = ({ nextPlayer, winner, marksInBoard }) => {
  return (
    <StyledDiv>
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
    </StyledDiv>
  )
}

Stats.propTypes = {
  nextPlayer: PropTypes.object,
  winner: PropTypes.object,
  marksInBoard: PropTypes.number.isRequired,
}

export default Stats
