import React from "react";
import { screen, render } from "../../src/tests/utils";
import Feature from "../Feature";

describe("<Feature />", () => {
  it("renders", () => {
    expect.assertions(1);
    const FEATURE_HEADING = "Feature heading";
    const CHILD_TEXT = "Hello, world!";

    const { container } = render(
      <Feature heading={FEATURE_HEADING}>
        <p>{CHILD_TEXT}</p>
      </Feature>
    );
    expect(container).toMatchSnapshot();
  });

  it("displays text", () => {
    expect.assertions(1);
    const FEATURE_HEADING = "Feature heading";
    const CHILD_TEXT = "Hello, world!";

    render(
      <Feature heading={FEATURE_HEADING}>
        <p>{CHILD_TEXT}</p>
      </Feature>
    );

    expect(
      screen.getByRole("heading", { name: FEATURE_HEADING })
    ).toBeInTheDocument();
  });

  it("displays a level-two heading", () => {
    expect.assertions(1);
    const FEATURE_HEADING = "Feature heading";
    const CHILD_TEXT = "Hello, world!";

    render(
      <Feature heading={FEATURE_HEADING}>
        <p>{CHILD_TEXT}</p>
      </Feature>
    );

    expect(
      screen.getByRole("heading", { name: FEATURE_HEADING, level: 2 })
    ).toBeInTheDocument();
  });

  it("displays child components", () => {
    expect.assertions(1);
    const FEATURE_HEADING = "Feature heading";
    const CHILD_TEXT = "Hello, world!";

    render(
      <Feature heading={FEATURE_HEADING}>
        <p>{CHILD_TEXT}</p>
      </Feature>
    );

    expect(screen.getByText(CHILD_TEXT)).toBeInTheDocument();
  });
});
