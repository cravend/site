import React from "react";
import Hero from "../Hero";
import { render, screen } from "../../src/tests/utils";

describe("<Header />", () => {
  it("renders", () => {
    expect.assertions(1);
    const CHILD_TEXT = "Hello, world!";
    const { container } = render(
      <Hero>
        <p>{CHILD_TEXT}</p>
      </Hero>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders with a diagonal when isDiagonal is true", () => {
    expect.assertions(1);
    const CHILD_TEXT = "Hello, world!";
    const { container } = render(
      <Hero>
        <p>{CHILD_TEXT}</p>
      </Hero>
    );
    expect(container).toMatchSnapshot();
  });

  it("displays children", () => {
    expect.assertions(1);
    const CHILD_TEXT = "Hello, world!";
    render(
      <Hero>
        <p>{CHILD_TEXT}</p>
      </Hero>
    );
    expect(screen.getByText(CHILD_TEXT)).toMatchSnapshot();
  });
});
