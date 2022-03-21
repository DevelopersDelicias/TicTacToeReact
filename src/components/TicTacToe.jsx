import React from 'react'
import useGame from '../hooks/useGame.hook'
import Board from './Board'
import Stats from './Stats'
import ToolBar from './ToolBar'

const TicTacToe = () => {
  const { nextPlayer, winner, marksInBoard, board, select, reset } = useGame(3)
  return (
    <div className='tic-tac-toe'>
      <Stats
        nextPlayer={nextPlayer}
        winner={winner}
        marksInBoard={marksInBoard}
      />
      <Board board={board} onPlay={select} nextPlayer={nextPlayer} />
      <ToolBar onReset={reset} />
    </div>
  )
}

TicTacToe.propTypes = {}

export default TicTacToe
