import React from 'react'
import useGame from '../hooks/useGame.hook'
import Board from './Board'
import Stats from './Stats'
import ToolBar from './ToolBar'

const TicTacToe = () => {
  const {
    nextPlayer,
    winner,
    marksInBoard,
    board,
    handleSelectPlayer,
    handleOnReset,
  } = useGame(3)
  return (
    <div className='tic-tac-toe'>
      <Stats
        nextPlayer={nextPlayer}
        winner={winner}
        marksInBoard={marksInBoard}
      />
      <Board
        board={board}
        onPlay={handleSelectPlayer}
        nextPlayer={nextPlayer}
      />
      <ToolBar onReset={handleOnReset} />
    </div>
  )
}

TicTacToe.propTypes = {}

export default TicTacToe
