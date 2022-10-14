const analyzeArray = require("../codes/analyzeArray");

test("Return null with empty array", () => {
  expect(analyzeArray([])).toBeNull();
});

test("Return object {avg:4,min:1,max:8,len:6}", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Return object {avg:19.48,min:0,max:66,len:10}", () => {
  expect(analyzeArray([4, 2, 5, 66, 23, 44, 0, 43, 4.5, 3.3])).toEqual({
    average: 19.48,
    min: 0,
    max: 66,
    length: 10,
  });
});
