import { render } from "../../../tests/utils";
import Skills from "../Skills";

describe("<Skills />", () => {
  it("renders", () => {
    expect.assertions(1);
    const { container } = render(<Skills />);
    expect(container).toMatchSnapshot();
  });
});
