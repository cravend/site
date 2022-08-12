import { render, screen } from "../../tests/utils";
import Hero from "../Hero";

describe("<Header />", () => {
  it("renders", () => {
    expect.assertions(1);
    const CHILD_TEXT = "Hello, world!";
    const { container } = render(
      <Hero>
        <p>{CHILD_TEXT}</p>
      </Hero>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders with a diagonal when isDiagonal is true", () => {
    expect.assertions(1);
    const CHILD_TEXT = "Hello, world!";
    const { container } = render(
      <Hero>
        <p>{CHILD_TEXT}</p>
      </Hero>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the diagonal in the opposite direction when a language is RTL", () => {
    expect.assertions(1);
    const CHILD_TEXT = "Hello, world!";
    const { container } = render(
      <Hero>
        <p>{CHILD_TEXT}</p>
      </Hero>,
      { router: { locale: "ar" } }
    );
    expect(container).toMatchSnapshot();
  });

  it("displays children", () => {
    expect.assertions(1);
    const CHILD_TEXT = "Hello, world!";
    render(
      <Hero>
        <p>{CHILD_TEXT}</p>
      </Hero>
    );
    expect(screen.getByText(CHILD_TEXT)).toMatchSnapshot();
  });
});
