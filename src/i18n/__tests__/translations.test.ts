import en from "../translations/en.json";
import fr from "../translations/fr.json";

const translations = { en, fr };
function objectsHaveSameKeys(...objects: Record<string, unknown>[]) {
  const allKeys = objects.reduce<string[]>(
    (keys, object) => keys.concat(Object.keys(object)),
    []
  );
  const union = new Set(allKeys);
  return objects.every((object) => union.size === Object.keys(object).length);
}

describe("translations", () => {
  it("has the same keys for each translation file", () => {
    expect.assertions(1);
    expect(objectsHaveSameKeys(...Object.values(translations))).toBe(true);
  });
});
