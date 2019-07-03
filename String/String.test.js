import stringPeeler from "./string-peeler";

it("should test the String peeler functionality", () => {
  expect(stringPeeler("hello all")).toBe("ello al");
  expect(stringPeeler("   hello all   ")).toBe("ello al");
  expect(stringPeeler("Hi")).toBeNull();
});
