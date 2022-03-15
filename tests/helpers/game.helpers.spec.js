import { getPlayerMessage } from "../../src/helpers/game.helpers";

describe("Game Helpers", () => {
  describe("getPlayerMessage", () => {
    it("should display Nobody if player is null", () => {
      const player = null;

      const message = getPlayerMessage(player);

      expect(message).toEqual("Nobody");
    });

    it("should display player 1 information", () => {
      const player = { id: 1, mark: "X", bgColor: "#dc685a" };

      const message = getPlayerMessage(player);

      expect(message).toEqual("Player 1 (X)");
    });

    it("should display player 2 information", () => {
      const player = { id: 2, mark: "O", bgColor: "#ecaf4f" };

      const message = getPlayerMessage(player);

      expect(message).toEqual("Player 2 (O)");
    });
  });
});
