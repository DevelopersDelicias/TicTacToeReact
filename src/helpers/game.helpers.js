const NO_WINNER = null

export const getPlayerMessage = player =>
  player ? `Player ${player.id} (${player.mark})` : 'Nobody'

const byRow = marksToWin => {
  const rows = []
  for (let i = 0; i < marksToWin; i++) {
    const pos = i * marksToWin
    const array = []
    for (let j = 0; j < marksToWin; j++) {
      array.push(pos + j)
    }
    rows.push(array)
  }
  return rows
}

const byColumn = marksToWin => {
  const columns = []
  for (let i = 0; i < marksToWin; i++) {
    const array = []
    for (let j = 0; j < marksToWin; j++) {
      array.push(i + marksToWin * j)
    }
    columns.push(array)
  }
  return columns
}

const firstDiagonal = marksToWin => {
  const array = []
  for (let i = 0; i < marksToWin; i++) {
    array.push(marksToWin * i + i)
  }
  return array
}

const secondDiagonal = marksToWin => {
  const array = []
  const multiplier = marksToWin - 1
  for (let i = 1; i <= marksToWin; i++) {
    array.push(multiplier * i)
  }
  return array
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
    if (players.length === 1) {
      return players[0]
    }
  }
  return NO_WINNER
}
