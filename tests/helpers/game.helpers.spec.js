import {
  getCombinations,
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

  describe('getCombinations', () => {
    it('should get all possible combinations to win 3x3', () => {
      expect(getCombinations(3)).toEqual([
        [0, 1, 2], // 1st row
        [3, 4, 5], // 2nd row
        [6, 7, 8], // 3rd row
        [0, 3, 6], // 1st column
        [1, 4, 7], // 2nd column
        [2, 5, 8], // 3rd column
        [0, 4, 8], // 1st diagonal
        [2, 4, 6], // 2nd diagonal
      ])
    })

    it('should get all possible combinations to win 4x4', () => {
      expect(getCombinations(4)).toEqual([
        [0, 1, 2, 3], // 1st row
        [4, 5, 6, 7], // 2nd row
        [8, 9, 10, 11], // 3rd row
        [12, 13, 14, 15], // 4th row
        [0, 4, 8, 12], // 1st column
        [1, 5, 9, 13], // 2nd column
        [2, 6, 10, 14], // 3rd column
        [3, 7, 11, 15], // 4th column
        [0, 5, 10, 15], // 1st diagonal
        [3, 6, 9, 12], // 2nd diagonal
      ])
    })

    it('should get all possible combinations to win 5x5', () => {
      expect(getCombinations(5)).toEqual([
        [0, 1, 2, 3, 4], // 1st row
        [5, 6, 7, 8, 9], // 2nd row
        [10, 11, 12, 13, 14], // 3rd row
        [15, 16, 17, 18, 19], // 4th row
        [20, 21, 22, 23, 24], // 5th row
        [0, 5, 10, 15, 20], // 1st column
        [1, 6, 11, 16, 21], // 2nd column
        [2, 7, 12, 17, 22], // 3rd column
        [3, 8, 13, 18, 23], // 4th column
        [4, 9, 14, 19, 24], // 5th column
        [0, 6, 12, 18, 24], // 1st diagonal
        [4, 8, 12, 16, 20], // 2nd diagonal
      ])
    })
  })

  describe('getWinner', () => {
    const ___________ = null
    const _____X_____ = { id: 1, mark: 'X', bgColor: '#dc685a' }
    const _____O_____ = { id: 2, mark: 'O', bgColor: '#ecaf4f' }
    const NO_WINNER = null

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
