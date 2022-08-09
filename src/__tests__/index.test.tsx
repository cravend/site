import IndexPage from "../pages/index";
import { render } from "../tests/utils";

describe("<IndexPage />", () => {
  it("renders", () => {
    expect.assertions(1);
    const { container } = render(<IndexPage />);
    expect(container).toMatchSnapshot();
  });
});
