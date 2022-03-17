const NO_WINNER = null

export const getPlayerMessage = player =>
  player ? `Player ${player.id} (${player.mark})` : 'Nobody'

const byRow = () => {
  const rows = []
  for (let i = 0; i < 3; i++) {
    const pos = i * 3
    rows.push([pos, pos + 1, pos + 2])
  }
  return rows
}

const byColumn = () => {
  const columns = []
  for (let i = 0; i < 3; i++) {
    columns.push([i, i + 3, i + 6])
  }
  return columns
}

export const getCombinations = () => [
  ...byRow(),
  ...byColumn(),
  [0, 4, 8], // first diagonal
  [2, 4, 6], // second diagonal
]

export const getWinner = board => {
  const toPlayer = position => board[position]
  for (const combination of getCombinations()) {
    const players = [...new Set(combination.map(toPlayer))]
    if (players.length === 1) {
      return players[0]
    }
  }
  return NO_WINNER
}
