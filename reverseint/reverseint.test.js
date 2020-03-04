const { reverseInt } = require("./reverseint");

test("Reverse function exits", () => {
  expect(reverseInt).toBeDefined();
});

// test('When call reverseInt("5") should throw a error', () => {
//   expect(reverseInt("5")).toThrowError("5 must be a number");
// });
test("When call reverseInt(500) should return 5", () => {
  expect(reverseInt(500)).toEqual(5);
});

test("When call reverseInt(-90) should return -9", () => {
  expect(reverseInt(-90)).toEqual(-9);
});
