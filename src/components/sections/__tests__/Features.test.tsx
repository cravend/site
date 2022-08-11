import { render } from "../../../tests/utils";
import Features from "../Features";

describe("<Features />", () => {
  it("renders", () => {
    expect.assertions(1);
    const { container } = render(<Features />);
    expect(container).toMatchSnapshot();
  });
});
