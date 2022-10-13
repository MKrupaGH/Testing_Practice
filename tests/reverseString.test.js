const reverseString = require("../codes/reverseString");

test("Output typeof string", () => {
  expect(typeof reverseString("Car")).toBe("string");
});

test("Revers single word", () => {
  expect(reverseString("Racers")).toBe("srecaR");
});

test("Revers multi words", () => {
  expect(reverseString("I like Porsche")).toBe("ehcsroP ekil I");
});

test("Revers everything", () => {
  expect(reverseString("123 eat go #22H")).toBe("H22# og tae 321");
});

test("Input ''", () => {
  expect(reverseString("")).toBe("");
});
