import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const DEFAULT_BACKGROUND_COLOR = '#78bec5'

const Square = ({ square: player, number, onPlay, mark }) => {
  const style = {
    backgroundColor: player?.bgColor ?? DEFAULT_BACKGROUND_COLOR,
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
      <span>{mark}</span>
    </div>
  )
}

Square.propTypes = {
  square: PropTypes.object,
  number: PropTypes.number.isRequired,
  onPlay: PropTypes.func.isRequired,
  mark: PropTypes.string,
}

export default Square
