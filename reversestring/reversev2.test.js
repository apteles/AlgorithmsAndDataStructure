const { reversev2 } = require("./reverse");

test("Reverse function exits", () => {
  expect(reversev2).toBeDefined();
});

test('When call reversev2("abcd") should return "dcba"', () => {
  expect(reversev2("abcd")).toEqual("dcba");
});

test("When call reversev2('  abcd') should return 'dcba  ' ", () => {
  expect(reversev2("  abcd")).toEqual("dcba  ");
});
