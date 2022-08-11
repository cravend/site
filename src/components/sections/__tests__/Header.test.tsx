import { render } from "../../../tests/utils";
import Header from "../Header";

describe("<Header />", () => {
  it("renders", () => {
    expect.assertions(1);
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
