import { useDirection } from "..";
import { renderHook } from "../../../tests/utils";

describe("useDirection()", () => {
  it("should return ltr when the locale is English", () => {
    expect.assertions(1);
    const { result } = renderHook(() => useDirection(), {
      router: { locale: "en" },
    });

    expect(result.current).toBe("ltr");
  });

  it("should return ltr when the locale is French", () => {
    expect.assertions(1);
    const { result } = renderHook(() => useDirection(), {
      router: { locale: "fr" },
    });

    expect(result.current).toBe("ltr");
  });

  it("should return rtl when the locale is Arabic", () => {
    expect.assertions(1);
    const { result } = renderHook(() => useDirection(), {
      router: { locale: "ar" },
    });

    expect(result.current).toBe("rtl");
  });
});
