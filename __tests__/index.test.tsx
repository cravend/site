import { render } from "../src/tests/utils";
import IndexPage from "../pages/index";

describe("<IndexPage />", () => {
  it("renders", () => {
    expect.assertions(1);
    const { container } = render(<IndexPage />);
    expect(container).toMatchSnapshot();
  });
});
