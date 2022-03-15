export const getPlayerMessage = (player) =>
  player ? `Player ${player.id} (${player.mark})` : "Nobody";

const array = new Array(3).fill(0);
export const combinations = [
  ...array.map((n, index) => [index * 3, index * 3 + 1, index * 3 + 2]),
  ...array.map((n, index) => [index, index + 3, index + 6]),
  ...[0, 2].map((n, index) => [n, n + 4 / (n || 1), n + 8 / (n || 1)]),
];
export const getWinner = (squares) => {
  const winner = combinations.find((c) => {
    const player = squares[c[0]];
    return c.every((number) => {
      return squares[number] !== null && squares[number].id === player.id;
    });
  });

  return winner && squares[winner[0]];
};
