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

const StyledDiv = styled.span`
  height: 0;
  padding-bottom: 100%;
  border-radius: 10px;
  background-color: #78bec5;
  color: #78bec5;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.4);
  position: relative;

  &.empty:before {
    background-color: #78bec5 !important;
    color: #78bec5;
  }

  &.empty:hover {
    background-color: #3d4250 !important;
    color: rgba(215, 217, 221, 0.571) !important;
  }

  &.player-1 {
    cursor: not-allowed;
    color: #fff;
  }

  &.player-2 {
    cursor: not-allowed;
    color: #fff;
  }
`

const Square = ({ square: player, number, onPlay, mark, marksToWin }) => {
  const style = {
    backgroundColor: player?.bgColor ?? DEFAULT_BACKGROUND_COLOR,
    fontSize: Math.floor(293 / marksToWin),
  }

  const playerClassName = `player-${player?.id ?? 'empty'}`

  return (
    <StyledDiv
      className={classNames(playerClassName, {
        empty: !player,
      })}
      style={style}
      onClick={() => {
        onPlay(number)
      }}
    >
      <StyledMark>{mark}</StyledMark>
    </StyledDiv>
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
