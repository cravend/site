import Footer from "../Footer";
import { render, screen } from "../../tests/utils";

describe("<Footer />", () => {
  it("renders", () => {
    expect.assertions(1);
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it("displays the current year", () => {
    expect.assertions(1);
    render(<Footer />);
    expect(
      screen.getByText(new Date().getFullYear(), { exact: false })
    ).toMatchSnapshot();
  });
});
