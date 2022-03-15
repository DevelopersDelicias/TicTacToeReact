import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Stats from "../../src/components/Stats";

describe("Stats", () => {
  it("should display a label for the Next Player", () => {
    render(<Stats marksInBoard={0} />);

    const nextPlayerLabel = screen.getByText(/Next Player/);

    expect(nextPlayerLabel).toBeInTheDocument();
  });

  it("should display a label for the number of marks", () => {
    render(<Stats marksInBoard={0} />);

    const numberOfMarksLabel = screen.getByText(/Number of marks/);

    expect(numberOfMarksLabel).toBeInTheDocument();
  });

  it("should display a label for the winner", () => {
    render(<Stats marksInBoard={0} />);

    const winnerLabel = screen.getByText(/Winner/);

    expect(winnerLabel).toBeInTheDocument();
  });

  it("should display the current marks in board", () => {
    const marksInBoard = Math.floor(Math.random() * 100);
    render(<Stats marksInBoard={marksInBoard} />);

    const marksInBoardText = screen.getByText(marksInBoard);

    expect(marksInBoardText).toBeInTheDocument();
  });
});
