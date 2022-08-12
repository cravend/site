import IndexPage, { getStaticProps } from "../pages/index";
import { render } from "../tests/utils";

describe("<IndexPage />", () => {
  it("renders English text", () => {
    expect.assertions(1);
    const { container } = render(<IndexPage />, { router: { locale: "en" } });
    expect(container).toMatchSnapshot();
  });

  it("renders French text", () => {
    expect.assertions(1);
    const { container } = render(<IndexPage />, { router: { locale: "fr" } });
    expect(container).toMatchSnapshot();
  });

  it("renders Arabic text", () => {
    expect.assertions(1);
    const { container } = render(<IndexPage />, { router: { locale: "ar" } });
    expect(container).toMatchSnapshot();
  });
});

describe("getStaticProps()", () => {
  it("returns English translations when the locale is `en`", () => {
    expect.assertions(1);
    expect(getStaticProps({ locale: "en" })).toStrictEqual(
      import("../i18n/translations/en.json")
    );
  });

  it("returns French translations when the locale is `fr`", () => {
    expect.assertions(1);
    expect(getStaticProps({ locale: "fr" })).toStrictEqual(
      import("../i18n/translations/fr.json")
    );
  });

  it("returns Arabic translations when the locale is `ar`", () => {
    expect.assertions(1);
    expect(getStaticProps({ locale: "ar" })).toStrictEqual(
      import("../i18n/translations/ar.json")
    );
  });

  it("returns Arabic translations when the locale is invalid", () => {
    expect.assertions(1);
    expect(getStaticProps({ locale: "unknown" })).toStrictEqual(
      import("../i18n/translations/ar.json")
    );
  });

  it("returns English translations when the locale is undefined", () => {
    expect.assertions(1);
    expect(getStaticProps({})).toStrictEqual(
      import("../i18n/translations/ar.json")
    );
  });
});
