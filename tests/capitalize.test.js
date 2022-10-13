const capitalize = require("../codes/capitalize");

test("Is it a string", () => {
  expect(typeof capitalize("word")).toBe("string");
});

test("Is first letter is capitalized", () => {
  expect(capitalize("christoph")).toBe("Christoph");
});

test("It is work with more words", () => {
  expect(capitalize("word and world")).toBe("Word and world");
});

test("If it is start with upper", () => {
  expect(capitalize("Test")).toBe("Test");
});

test("All words is upper", () => {
  expect(capitalize("UPPER WORD")).toBe("UPPER WORD");
});

test("Empty input-string", () => {
  expect(capitalize("")).toBe("");
});
