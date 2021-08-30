const Intern = require("../lib/Intern");

describe("Intern", () => {

//Test that constructor is setting a school 
test("Can set school via constructor", () => {
  const testSchool = "YSU";
  const e = new Intern("Dave'sSon", 1, "davesson@test.com", testSchool);
  expect(e.school).toBe(testSchool);
});
//Test getRole returns Intern
test("getRole() should return Intern", () => {
  const testValue = "Intern";
  const e = new Intern("Dave'sSon", 1, "davesson@test.com", "YSU");
  expect(e.getRole()).toBe(testValue);
});
//Test getSchool returns the school
test("Can get school via getSchool()", () => {
  const testSchool = "YSU";
  const e = new Intern("Dave'sSon", 1, "davesson@test.com", testSchool);
  expect(e.getSchool()).toBe(testSchool);
});

});