export const getPlayerMessage = (player) =>
  player ? `Player ${player.id} (${player.mark})` : "Nobody";
