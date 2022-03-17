import { useEffect, useState } from 'react'
import { getWinner } from '../helpers/game.helpers'

const NO_PLAYER = null
const PLAYER_1 = { id: 1, mark: 'X', bgColor: '#dc685a' }
const PLAYER_2 = { id: 2, mark: 'O', bgColor: '#ecaf4f' }

const NUMBER_OF_POSITIONS = 9
const MINIMUM_PLACED_MARKS_TO_WIN = 5
const DEFAULT_BOARD = new Array(NUMBER_OF_POSITIONS).fill(NO_PLAYER)
const DEFAULT_PLAYER = PLAYER_1

export default function useGame() {
  const [board, setBoard] = useState(DEFAULT_BOARD)
  const [nextPlayer, setNextPlayer] = useState(PLAYER_1)
  const [winner, setWinner] = useState(NO_PLAYER)
  const marksInBoard = board.filter(s => s != NO_PLAYER).length

  useEffect(() => {
    if (marksInBoard < MINIMUM_PLACED_MARKS_TO_WIN) {
      return
    }

    if (marksInBoard === NUMBER_OF_POSITIONS) {
      alert('DRAW GAME!')
      handleOnReset()
      return
    }

    const theWinner = getWinner(board)

    if (theWinner) {
      setWinner(theWinner)
      setNextPlayer(NO_PLAYER)
    }
  }, [board])

  const handleSelectPlayer = number => {
    const selectedPlayer = board[number - 1]

    if (selectedPlayer != NO_PLAYER || winner != NO_PLAYER) {
      return
    }
    const modifiedBoard = [...board]
    modifiedBoard[number - 1] = nextPlayer

    setBoard(modifiedBoard)
    setNextPlayer(prev => (prev.id === PLAYER_1.id ? PLAYER_2 : PLAYER_1))
  }

  const handleOnReset = () => {
    setBoard(DEFAULT_BOARD)
    setWinner(NO_PLAYER)
    setNextPlayer(DEFAULT_PLAYER)
  }

  return {
    nextPlayer,
    winner,
    marksInBoard,
    board,
    handleSelectPlayer,
    handleOnReset,
  }
}