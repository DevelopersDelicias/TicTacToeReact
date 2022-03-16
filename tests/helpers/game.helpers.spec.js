import {
  combinations,
  getPlayerMessage,
  getWinner,
} from '../../src/helpers/game.helpers'

describe('Game Helpers', () => {
  describe('getPlayerMessage', () => {
    it('should display Nobody if player is null', () => {
      const player = null

      const message = getPlayerMessage(player)

      expect(message).toEqual('Nobody')
    })

    it('should display player 1 information', () => {
      const player = { id: 1, mark: 'X', bgColor: '#dc685a' }

      const message = getPlayerMessage(player)

      expect(message).toEqual('Player 1 (X)')
    })

    it('should display player 2 information', () => {
      const player = { id: 2, mark: 'O', bgColor: '#ecaf4f' }

      const message = getPlayerMessage(player)

      expect(message).toEqual('Player 2 (O)')
    })
  })

  describe('combinations', () => {
    it('should get all possible combinations to win', () => {
      expect(combinations).toEqual([
        [0, 1, 2], // first row
        [3, 4, 5], // second row
        [6, 7, 8], // third row
        [0, 3, 6], // first column
        [1, 4, 7], // second column
        [2, 5, 8], // third column
        [0, 4, 8], // first diagonal
        [2, 4, 6], // second diagonal
      ])
    })
  })

  describe('getWinner', () => {
    const ___________ = null
    const _____X_____ = { id: 1, mark: 'X', bgColor: '#dc685a' }
    const _____O_____ = { id: 2, mark: 'O', bgColor: '#ecaf4f' }
    const NO_WINNER = undefined

    it('should return no winner if the board has no winner', () => {
      const board = [
        ...[_____X_____, _____O_____, _____X_____],
        ...[___________, ___________, ___________],
        ...[_____O_____, _____X_____, ___________],
      ]

      const winner = getWinner(board)

      expect(winner).toEqual(NO_WINNER)
    })

    it('should return no winner if the board has only empty positions', () => {
      const board = [
        ...[___________, ___________, ___________],
        ...[___________, ___________, ___________],
        ...[___________, ___________, ___________],
      ]

      const winner = getWinner(board)

      expect(winner).toEqual(NO_WINNER)
    })

    it('should return Player 1 as winner when the first row is completed', () => {
      const board = [
        ...[_____X_____, _____X_____, _____X_____],
        ...[___________, ___________, _____O_____],
        ...[_____O_____, _____X_____, _____O_____],
      ]

      const winner = getWinner(board)

      expect(winner).toEqual(_____X_____)
    })

    it('should return Player 2 as winner when the second row is completed', () => {
      const board = [
        ...[_____X_____, _____X_____, _____O_____],
        ...[_____O_____, _____O_____, _____O_____],
        ...[_____X_____, _____X_____, ___________],
      ]

      const winner = getWinner(board)

      expect(winner).toEqual(_____O_____)
    })

    it('should return Player 1 as winner when the third row is completed', () => {
      const board = [
        ...[_____X_____, ___________, _____O_____],
        ...[___________, _____O_____, _____O_____],
        ...[_____X_____, _____X_____, _____X_____],
      ]

      const winner = getWinner(board)

      expect(winner).toEqual(_____X_____)
    })

    it('should return Player 2 as winner when the first column is completed', () => {
      const board = [
        ...[_____O_____, ___________, _____O_____],
        ...[_____O_____, _____X_____, _____X_____],
        ...[_____O_____, _____X_____, _____X_____],
      ]

      const winner = getWinner(board)

      expect(winner).toEqual(_____O_____)
    })

    it('should return Player 1 as winner when the second column is completed', () => {
      const board = [
        ...[_____O_____, _____X_____, _____O_____],
        ...[_____O_____, _____X_____, ___________],
        ...[_____X_____, _____X_____, ___________],
      ]

      const winner = getWinner(board)

      expect(winner).toEqual(_____X_____)
    })

    it('should return Player 2 as winner when the third column is completed', () => {
      const board = [
        ...[_____X_____, _____X_____, _____O_____],
        ...[___________, _____X_____, _____O_____],
        ...[_____X_____, ___________, _____O_____],
      ]

      const winner = getWinner(board)

      expect(winner).toEqual(_____O_____)
    })

    it('should return Player 1 as winner when the first diagonal is completed', () => {
      const board = [
        ...[_____X_____, _____X_____, _____O_____],
        ...[___________, _____X_____, _____O_____],
        ...[_____O_____, ___________, _____X_____],
      ]

      const winner = getWinner(board)

      expect(winner).toEqual(_____X_____)
    })

    it('should return Player 2 as winner when the second diagonal is completed', () => {
      const board = [
        ...[_____X_____, _____X_____, _____O_____],
        ...[___________, _____O_____, _____O_____],
        ...[_____O_____, _____X_____, _____X_____],
      ]

      const winner = getWinner(board)

      expect(winner).toEqual(_____O_____)
    })
  })
})
