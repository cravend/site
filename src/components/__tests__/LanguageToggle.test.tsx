import { screen, render, fireEvent } from "../../tests/utils";
import LanguageToggle from "../LanguageToggle";

const cases = [
  {
    locale: "en",
    others: [
      { keyword: "French", link: "Français", locale: "fr" },
      { keyword: "Arabic", link: "العربية", locale: "ar" },
    ],
  },
  {
    locale: "fr",
    others: [
      { keyword: "English", link: "English", locale: "en" },
      { keyword: "Arabic", link: "العربية", locale: "ar" },
    ],
  },
  {
    locale: "ar",
    others: [
      { keyword: "English", link: "English", locale: "en" },
      { keyword: "French", link: "Français", locale: "fr" },
    ],
  },
] as const;

describe.each(cases)(
  '<LanguageToggle /> { locale: "$locale" }',
  ({ locale, others: baseOthers }) => {
    const others = [...baseOthers];
    it("renders", () => {
      expect.assertions(1);
      const { container } = render(<LanguageToggle />, {
        router: { locale },
      });
      expect(container).toMatchSnapshot();
    });

    it.each(others)("displays a link to read in $keyword", ({ link }) => {
      expect.assertions(1);
      render(<LanguageToggle />, { router: { locale } });
      expect(screen.getByRole("link", { name: link })).toBeInTheDocument();
    });

    it.each(others)("routes to $keyword", ({ link, locale: otherLocale }) => {
      expect.assertions(2);
      const pushMock = jest.fn();
      render(<LanguageToggle />, {
        router: { locale, push: pushMock },
      });

      fireEvent.click(screen.getByRole("link", { name: link }));
      expect(pushMock).toHaveBeenCalledTimes(1);
      expect(pushMock).toHaveBeenLastCalledWith("/", "/", {
        locale: otherLocale,
      });
    });
  }
);
