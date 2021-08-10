import useLocalization from "../useLocalization";

jest.mock("next/router", () => ({
  useRouter: () => ({ locale: "en" }),
}));

describe("useLocalization()", () => {
  it("returns an array of three items", () => {
    expect.assertions(2);

    expect(useLocalization()).toBeDefined();
    expect(useLocalization()).toHaveLength(3);
  });

  it("provides a function for translating keys", () => {
    expect.assertions(1);

    const [t] = useLocalization();
    expect(t("homepage")).toBe("Home");
  });

  it("throws a warning if a key cannot be found", () => {
    expect.assertions(3);

    const spy = jest.spyOn(console, "warn").mockImplementation();

    const [t] = useLocalization();
    expect(t("unknown")).toBe("");
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(
      `Translation 'unknown' for locale 'en' not found.`
    );

    spy.mockRestore();
  });

  it("returns the current and opposite locales", () => {
    expect.assertions(2);

    const [, currentLocale, otherLocale] = useLocalization();
    expect(currentLocale).toBe("en");
    expect(otherLocale).toBe("fr");
  });
});
