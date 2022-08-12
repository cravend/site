import { useRtl } from "..";
import { renderHook } from "../../../tests/utils";

describe("useRtl()", () => {
  it("should return false when the locale is English", () => {
    expect.assertions(1);
    const { result } = renderHook(() => useRtl(), {
      router: { locale: "en" },
    });

    expect(result.current).toBe(false);
  });

  it("should return false when the locale is French", () => {
    expect.assertions(1);
    const { result } = renderHook(() => useRtl(), {
      router: { locale: "fr" },
    });

    expect(result.current).toBe(false);
  });

  it("should return true when the locale is Arabic", () => {
    expect.assertions(1);
    const { result } = renderHook(() => useRtl(), {
      router: { locale: "ar" },
    });

    expect(result.current).toBe(true);
  });
});
