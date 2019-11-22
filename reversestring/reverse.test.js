const { reverse } = require("./reverse");

test("Reverse function exits", () => {
  expect(reverse).toBeDefined();
});

test('When call reverse("abcd") should return "dcba"', () => {
  expect(reverse("abcd")).toEqual("dcba");
});

test("When call reverse('  abcd') should return 'dcba  ' ", () => {
  expect(reverse("  abcd")).toEqual("dcba  ");
});
