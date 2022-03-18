import PropTypes from 'prop-types'
import React from 'react'
import Square from './Square'

const Board = ({ board: squares, onPlay, nextPlayer }) => {
  const marksToWin = Math.sqrt(squares.length)
  const style = {
    gridTemplateColumns: `repeat(${marksToWin}, auto)`,
    display: 'grid',
    gridGap: '20px',
    padding: '10px 20px',
  }
  const toSquare = (square, index) => (
    <Square
      square={square}
      number={index + 1}
      key={index + 1}
      onPlay={onPlay}
      mark={square?.mark ?? nextPlayer?.mark}
      marksToWin={marksToWin}
    />
  )
  return (
    <div className='board' style={style}>
      {squares.map(toSquare)}
    </div>
  )
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
  onPlay: PropTypes.func.isRequired,
  nextPlayer: PropTypes.object,
}

export default Board
