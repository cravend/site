import React from "react";
import Header from "../Header";
import { render } from "../../src/tests/utils";

describe("<Header />", () => {
  it("renders", () => {
    expect.assertions(1);
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
