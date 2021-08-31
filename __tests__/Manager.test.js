const Manager = require("../lib/Manager");

describe("Manager", () => {

    test("Can set an office number with constructor", () => {
        const testOfficeNum = 42;
        const e = new Manager("Dave", 1, "dave@test.com", testOfficeNum);
        expect(e.officeNumber).toBe(testOfficeNum);
      });
      
      test("getRole() should return Manager", () => {
        const testRole = "Manager";
        const e = new Manager("Dave", 1, "dave@test.com", 42);
        expect(e.getRole()).toBe(testRole);
      });
      
      test("Can get office number with getOffice()", () => {
        const testOfficeNum = 42;
        const e = new Manager("Dave", 1, "dave@test.com", testOfficeNum);
        expect(e.getOfficeNumber()).toBe(testOfficeNum);
      });

})