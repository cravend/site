import * as nextIntl from "next-intl";

import { useLocale } from "..";
import { renderHook } from "../../../tests/utils";

jest.mock<typeof nextIntl>("next-intl", () => ({
  __esModule: true,
  ...jest.requireActual("next-intl"),
}));

describe("useLocale()", () => {
  it("should return the next-intl locale if it is valid", () => {
    expect.assertions(1);

    const mockLocale = jest.spyOn(nextIntl, "useLocale").mockReturnValue("fr");
    const { result } = renderHook(() => useLocale());
    mockLocale.mockRestore();

    expect(result.current).toStrictEqual(["fr", ["en", "ar"]]);
  });

  it("should return the router locale if it is valid", () => {
    expect.assertions(1);

    const mockLocale = jest.spyOn(nextIntl, "useLocale").mockReturnValue("abc");
    const { result } = renderHook(() => useLocale(), {
      router: { locale: "fr" },
    });
    mockLocale.mockRestore();

    expect(result.current).toStrictEqual(["fr", ["en", "ar"]]);
  });

  it("should return the router defaultLocale if it is valid", () => {
    expect.assertions(1);
    const { result } = renderHook(() => useLocale(), {
      router: { locale: "abc" as unknown as "en", defaultLocale: "fr" },
    });

    expect(result.current).toStrictEqual(["fr", ["en", "ar"]]);
  });

  it("should return the config defaultLocale if none of the above are valid", () => {
    expect.assertions(1);
    const { result } = renderHook(() => useLocale(), {
      router: { locale: "abc" as unknown as "en" },
    });

    expect(result.current).toStrictEqual(["en", ["fr", "ar"]]);
  });
});
