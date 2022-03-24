import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const DEFAULT_BACKGROUND_COLOR = '#78bec5'

const StyledMark = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`

const Square = ({ square: player, number, onPlay, mark, marksToWin }) => {
  const style = {
    backgroundColor: player?.bgColor ?? DEFAULT_BACKGROUND_COLOR,
    fontSize: Math.floor(293 / marksToWin),
  }

  const playerClassName = `player-${player?.id ?? 'empty'}`

  return (
    <div
      className={classNames('square', playerClassName, {
        empty: !player,
      })}
      style={style}
      onClick={() => {
        onPlay(number)
      }}
    >
      <StyledMark>{mark}</StyledMark>
    </div>
  )
}

Square.propTypes = {
  square: PropTypes.object,
  number: PropTypes.number.isRequired,
  onPlay: PropTypes.func.isRequired,
  mark: PropTypes.string,
  marksToWin: PropTypes.number,
}

export default Square
