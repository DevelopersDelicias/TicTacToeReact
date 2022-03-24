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

const StyledDiv = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 10px;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.4);
  color: #78bec5;
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: bold;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  text-align: center;

  &.empty:before {
    background-color: #78bec5 !important;
    color: #78bec5;
  }

  &.empty:hover {
    background-color: #3d4250 !important;
    color: rgba(215, 217, 221, 0.571) !important;
  }

  &.busy {
    color: #fff;
    cursor: not-allowed;
  }
`

const Square = ({ square: player, number, onPlay, mark, marksToWin }) => {
  const fontSize = Math.floor(293 / marksToWin)
  const isEmpty = !player

  return (
    <StyledDiv
      bgColor={player?.bgColor ?? DEFAULT_BACKGROUND_COLOR}
      fontSize={fontSize}
      className={classNames({
        empty: isEmpty,
        busy: !isEmpty,
      })}
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
