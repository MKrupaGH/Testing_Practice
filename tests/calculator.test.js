const calc = require("../codes/calculator");

test("Add 10 + 10 to get 20", () => {
  expect(calc.add(10, 10)).toBe(20);
});

test("Add 0.1 + 0.2 to get 0.3", () => {
  expect(calc.add(0.1, 0.2)).toBe(0.3);
});

test("Subtract 10 - 20 to get -10", () => {
  expect(calc.subtract(10, 20)).toBe(-10);
});

test("Subtract 0.3 - 0.2 to get 0.1", () => {
  expect(calc.subtract(0.3, 0.2)).toBe(0.1);
});

test("Divide 50 / 10 to get 5", () => {
  expect(calc.divide(50, 10)).toBe(5);
});

test("Divide 50 / -10 to get -5", () => {
  expect(calc.divide(50, -10)).toBe(-5);
});

test("Divide 5 / 2 to get 2.5", () => {
  expect(calc.divide(5, 2)).toBe(2.5);
});

test("Divide 50 / 0 to get info", () => {
  expect(calc.divide(50, 0)).toBe("Can't divide by zero!");
});

test("Multiply 10 * 6.7 to get 67", () => {
  expect(calc.multiply(10, 6.7)).toBe(67);
});

test("Multiply 0.3 * 0.2 to get 0.06", () => {
  expect(calc.multiply(0.3, 0.2)).toBe(0.06);
});

test("Multiply 0.3 * -0.2 to get -0.06", () => {
  expect(calc.multiply(0.3, -0.2)).toBe(-0.06);
});


test("Multiply 33 * 0 to get 0", () => {
  expect(calc.multiply(33, 0)).toBe(0);
});