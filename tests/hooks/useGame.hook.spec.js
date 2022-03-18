import { act, render } from '@testing-library/react'
import * as React from 'react'
import useGame from '../../src/hooks/useGame.hook'

const createGame = marksToWin => {
  const returnVal = {}
  function TestComponent() {
    Object.assign(returnVal, useGame(marksToWin))
    return null
  }
  render(<TestComponent />)
  return returnVal
}

const playGame = (game, movements) => {
  for (const movement of movements) {
    act(() => {
      game.handleSelectPlayer(movement)
    })
  }
}

describe('useGame hook', () => {
  describe('when a game starts', () => {
    it('there is no winner', () => {
      const { winner } = createGame(3)

      expect(winner).toBeNull()
    })

    it('player 1 is the next player', () => {
      const { nextPlayer } = createGame(3)

      expect(nextPlayer).toEqual({ id: 1, mark: 'X', bgColor: '#dc685a' })
    })

    it('there are 0 marks in the board', () => {
      const { marksInBoard } = createGame(3)

      expect(marksInBoard).toEqual(0)
    })

    it('a board of n x n is created', () => {
      const { board } = createGame(3)

      expect(board).toHaveLength(9)
    })

    it('there is a function to handle when a player makes a movement', () => {
      const { handleSelectPlayer } = createGame(3)

      expect(handleSelectPlayer).toBeInstanceOf(Function)
    })

    it('there is a function to reset the game', () => {
      const { handleOnReset } = createGame(3)

      expect(handleOnReset).toBeInstanceOf(Function)
    })
  })

  it('should have a winner when all movements were done and someone won', () => {
    const game = createGame(3)

    playGame(game, [1, 3, 2, 5, 4, 6, 9, 8, 7])

    expect(game.winner).not.toBeNull()
  })
})
