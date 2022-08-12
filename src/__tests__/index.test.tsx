import translationsAr from "../i18n/translations/ar.json";
import translationsEn from "../i18n/translations/en.json";
import translationsFr from "../i18n/translations/fr.json";
import IndexPage, { getStaticProps } from "../pages/index";
import { render } from "../tests/utils";

const cases = [
  { language: "English", langCode: "en", translations: translationsEn },
  { language: "French", langCode: "fr", translations: translationsFr },
  { language: "Arabic", langCode: "ar", translations: translationsAr },
] as const;

describe("<IndexPage />", () => {
  it.each(cases)("renders $language text", ({ langCode }) => {
    expect.assertions(1);
    const { container } = render(<IndexPage />, {
      router: { locale: langCode },
    });
    expect(container).toMatchSnapshot();
  });
});

describe("getStaticProps()", () => {
  it.each(cases)(
    "returns $language translations when the locale is `$langCode`",
    async ({ langCode, translations }) => {
      expect.assertions(1);
      await expect(getStaticProps({ locale: langCode })).resolves.toStrictEqual(
        { props: { messages: translations } }
      );
    }
  );

  it("returns English translations when the locale is invalid", async () => {
    expect.assertions(1);
    await expect(getStaticProps({ locale: "unknown" })).resolves.toStrictEqual({
      props: { messages: translationsEn },
    });
  });

  it("returns English translations when the locale is undefined", async () => {
    expect.assertions(1);
    await expect(getStaticProps({})).resolves.toStrictEqual({
      props: { messages: translationsEn },
    });
  });
});
