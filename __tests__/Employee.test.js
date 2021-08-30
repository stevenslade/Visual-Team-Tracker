const Employee = require("../lib/Employee");

describe("Employee", () => {
    test("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof e).toBe("object");
    });
});