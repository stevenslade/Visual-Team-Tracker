const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    //Test the constructor creating github user
    test("Can get GitHUb account name with constructor", () => {
        const testGitHubUser = "GitHubUser";
        const e = new Engineer("Dave", 1, "dave@test.com", testGitHubUser);
        expect(e.github).toBe(testGitHubUser);
      });
      //Test the getGithub() function
      test("Can getRole() return Engineer", () => {
        const testRole = "Engineer";
        const e = new Engineer("Dave", 1, "dave@test.com", "GitHubUser");
        expect(e.getRole()).toBe(testRole);
      });
      //Test the getRole() function
      test("Can get GitHub username via getGithub()", () => {
        const testGitHubUser = "GitHubUser";
        const e = new Engineer("Dave", 1, "dave@test.com", testGitHubUser);
        expect(e.getGithub()).toBe(testGitHubUser);
      });
});