const NO_WINNER = null

export const getPlayerMessage = player =>
  player ? `Player ${player.id} (${player.mark})` : 'Nobody'

const byRow = marksToWin =>
  arrayOfLength(marksToWin).map((_val, rowIndex) =>
    arrayOfLength(marksToWin).map(
      (_value, columnIndex) => rowIndex * marksToWin + columnIndex,
    ),
  )

const byColumn = marksToWin =>
  arrayOfLength(marksToWin).map((_val, columnIndex) =>
    arrayOfLength(marksToWin).map(
      (_value, rowIndex) => rowIndex * marksToWin + columnIndex,
    ),
  )

const arrayOfLength = length => Array(length).fill(null)

const firstDiagonal = marksToWin => {
  return arrayOfLength(marksToWin).map(
    (_value, index) => marksToWin * index + index,
  )
}

const secondDiagonal = marksToWin => {
  const multiplier = marksToWin - 1
  return arrayOfLength(marksToWin).map(
    (_value, index) => multiplier * (index + 1),
  )
}

export const getCombinations = marksToWin => [
  ...byRow(marksToWin),
  ...byColumn(marksToWin),
  firstDiagonal(marksToWin),
  secondDiagonal(marksToWin),
]

export const getWinner = board => {
  const toPlayer = position => board[position]
  const marksToWin = Math.sqrt(board.length)
  for (const combination of getCombinations(marksToWin)) {
    const players = [...new Set(combination.map(toPlayer))]
    const player = players[0]
    if (players.length === 1 && player !== null) {
      return player
    }
  }
  return NO_WINNER
}
