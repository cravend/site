import { render } from "../../../tests/utils";
import Contact from "../Contact";

describe("<Contact />", () => {
  it("renders", () => {
    expect.assertions(1);
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });
});
