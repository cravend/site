import React from "react";
import { screen, render, fireEvent } from "../../src/tests/utils";
import LanguageToggle from "../LanguageToggle";

describe('<LanguageToggle /> { locale: "en" }', () => {
  it("renders", () => {
    expect.assertions(1);
    const { container } = render(<LanguageToggle />, {
      router: { locale: "en" },
    });
    expect(container).toMatchSnapshot();
  });

  it("displays a button in French", () => {
    expect.assertions(1);
    render(<LanguageToggle />, { router: { locale: "en" } });
    expect(
      screen.getByRole("link", { name: "Lire en français" })
    ).toBeInTheDocument();
  });

  it("routes to French", () => {
    expect.assertions(2);
    const pushMock = jest.fn();
    render(<LanguageToggle />, { router: { locale: "en", push: pushMock } });

    fireEvent.click(screen.getByRole("link", { name: "Lire en français" }));
    expect(pushMock).toHaveBeenCalledTimes(1);
    expect(pushMock).toHaveBeenLastCalledWith("/", "/", { locale: "fr" });
  });
});

describe('<LanguageToggle /> { locale: "fr" }', () => {
  it("renders", () => {
    expect.assertions(1);
    const { container } = render(<LanguageToggle />, {
      router: { locale: "fr" },
    });
    expect(container).toMatchSnapshot();
  });

  it("displays a button in English", () => {
    expect.assertions(1);
    render(<LanguageToggle />, { router: { locale: "fr" } });
    expect(
      screen.getByRole("link", { name: "Read in English" })
    ).toBeInTheDocument();
  });

  it("routes to English", () => {
    expect.assertions(2);
    const pushMock = jest.fn();
    render(<LanguageToggle />, { router: { locale: "fr", push: pushMock } });

    fireEvent.click(screen.getByRole("link", { name: "Read in English" }));
    expect(pushMock).toHaveBeenCalledTimes(1);
    expect(pushMock).toHaveBeenLastCalledWith("/", "/", { locale: "en" });
  });
});
