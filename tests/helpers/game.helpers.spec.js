import { combinations, getPlayerMessage } from "../../src/helpers/game.helpers";

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

  describe("combinations", () => {
    it("should get all possible combinations to win", () => {
      expect(combinations).toEqual([
        [0, 1, 2], // first row
        [3, 4, 5], // second row
        [6, 7, 8], // third row
        [0, 3, 6], // first column
        [1, 4, 7], // second column
        [2, 5, 8], // third column
        [0, 4, 8], // first diagonal
        [2, 4, 6], // second diagonal
      ]);
    });
  });
});
