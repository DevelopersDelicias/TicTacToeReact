import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Stats from "../../src/components/Stats";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Section from "../../src/components/Section";

configure({ adapter: new Adapter() });

describe("Stats", () => {
  it("renders", () => {
    const wrapper = shallow(<Stats marksInBoard={0} />);
    expect(wrapper).toBeDefined();
  });

  it("renders a div element", () => {
    const wrapper = shallow(<Stats marksInBoard={0} />);
    expect(wrapper.type()).toBe("div");
  });

  it("renders 3 sections", () => {
    const wrapper = shallow(<Stats marksInBoard={0} />);
    expect(wrapper.find(Section)).toHaveLength(3);
  });

  it("renders next player section as first section", () => {
    const wrapper = shallow(<Stats marksInBoard={0} />);

    const firstSection = wrapper.find(Section).at(0);

    expect(firstSection.prop("id")).toBe("nextPlayer");
    expect(firstSection.prop("label")).toBe("Next Player:");
    expect(firstSection.prop("message")).toBe("Nobody");
  });

  it("renders number of marks section as second section", () => {
    const marksInBoard = Math.floor(Math.random() * 100);
    const wrapper = shallow(<Stats marksInBoard={marksInBoard} />);

    const secondSection = wrapper.find(Section).at(1);

    expect(secondSection.prop("id")).toBe("numberOfMarks");
    expect(secondSection.prop("label")).toBe("Number of marks:");
    expect(secondSection.prop("message")).toBe(marksInBoard);
  });

  it("renders winner section as third section", () => {
    const wrapper = shallow(<Stats marksInBoard={0} />);

    const thirdSection = wrapper.find(Section).at(2);

    expect(thirdSection.prop("id")).toBe("winner");
    expect(thirdSection.prop("label")).toBe("Winner:");
    expect(thirdSection.prop("message")).toBe("Nobody");
  });

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
