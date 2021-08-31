const Employee = require("../lib/Employee");

describe("Employee", () => {
    //test to check if Employee makes an object
    test("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof e).toBe("object");
    });

    //test to check if name is correctly acquired
    test("Can collect name with constructor", () => {
        const name =  "Dave";
        const e = new Employee(name);
        expect(e.name).toBe(name);        
    });

    //test to check ID collection
    test("Can collect id with constructor", () => {
        const testId = 1;
        const e = new Employee("Dave", testId);
        expect(e.id).toBe(testId);
    });

    //test to check Email collection
    test("Can collect Email using constructor", () => {
        const testEmail = "dave@test.com";
        const e = new Employee("Dave", 1, testEmail);
        expect(e.email).toBe(testEmail);
    });

    //test to check setting the employee role
    test("getRole() should return Employee", () => {
        const testRole = "Employee";
        const e = new Employee("Dave", 1, "dave@test.com");
        expect(e.getRole()).toBe(testRole);
      });

});