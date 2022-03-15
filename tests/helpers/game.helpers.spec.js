import {
  combinations,
  getPlayerMessage,
  getWinner,
} from "../../src/helpers/game.helpers";

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

  describe("getWinner", () => {
    const EMPTY = null;
    const PLAYER_1 = { id: 1, mark: "X", bgColor: "#dc685a" };
    const PLAYER_2 = { id: 2, mark: "O", bgColor: "#ecaf4f" };
    const NO_WINNER = undefined;

    it("should return no winner if the board has no winner", () => {
      const board = [
        ...[PLAYER_1, PLAYER_2, PLAYER_1],
        ...[EMPTY, EMPTY, EMPTY],
        ...[PLAYER_2, PLAYER_1, EMPTY],
      ];

      const winner = getWinner(board);

      expect(winner).toEqual(NO_WINNER);
    });

    it("should return no winner if the board has only empty positions", () => {
      const board = [
        ...[EMPTY, EMPTY, EMPTY],
        ...[EMPTY, EMPTY, EMPTY],
        ...[EMPTY, EMPTY, EMPTY],
      ];

      const winner = getWinner(board);

      expect(winner).toEqual(NO_WINNER);
    });

    it("should return Player 1 as winner when the first row is completed", () => {
      const board = [
        ...[PLAYER_1, PLAYER_1, PLAYER_1],
        ...[EMPTY, EMPTY, PLAYER_2],
        ...[PLAYER_2, PLAYER_1, PLAYER_2],
      ];

      const winner = getWinner(board);

      expect(winner).toEqual(PLAYER_1);
    });

    it("should return Player 2 as winner when the second row is completed", () => {
      const board = [
        ...[PLAYER_1, PLAYER_1, PLAYER_2],
        ...[PLAYER_2, PLAYER_2, PLAYER_2],
        ...[PLAYER_1, PLAYER_1, EMPTY],
      ];

      const winner = getWinner(board);

      expect(winner).toEqual(PLAYER_2);
    });

    it("should return Player 1 as winner when the third row is completed", () => {
      const board = [
        ...[PLAYER_1, EMPTY, PLAYER_2],
        ...[EMPTY, PLAYER_2, PLAYER_2],
        ...[PLAYER_1, PLAYER_1, PLAYER_1],
      ];

      const winner = getWinner(board);

      expect(winner).toEqual(PLAYER_1);
    });

    it("should return Player 2 as winner when the first column is completed", () => {
      const board = [
        ...[PLAYER_2, EMPTY, PLAYER_2],
        ...[PLAYER_2, PLAYER_1, PLAYER_1],
        ...[PLAYER_2, PLAYER_1, PLAYER_1],
      ];

      const winner = getWinner(board);

      expect(winner).toEqual(PLAYER_2);
    });

    it("should return Player 1 as winner when the second column is completed", () => {
      const board = [
        ...[PLAYER_2, PLAYER_1, PLAYER_2],
        ...[PLAYER_2, PLAYER_1, EMPTY],
        ...[PLAYER_1, PLAYER_1, EMPTY],
      ];

      const winner = getWinner(board);

      expect(winner).toEqual(PLAYER_1);
    });

    it("should return Player 2 as winner when the third column is completed", () => {
      const board = [
        ...[PLAYER_1, PLAYER_1, PLAYER_2],
        ...[EMPTY, PLAYER_1, PLAYER_2],
        ...[PLAYER_1, EMPTY, PLAYER_2],
      ];

      const winner = getWinner(board);

      expect(winner).toEqual(PLAYER_2);
    });

    it("should return Player 1 as winner when the first diagonal is completed", () => {
      const board = [
        ...[PLAYER_1, PLAYER_1, PLAYER_2],
        ...[EMPTY, PLAYER_1, PLAYER_2],
        ...[PLAYER_2, EMPTY, PLAYER_1],
      ];

      const winner = getWinner(board);

      expect(winner).toEqual(PLAYER_1);
    });

    it("should return Player 2 as winner when the second diagonal is completed", () => {
      const board = [
        ...[PLAYER_1, PLAYER_1, PLAYER_2],
        ...[EMPTY, PLAYER_2, PLAYER_2],
        ...[PLAYER_2, PLAYER_1, PLAYER_1],
      ];

      const winner = getWinner(board);

      expect(winner).toEqual(PLAYER_2);
    });
  });
});
