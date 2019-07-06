import stringPeeler from "./string-peeler";
import countVowels from "./vowel-counter";
import diamond from "./diamond";

it("should test the String peeler functionality", () => {
  expect(stringPeeler("hello all")).toBe("ello al");
  expect(stringPeeler("   hello all   ")).toBe("ello al");
  expect(stringPeeler("Hi")).toBeNull();
});

it("should return number of vowels in the given string", () => {
  expect(countVowels("hello all")).toBe(3);
  expect(countVowels("HaI All!!! How ARe YoU?")).toBe(8);
});

it("should return diamond string of specified row length", () => {
  expect(diamond(11)).toHaveLength(131);
  expect(diamond(2)).toBeNull();
});
