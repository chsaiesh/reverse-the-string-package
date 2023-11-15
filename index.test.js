const reverseTheString = require("./index");

describe("Reverse the string test cases", () => {
  test("Reverse the string 'This text should be reversed'", () => {
    expect(reverseTheString('This text should be reversed')).toBe('desrever eb dluohs txet sihT');
  });

  test("Reverse the string 'another test case'", () => {
    expect(reverseTheString('another test case')).toBe('esac tset rehtona');
  });
});