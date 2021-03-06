import { act, render } from '@testing-library/react'
import * as React from 'react'
import useGame from '../../src/hooks/useGame.hook'

const helpers = require('../../src/helpers/game.helpers')

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
      game.select(movement)
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
      const { select } = createGame(3)

      expect(select).toBeInstanceOf(Function)
    })

    it('there is a function to reset the game', () => {
      const { reset } = createGame(3)

      expect(reset).toBeInstanceOf(Function)
    })
  })

  it('should change next player after select a movement', () => {
    const game = createGame(3)

    playGame(game, [1])

    expect(game.nextPlayer).toEqual({ id: 2, mark: 'O', bgColor: '#ecaf4f' })

    playGame(game, [2])

    expect(game.nextPlayer).toEqual({ id: 1, mark: 'X', bgColor: '#dc685a' })
  })

  it('should have a winner when all movements were done and someone won', () => {
    const game = createGame(3)

    playGame(game, [1, 3, 2, 5, 4, 6, 9, 8, 7])

    expect(game.winner).not.toBeNull()
  })

  it('should not try to continue a game if there is a winner before all movements were done', () => {
    const mock = jest.spyOn(helpers, 'getWinner')
    const game = createGame(3)

    playGame(game, [1, 4, 2, 7, 3, 5])

    expect(mock).toHaveBeenCalledTimes(1)
    mock.mockRestore()
  })

  it('should not change the mark when the position is already taken', () => {
    const game = createGame(3)

    playGame(game, [1, 2, 1])

    expect(game.marksInBoard).toEqual(2)
  })

  it('should not change the next player when the position was already taken', () => {
    const game = createGame(3)

    playGame(game, [1, 2, 1])

    expect(game.nextPlayer).toEqual({ id: 1, mark: 'X', bgColor: '#dc685a' })
  })

  it('should not try to get a winner when at least 5 positions are placed', () => {
    const mock = jest.spyOn(helpers, 'getWinner')
    const game = createGame(3)

    playGame(game, [1, 2, 3, 4])

    expect(mock).not.toHaveBeenCalled()
    mock.mockRestore()
  })

  it('should try to get a winner when 5 positions are placed', () => {
    const mock = jest.spyOn(helpers, 'getWinner')
    const game = createGame(3)

    playGame(game, [1, 2, 3, 4, 5])

    expect(mock).toHaveBeenCalledTimes(1)
    mock.mockRestore()
  })

  describe('when game is reset', () => {
    let game = null

    beforeEach(() => {
      game = createGame(3)

      playGame(game, [1, 3, 2, 5, 4, 6, 9, 8, 7])

      act(() => game.reset())
    })

    it('should set the marks in board to 0', () => {
      expect(game.marksInBoard).toEqual(0)
    })

    it('should set the winner to null', () => {
      expect(game.winner).toBeNull()
    })

    it('should set the next player to the player 1', () => {
      expect(game.nextPlayer).toEqual({ id: 1, mark: 'X', bgColor: '#dc685a' })
    })
  })

  describe('when game is drawn', () => {
    let game = null

    beforeEach(() => {
      jest.spyOn(window, 'alert').mockImplementation(() => {})
      game = createGame(3)
      playGame(game, [1, 5, 4, 7, 3, 2, 8, 9, 6])
    })

    it('an alert is displayed', () => {
      expect(window.alert).toHaveBeenNthCalledWith(1, 'DRAW GAME!')
    })

    it('should set the marks in board to 0', () => {
      expect(game.marksInBoard).toEqual(0)
    })

    it('should set the winner to null', () => {
      expect(game.winner).toBeNull()
    })

    it('should set the next player to the player 1', () => {
      expect(game.nextPlayer).toEqual({ id: 1, mark: 'X', bgColor: '#dc685a' })
    })
  })
})
