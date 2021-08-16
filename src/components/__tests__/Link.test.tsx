import { fireEvent, screen, render } from "../../tests/utils";
import Link from "../Link";

describe("<Link />", () => {
  it("renders", () => {
    expect.assertions(1);
    const LINK_TEXT = "Hello, world!";
    const { container } = render(<Link to="/">{LINK_TEXT}</Link>);
    expect(container).toMatchSnapshot();
  });

  it("pushes to another page when clicked", () => {
    expect.hasAssertions();
    const LINK_TEXT = "Hello, world!";
    const pushMock = jest.fn();

    render(<Link to="/test">{LINK_TEXT}</Link>, {
      router: { push: pushMock },
    });
    fireEvent.click(screen.getByText(LINK_TEXT));

    expect(pushMock).toHaveBeenCalledTimes(1);
    expect(pushMock).toHaveBeenLastCalledWith("/test", "/test", {});
  });

  it("renders an anchor tag for external HTTP links", () => {
    expect.assertions(2);
    const LINK_TEXT = "Hello, world!";
    const pushMock = jest.fn();

    render(<Link to="http://www.test.com/">{LINK_TEXT}</Link>, {
      router: { push: pushMock },
    });
    fireEvent.click(screen.getByText(LINK_TEXT));

    expect(pushMock).not.toHaveBeenCalled();
    expect(screen.getByRole("link", { name: LINK_TEXT })).toHaveAttribute(
      "href",
      "http://www.test.com/"
    );
  });

  it("renders an anchor tag for external HTTPS links", () => {
    expect.assertions(2);
    const LINK_TEXT = "Hello, world!";
    const pushMock = jest.fn();

    render(<Link to="https://www.test.com/">{LINK_TEXT}</Link>, {
      router: { push: pushMock },
    });
    fireEvent.click(screen.getByText(LINK_TEXT));

    expect(pushMock).not.toHaveBeenCalled();
    expect(screen.getByRole("link", { name: LINK_TEXT })).toHaveAttribute(
      "href",
      "https://www.test.com/"
    );
  });

  it("renders an anchor tag for forced external links", () => {
    expect.assertions(2);
    const LINK_TEXT = "Hello, world!";
    const pushMock = jest.fn();

    render(
      <Link to="/" isExternal>
        {LINK_TEXT}
      </Link>,
      { router: { push: pushMock } }
    );
    fireEvent.click(screen.getByText(LINK_TEXT));

    expect(pushMock).not.toHaveBeenCalled();
    expect(screen.getByRole("link", { name: LINK_TEXT })).toHaveAttribute(
      "href",
      "/"
    );
  });

  it("updates the router locale when clicked", () => {
    expect.assertions(2);
    const LINK_TEXT = "Hello, world!";
    const NEW_LOCALE = "fr";
    const pushMock = jest.fn();
    render(
      <Link to="/" locale={NEW_LOCALE}>
        {LINK_TEXT}
      </Link>,
      { router: { push: pushMock } }
    );

    fireEvent.click(screen.getByRole("link", { name: LINK_TEXT }));
    expect(pushMock).toHaveBeenCalledTimes(1);
    expect(pushMock).toHaveBeenLastCalledWith("/", "/", {
      locale: NEW_LOCALE,
      scroll: undefined,
      shallow: undefined,
    });
  });
});
