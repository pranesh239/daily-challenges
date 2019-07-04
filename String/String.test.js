import stringPeeler from "./string-peeler";
import countVowels from "./vowel-counter";

it("should test the String peeler functionality", () => {
  expect(stringPeeler("hello all")).toBe("ello al");
  expect(stringPeeler("   hello all   ")).toBe("ello al");
  expect(stringPeeler("Hi")).toBeNull();
});

it("should return number of vowels in the given string", () => {
  expect(countVowels("hello all")).toBe(3);
  expect(countVowels("HaI All!!! How ARe YoU?")).toBe(8);
});
