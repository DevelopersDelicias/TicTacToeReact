import React from 'react'
import styled from 'styled-components'
import useGame from '../hooks/useGame.hook'
import Board from './Board'
import Stats from './Stats'
import ToolBar from './ToolBar'

const StyledDiv = styled.div`
  width: 500px;
  margin: 20px auto;
  border: 3px solid #eee;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
`

const TicTacToe = () => {
  const { nextPlayer, winner, marksInBoard, board, select, reset } = useGame(3)
  return (
    <StyledDiv>
      <Stats
        nextPlayer={nextPlayer}
        winner={winner}
        marksInBoard={marksInBoard}
      />
      <Board board={board} onPlay={select} nextPlayer={nextPlayer} />
      <ToolBar onReset={reset} />
    </StyledDiv>
  )
}

TicTacToe.propTypes = {}

export default TicTacToe
