const render = require("./src/page-template.js");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");


const team = [
    new Manager("Trey", 1, "trey@trey.com"),
    new Engineer("Trey", 1, "trey@trey.com"),
    new Intern("Trey", 1, "trey@trey.com"),
]
console.log(render());


function writeFile() {
   fs.writeFileSync(outputPath, render(team), "utf-8");
}

function init(){
    //inquirer

}