import { render } from "../../../tests/utils";
import Intro from "../Intro";

describe("<Intro />", () => {
  it("renders", () => {
    expect.assertions(1);
    const { container } = render(<Intro />);
    expect(container).toMatchSnapshot();
  });
});
